import React from 'react'
import { render } from 'utils/test-utils'

import { title } from './Controls/constants'
import App from './App'

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  const content = getByText(title)
  expect(content).toBeInTheDocument()
})
