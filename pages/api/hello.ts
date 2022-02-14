// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Response = {
  data?: {
    name: string
  }
  error?: {
    code: number
    message: string
    errors?: any[]
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  // throw new Error('123')
  // res.status(400).json({ error: { code: 400, message: 'Q__Q' } })
  res.status(200).json({ data: { name: 'John Doe' } })
}
