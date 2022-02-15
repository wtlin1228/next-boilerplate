// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { IResponse } from './type'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  // throw new Error('123')
  // res.status(400).json({ error: { code: 400, message: 'Q__Q' } })
  res.status(200).json({ data: { name: 'John Doe' } })
}
