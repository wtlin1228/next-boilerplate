import type { NextApiRequest, NextApiResponse } from 'next'
import type { IResponse } from './type'

// Use in memory subscribers list for quick demo.
const subscribers: string[] = []

export default async function subscribe(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  if (req.method !== 'POST') {
    res
      .status(405)
      .json({ error: { code: 405, message: 'Method Not Allowed' } })
  }

  if (!req.body.email || !('' + req.body.email).includes('@')) {
    res.status(400).json({ error: { code: 400, message: 'Email Not Valid' } })
  }

  subscribers.push(req.body.email)
  res.status(200).json({ data: { email: req.body.email } })
}
