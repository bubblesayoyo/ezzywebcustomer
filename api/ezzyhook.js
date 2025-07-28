export default function handler(req, res) {
  const data = req.body;

  if (data.Customer && !data.Customer.endsWith(" Webstores")) {
    data.Customer += " Webstores";
  }

  res.status(200).json(data);
}
