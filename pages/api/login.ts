// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { CookieSerializeOptions } from 'cookie'
import type { IResponse } from './type'

import { serialize } from 'cookie'

function setCookie(
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {}
) {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)

  if (options.maxAge) {
    options.expires = new Date(Date.now() + options.maxAge)
    options.maxAge /= 1000
  }

  res.setHeader('Set-Cookie', serialize(name, stringValue, options))
}

function generateRandomString() {
  return (Math.random() + 1).toString(36).substring(7)
}

const token = generateRandomString()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  if (req.method !== 'POST') {
    res
      .status(405)
      .json({ error: { code: 405, message: 'Not Supported Method' } })

    return
  }

  if (!req.body.token || req.body.token !== token) {
    res
      .status(400)
      .json({ error: { code: 400, message: `You can login with ${token}` } })

    return
  }

  setCookie(res, 'access_token', generateRandomString(), {
    maxAge: 6000000,
    secure: true,
    httpOnly: true,
  })

  res.status(200).json({ data: { status: 'success' } })
}
