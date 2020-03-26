import React from 'react'
import { render } from 'utils/test-utils'

import ControlList from './ControlList'

import controlData from 'components/Controls/data'

describe('GIVEN a Control list', () => {
  describe('When I see the list', () => {
    it('THEN it should display all the items', () => {
      const { data } = controlData
      const { getByText } = render(<ControlList controls={data} />)

      data.forEach(({ attributes: { name } }) => {
        expect(getByText(name)).toBeInTheDocument()
      })
    })
  })
})
