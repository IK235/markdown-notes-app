import { GoogleGenerativeAI } from '@google/generative-ai'

const apiKey = import.meta.env.VITE_GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(apiKey)

export async function summarizeText(text: string): Promise<string> {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' })

  const prompt = `Summarize the following text concisely, keeping the main points:\n\n${text}`

  const result = await model.generateContent(prompt)
  const response = await result.response
  return response.text()
}

export async function rewriteText(text: string): Promise<string> {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' })

  const prompt = `Rewrite and improve the following text while maintaining its core message and tone:\n\n${text}`

  const result = await model.generateContent(prompt)
  const response = await result.response
  return response.text()
}
