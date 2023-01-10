// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.include("@")) {
      res.status(422).json({ message: "Invalid email address." });
    }

    console.log(userEmail);
    res.status(201).json({ message: "Signed up!" });
  }
}
