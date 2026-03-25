export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch('http://4.157.234.69:8000/scent', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'X-API-Key': process.env.SCENT_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'API 요청 실패' });
  }
}
