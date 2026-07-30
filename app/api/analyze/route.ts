import { NextRequest, NextResponse } from "next/server";
import { ai } from "@/lib/gemini";

export async function POST(req: NextRequest) {
  try {
    const { resumeText, jobDescription } = await req.json();

    if (!resumeText) {
      return NextResponse.json(
        { error: "Resume text is required." },
        { status: 400 },
      );
    }

    const prompt = `
You are an expert ATS (Applicant Tracking System) resume reviewer and career coach.

Analyze the resume.

If a job description is provided, compare the resume against it and calculate a Job Match Score.

Return ONLY valid JSON.

Do not use markdown.
Do not include explanations.
Do not wrap the JSON inside code blocks.

Return EXACTLY this structure:

{
  "atsScore": number,
  "matchScore": number,
  "strengths": [
    "string"
  ],
  "weaknesses": [
    "string"
  ],
  "suggestions": [
    "string"
  ],
  "matchingKeywords": [
    "string"
  ],
  "missingKeywords": [
    "string"
  ],
  "sectionScores": {
    "skills": number,
    "experience": number,
    "projects": number,
    "education": number,
    "formatting": number
  }
}

Rules:

- atsScore must be between 0 and 100.
- matchScore must be between 0 and 100.
- If no job description is provided, estimate matchScore based on general ATS best practices.
- Return 3–6 strengths.
- Return 3–6 weaknesses.
- Return 4–8 suggestions.
- matchingKeywords should contain keywords found in both the resume and the job description.
- missingKeywords should contain important job description keywords missing from the resume.

Resume:

${resumeText}

Job Description:

${jobDescription || "Not provided"}
`;

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: prompt,
    });

    const raw = response.text ?? "{}";

    const cleaned = raw
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const result = JSON.parse(cleaned);

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
