export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const bodyString = Buffer.concat(buffers).toString();
    const data = JSON.parse(bodyString);

    if (data.Customer && !data.Customer.endsWith(" Webstores")) {
      data.Customer += " Webstores";
    }

    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).json({ error: 'Invalid JSON', details: err.message });
  }
}
