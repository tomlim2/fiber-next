import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';
import corsOptions from 'apis/cors'
import type { Widgets } from 'types/api'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Widgets>
) {
  await NextCors(req, res, corsOptions)

  res.status(200).json({
    list: [
      {
        name: 'widget type A',
        type: 'typeA',
        widgetUid: 1111,
        apiUrl: '/hey'
      },
      {
        name: 'widget type B',
        type: 'typeB',
        widgetUid: 2222,
        apiUrl: '/hey'
      },
      {
        name: 'widget type C',
        type: 'typeC',
        widgetUid: 3333,
        apiUrl: '/hey'
      },
      {
        name: 'widget type D',
        type: 'typeD',
        widgetUid: 4444,
        apiUrl: '/hey'
      }
    ],
    user: [
      {
        name: 'widget type A',
        type: 'typeA',
        widgetUid: 1111,
        apiUrl: '/hey'
      },
      {
        name: 'widget type B',
        type: 'typeB',
        widgetUid: 2222,
        apiUrl: '/hey'
      },
    ],
  })
}
