// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { IResponse } from './type'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  if (!req.cookies.access_token) {
    res.status(400).json({ error: { code: 400, message: 'Not Authenticated' } })
    return
  }

  res.status(200).json({ data: { status: 'success' } })
}
