export default async function handler(req, res) {
  console.log("🔥 METHOD:", req.method);
  console.log("🔥 HEADERS:", req.headers);

  // If EzzyBills insists on GET, we just fake the response
  const modifiedCustomer = "Saint Ignatius High School Webstores";

  if (req.method === 'GET') {
    return res.status(200).json({ Customer: modifiedCustomer });
  }

  // fallback if they ever fix it to POST
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
