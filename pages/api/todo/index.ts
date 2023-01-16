import NextCors from "nextjs-cors";
import { corsOptions } from "helpers/apiUtil";
import { todos } from "data/todo";

import type { NextApiRequest, NextApiResponse } from "next";
import { InterfaceTodo } from "types/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<InterfaceTodo[]>
) {
  await NextCors(req, res, corsOptions);

  if (req.method == "GET") {
    res.status(200).json(todos);
  } else if (req.method == "POST") {
    console.log(req.body);
  }
}
