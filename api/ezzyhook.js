export default function handler(req, res) {
  console.log("🔥 EzzyBills hit the webhook!");
  return res.status(200).send("OK");
}
