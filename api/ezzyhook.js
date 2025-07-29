export default function handler(req, res) {
  console.log("🔥 EzzyBills webhook called");

  return res.status(200).json({
    supplier: "Saint Ignatius High School Webstores"
  });
}
