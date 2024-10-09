// api/receive-data.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const jsonData = req.body;
    console.log('Received JSON data:', jsonData);

    res.status(200).json({ message: 'Data received successfully', receivedData: jsonData });
  } else {
    // Handle other methods if needed, such as GET, etc.
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
