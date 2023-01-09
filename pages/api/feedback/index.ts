import fs from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";

export function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

export function extractFeedback(filePath: string) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(String(fileData));
  return data;
}

type Data = {
  success: boolean;
  feedback: { id: string; email: string; text: string };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };

    //store in database
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ success: true, feedback: newFeedback });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ success: true, feedback: data });
  }
}
