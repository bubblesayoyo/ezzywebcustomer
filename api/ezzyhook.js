export default function handler(req, res) {
  return res.status(200).json({
    status: "success",
    data: {
      Customer: "Saint Ignatius High School Webstores",
      keyword_article_code: "ST350",
      keyword_description: "Performance Tee Full Front",
      keyword_unit_price: 34.00,
      keyword_total_price: 34.00,
      charge: 6.54,
      WorkOrder: "5449319",
      JobName: "Kaden"
    }
  });
}
