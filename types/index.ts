export interface SectionFeedback {
  section: "Education" | "Projects" | "Experience" | "Skills" | "Achievements";
  currentAnalysis: string;
  problems: string[];
  suggestions: string[];
  exampleRewrite: string;
}

export interface ResumeAnalysis {
  atsScore: number;
  grammarScore: number;
  technicalSkillsScore: number;
  softSkillsScore: number;
  formattingScore: number;
  keywordMatchScore: number;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  missingKeywords: string[];
  improvedBulletPoints: { original: string; improved: string }[];
  professionalSummary: string;
  sectionFeedback: SectionFeedback[];
}

export interface JobMatchResult {
  percentageMatch: number;
  missingSkills: string[];
  missingKeywords: string[];
  recommendedChanges: string[];
}

export interface AnalyzeRequestPayload {
  resumeText: string;
  jobDescription?: string;
}
