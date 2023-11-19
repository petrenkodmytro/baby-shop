// like controller
// server
import { NextApiRequest, NextApiResponse } from "next";

const Echo = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  return res.end(JSON.stringify({ message: req.query.message ?? "Base message" }));
};

export default Echo;
