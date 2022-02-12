import { render } from '@testing-library/react'
import createReactQueryWrapper from './createReactQueryWrapper'

import type { ReactElement } from 'react'
import type { RenderOptions } from '@testing-library/react'

const ReactQueryWrapper = createReactQueryWrapper()

const AllTheProviders = ({ children }: { children: ReactElement }) => {
  return <ReactQueryWrapper>{children}</ReactQueryWrapper>
}

const customRender = (ui: ReactElement, options: RenderOptions = {}) => {
  return render(ui, {
    wrapper: ({ children }) => AllTheProviders({ children }),
    ...options,
  })
}

export default customRender
