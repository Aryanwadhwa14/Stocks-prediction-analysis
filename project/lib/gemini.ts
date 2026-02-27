// lib/generateResponse.ts

export async function generateResponse(prompt: string): Promise<string> {
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('API Error:', errorText);
      throw new Error('Failed to get response from server');
    }

    const data: { text?: string } = await res.json();

    return data.text?.trim() || 
      'I could not generate a response at the moment.';
      
  } catch (error) {
    console.error('Error generating response:', error);
    return 'Server is busy or quota exceeded. Please try again shortly.';
  }
}