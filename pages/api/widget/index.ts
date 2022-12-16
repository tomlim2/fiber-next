import NextCors from 'nextjs-cors';
import corsOptions from 'apis/cors'
import { widgets, widgetsUser } from 'data/widget';

import type { NextApiRequest, NextApiResponse } from 'next'
import type { InterfaceWidgets } from 'types/api'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<InterfaceWidgets>
) {
  await NextCors(req, res, corsOptions)

  if (req.method == 'GET') {
    res.status(200).json({
      list: widgets,
      user: widgetsUser,
    })
  } else if (req.method == 'POST') {
    console.log(req.body);
  }
}
