import React from 'react'
import { render } from '@testing-library/react'

type Props = {
  children: React.ReactNode
}

const Provider = ({ children }: Props) => <>{children}</>

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: Provider, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
