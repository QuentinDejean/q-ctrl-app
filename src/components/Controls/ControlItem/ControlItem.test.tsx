import React from 'react'
import { Table, TableBody } from '@material-ui/core'
import { render } from 'utils/test-utils'

import ControlItem from './ControlItem'

import controlData from 'components/Controls/data'

describe('GIVEN a Control item', () => {
  describe('When I see the item', () => {
    it('THEN it should have all the data populated', () => {
      const item = controlData.data[0]

      const { getByText } = render(
        <Table>
          <TableBody>
            <ControlItem attributes={item.attributes} />
          </TableBody>
        </Table>
      )

      const {
        attributes: { name, type, maximum_rabi_rate, polar_angle },
      } = item

      expect(getByText(name)).toBeInTheDocument()
      expect(getByText(type)).toBeInTheDocument()
      expect(getByText(`${maximum_rabi_rate}`)).toBeInTheDocument()
      expect(getByText(`${polar_angle}`)).toBeInTheDocument()
    })
  })
})
