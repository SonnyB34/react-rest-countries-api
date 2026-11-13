export default async function handler(req, res) {
  // Read ?limit=100&offset=0 from the request your React app made
  const { limit = '100', offset = '0' } = req.query;

  // Call the real API and add the secret key here
  const response = await fetch(
    `https://api.restcountries.com/countries/v5?limit=${limit}&offset=${offset}`,
    { headers: { Authorization: `Bearer ${process.env.API_KEY}` } },
  );

  // Pass the answer and status back to the React app
  const data = await response.json();
  res.status(response.status).json(data);
}
