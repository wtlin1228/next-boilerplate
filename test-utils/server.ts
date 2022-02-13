import type { RequestHandler } from 'msw'

import { setupServer } from 'msw/node'

// You can setup default api mocks here.
const globalHandlers: RequestHandler[] = []

const server = setupServer(...globalHandlers)

export default server
