import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! })

export async function POST(req: NextRequest) {
  const { content } = await req.json()

  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: `Summarize this whiteboard session:\n${content}` }],
    model: 'gpt-4'
  })

  return NextResponse.json({ summary: completion.choices[0].message.content })
}

