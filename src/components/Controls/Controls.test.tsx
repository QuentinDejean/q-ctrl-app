import React from 'react'
import { render, waitFor } from 'utils/test-utils'

import { title } from './constants'
import Controls from './Controls'
import controlData from './data'

describe('GIVEN the Control page', () => {
  describe('When I visit the Controls page', () => {
    it('THEN I should see the associated page', () => {
      const { getByText } = render(<Controls />)
      const content = getByText(title)
      expect(content).toBeInTheDocument()
    })

    describe('AND the controls are loading', () => {
      it('THEN I should see a loading spinner', () => {
        const spinnerElement = 'progressbar'
        const { getByRole } = render(<Controls />)
        const spinner = getByRole(spinnerElement)

        expect(spinner).toBeInTheDocument()
      })
    })

    describe('AND the controls have loaded', () => {
      it('THEN I should see the controls on the screen', async () => {
        const { data } = controlData
        const { getByText } = render(<Controls />)

        await waitFor(() =>
          expect(getByText(data[0].attributes.name)).toBeInTheDocument()
        )
      })
    })
  })
})
