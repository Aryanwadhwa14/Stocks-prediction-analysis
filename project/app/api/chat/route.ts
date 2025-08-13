import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const MODEL_CANDIDATES = ['gemini-1.5-flash', 'gemini-2.0-flash'];

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: 'Missing prompt' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Missing GEMINI_API_KEY' }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // Finance-focused system guidance
    const systemPreamble = `You are StockAI, a helpful financial research assistant. 
- Provide balanced, educational analysis for stock-related questions.
- Use clear structure with bullet points and short paragraphs.
- Include key metrics when available (trend overview, catalysts, risks, time horizons).
- Never give guaranteed returns or personalized financial advice.
- Always cite sources for data and claims.
- If you don't know the answer, say "I don't know" instead of making up information.`;

    const enhancedPrompt = `${systemPreamble}\n\nUser question: ${prompt}`;

    let text = '';
    let lastError: unknown = null;

    for (const modelName of MODEL_CANDIDATES) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(enhancedPrompt);
        const response = await result.response;
        text = response.text();
        if (text && text.trim().length > 0) break;
      } catch (err) {
        lastError = err;
      }
    }

    if (!text) {
      console.error('Gemini error:', lastError);
      return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
    }

    return NextResponse.json({ text });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
} 