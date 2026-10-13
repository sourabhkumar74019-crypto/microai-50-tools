import { GoogleGenerativeAI } from "@google/generative-ai";

// Vercel / Environment variable se API Key read karna
const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {
  console.error("⚠️ GEMINI_API_KEY missing in environment variables!");
}

// Google Generative AI Instance Initialize karna
const genAI = new GoogleGenerativeAI(apiKey || "");

// Standard Model Configuration (Gemini 1.5 Pro / Flash)
export const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // Fast and efficient for micro-SaaS tools
});

export default genAI;
