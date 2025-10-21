import Groq from 'groq-sdk'

const apiKey = import.meta.env.VITE_GROQ_API_KEY
const groq = new Groq({ apiKey, dangerouslyAllowBrowser: true })

export async function summarizeText(text: string): Promise<string> {
  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: `Summarize the following text concisely, keeping the main points:\n\n${text}`
      }
    ],
    model: 'llama-3.3-70b-versatile',
    temperature: 0.7,
  })

  return completion.choices[0]?.message?.content || ''
}

export async function rewriteText(text: string): Promise<string> {
  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: `Rewrite and improve the following text while maintaining its core message and tone:\n\n${text}`
      }
    ],
    model: 'llama-3.3-70b-versatile',
    temperature: 0.7,
  })

  return completion.choices[0]?.message?.content || ''
}
