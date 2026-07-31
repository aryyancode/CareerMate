<div align="center">

# 🚀 CareerMate

## 🌐 Live Demo

👉 https://careermate-dflf8f5t5-aryyancode1.vercel.app/

### AI-Powered Resume Analyzer & ATS Optimizer

Analyze resumes, compare them with job descriptions, calculate ATS scores, identify missing keywords, and receive AI-powered improvement suggestions.

---

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Google Gemini](https://img.shields.io/badge/Google-Gemini-4285F4?logo=google)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

---

## 📖 Overview

CareerMate is an AI-powered web application that helps job seekers improve their resumes using Google Gemini AI.

Users can upload a resume, receive an ATS score, compare it against a job description, discover missing keywords, and get personalized AI suggestions to improve their chances of getting shortlisted.

> 🚧 This project is currently under active development.

---

# ✨ Features

- 📄 Upload PDF resumes
- 🤖 AI-powered resume analysis using Google Gemini
- 📊 ATS compatibility score
- 🎯 Resume vs Job Description matching (Coming Soon)
- 🔍 Missing & matching keyword detection
- 💡 Personalized AI improvement suggestions
- ⚡ Modern, responsive UI
- 🌙 Smooth animations with Framer Motion
- 🛡️ Built with TypeScript for type safety
- 🚀 Fast performance with Next.js 15

---

# 🛠️ Tech Stack

### Frontend

- **Next.js 15** — React framework for production applications
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — UI animations

### AI & Processing

- **Google Gemini AI** — Resume analysis and suggestions
- **PDF.js** — Resume text extraction

### Tools

- **ESLint** — Code quality
- **Git & GitHub** — Version control
- **Vercel** — Deployment

---

# 📂 Project Structure

```
CareerMate/
│
├── app/
│   ├── analyze/          # Resume analysis page
│   ├── api/              # Backend API routes
│   ├── globals.css
│   └── layout.tsx
│
├── components/
│   ├── analyze/          # Analysis dashboard components
│   ├── landing/          # Landing page components
│   └── ui/               # Reusable UI components
│
├── lib/
│   ├── gemini.ts         # Gemini AI configuration
│   ├── pdf.ts            # PDF text extraction
│   └── utils.ts
│
├── types/
│
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

# 🚀 Getting Started

Follow these steps to run CareerMate locally.

## 1. Clone the repository

```bash
git clone https://github.com/aryyancode/CareerMate.git
```

## 2. Navigate into the project

```bash
cd CareerMate
```

## 3. Install dependencies

```bash
npm install
```

## 4. Setup environment variables

Create a `.env.local` file:

```env
GOOGLE_API_KEY=your_gemini_api_key
```

Add your Google Gemini API key.

## 5. Run the development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 📸 Screenshots

Coming soon.

---

# 🗺️ Roadmap

### ✅ Completed

- [x] Modern SaaS landing page
- [x] Resume PDF upload
- [x] PDF text extraction
- [x] Gemini AI integration
- [x] ATS score generation
- [x] AI feedback system
- [x] Resume analysis dashboard
- [x] GitHub project setup

### 🚧 In Progress

- [ ] Resume vs Job Description matching
- [ ] Missing keyword detection
- [ ] Section-wise resume scoring

### 🔮 Future Plans

- [ ] User authentication
- [ ] Resume history dashboard
- [ ] AI resume rewriting
- [ ] Export analysis report as PDF
- [ ] Multiple resume versions
- [ ] Advanced career recommendations

---

# 🤝 Contributing

Contributions, suggestions, and feature requests are welcome.

If you would like to improve CareerMate:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

# 📄 License

This project is licensed under the MIT License.
