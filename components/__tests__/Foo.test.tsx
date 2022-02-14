import { rest } from 'msw'
import { render, screen, server } from '@/test-utils'

import Foo from '../Foo'

it('renders without crash', () => {
  render(<Foo />)
})

it('renders Andy and Calvert', async () => {
  server.use(
    rest.get('api/hello', (_req, res, ctx) => {
      return res(
        ctx.json({
          data: {
            name: 'Andy You',
          },
        })
      )
    })
  )

  render(<Foo />)

  await screen.findByText('Andy You')
  expect(screen.getByText('Calvert')).toBeTruthy()
})
