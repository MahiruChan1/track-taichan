let database = [];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { latitude, longitude } = req.body;
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const waktu = new Date().toLocaleString('id-ID');

    database.push({ ip, latitude, longitude, waktu });
    res.status(200).json({ status: 'Lokasi disimpan' });
  } else if (req.method === 'GET') {
    res.status(200).json(database);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
