import React from 'react'
import { render } from 'utils/test-utils'

import { title } from './constants'
import Controls from './Controls'

describe('GIVEN the Control page', () => {
  describe('When I visit the Controls page', () => {
    it('THEN I should see the associated page', () => {
      const { getByText } = render(<Controls />)
      const content = getByText(title)
      expect(content).toBeInTheDocument()
    })

    it('THEN I should see a loading spinner', () => {
      const spinnerElement = 'progressbar'
      const { getByRole } = render(<Controls />)
      const spinner = getByRole(spinnerElement)

      expect(spinner).toBeInTheDocument()
    })
  })
})
