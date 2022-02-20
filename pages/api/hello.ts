// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { IResponse } from './type'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  // throw new Error('123')
  // res.status(400).json({ error: { code: 400, message: 'Q__Q' } })
  res.status(200).json({ data: { name: 'John Doe' } })
}
