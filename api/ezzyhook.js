export default function handler(req, res) {
  console.log("🔥 METHOD:", req.method);
  console.log("🔥 HEADERS:", req.headers);

  // Always return a static Customer name to keep EzzyBills happy
  return res.status(200).json({
    Customer: "Saint Ignatius High School Webstores"
  });
}
