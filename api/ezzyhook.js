export const config = {
  api: {
    bodyParser: true
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const data = req.body || {};

  if (data.Customer && !data.Customer.endsWith(" Webstores")) {
    data.Customer += " Webstores";
  }

  return res.status(200).json(data);
}
