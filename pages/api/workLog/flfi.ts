import type { NextApiRequest, NextApiResponse } from "next";
import { flfi } from "data/workLog/flfi";

import type { IWorkLogFlfi } from "types/api";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IWorkLogFlfi[]>
) {
  //@ts-ignore
  res.status(200).json(flfi);
}
