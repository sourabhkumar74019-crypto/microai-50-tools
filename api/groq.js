export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { toolId, input } = req.body;

  if (!process.env.GROQ_API_KEY) {
    return res.status(500).json({ error: 'GROQ_API_KEY is missing in Vercel Environment Variables.' });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b',
        messages: [
          {
            role: 'system',
            content: `You are an expert AI assistant specializing in ${toolId || 'content generation'}. Provide clear, high-quality output.`
          },
          {
            role: 'user',
            content: input
          }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'Groq API error' });
    }

    const aiOutput = data.choices[0]?.message?.content || 'No output generated.';
    return res.status(200).json({ result: aiOutput });

  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Internal Server Error: ' + err.message });
  }
}
