import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

export async function generateResponse(prompt: string): Promise<string> {
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Failed to get response');
    }

    const data = (await res.json()) as { text: string };
    return data.text || 'I could not generate a response at the moment.';
  } catch (error) {
    console.error('Error generating response:', error);
    return 'I apologize, but I encountered an error processing your request. Please try again.';
  }
}   