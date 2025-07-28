export default async function handler(req, res) {
  console.log("🔥 METHOD:", req.method);
  console.log("🔥 HEADERS:", req.headers);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed (Expected POST)', received: req.method });
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

    console.log("✅ Modified data:", data);

    return res.status(200).json(data);
  } catch (err) {
    console.error("❌ JSON parse error:", err.message);
    return res.status(400).json({ error: 'Invalid JSON', details: err.message });
  }
}
