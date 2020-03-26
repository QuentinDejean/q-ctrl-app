import React from 'react'
import { render, waitFor, fireEvent } from 'utils/test-utils'

import Controls from './Controls'
import controlData from './data'
import { errorMessage, tryAgainLabel } from './ModalError/constants'

const spinnerElement = 'progressbar'

describe('WHEN I visit the Controls page', () => {
  it('THEN I should see a loading spinner', () => {
    const { getByRole } = render(<Controls testFailure={false} />)
    const spinner = getByRole(spinnerElement)

    expect(spinner).toBeInTheDocument()
  })
})

describe('GIVEN I am on the Controls page', () => {
  describe('WHEN the controls have finished loading', () => {
    it('WHEN I should see all my controls', async () => {
      const { data } = controlData
      const { getByText } = render(<Controls testFailure={false} />)

      await waitFor(() =>
        expect(getByText(data[0].attributes.name)).toBeInTheDocument()
      )
    })
  })

  describe('AND the controls are loading', () => {
    describe('WHEN the controls cannot be loaded', () => {
      it('THEN I should see an error', async () => {
        const { getByText } = render(<Controls testFailure={true} />)

        await waitFor(() => expect(getByText(errorMessage)).toBeInTheDocument())
      })

      it('THEN I should see a button to try again ', async () => {
        const { getByText } = render(<Controls testFailure={true} />)

        await waitFor(() =>
          expect(getByText(tryAgainLabel)).toBeInTheDocument()
        )
      })
    })
  })
})

describe('GIVEN I am on the Controls page', () => {
  describe('AND there has been an error loading controls', () => {
    describe('WHEN I click the try again button', () => {
      it('THEN I should see a loading spinner', async () => {
        const { getByRole, getByText } = render(<Controls testFailure={true} />)

        await waitFor(() => expect(getByText(errorMessage)).toBeInTheDocument())

        fireEvent.click(getByText(tryAgainLabel))

        const spinner = getByRole(spinnerElement)
        await waitFor(() => expect(spinner).toBeInTheDocument())
      })
    })
  })
})
