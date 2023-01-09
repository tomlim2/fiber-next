import { buildFeedbackPath, extractFeedback } from "pages/api/feedback";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selectedFeedback = feedbackData.find(
    (feedback: any) => feedback.id == feedbackId
  );
  console.log(selectedFeedback);
  

  res.status(200).json({ feedback: selectedFeedback });
}
