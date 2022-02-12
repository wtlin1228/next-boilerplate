import { setupServer } from 'msw/node'
import type { RequestHandler } from 'msw'

// You can setup default api mocks here.
const globalHandlers: RequestHandler[] = []

const server = setupServer(...globalHandlers)

export default server
