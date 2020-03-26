import React from 'react'
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from '@material-ui/core'

import Control from 'components/Controls/ControlItem/ControlItem'
import type { Control as ControlType } from 'components/Controls/ControlItem/types'

import { ButtonContainer } from '../styles'

type Props = {
  controls: ControlType[]
}

const ControlList = ({ controls }: Props) => (
  <div>
    <strong>Controls</strong>
    <ButtonContainer variant="contained" color="primary" size="large">
      +
    </ButtonContainer>

    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>Portal Angle</TableCell>
          <TableCell>Max Rabi Rate</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {controls.map(({ attributes, id }) => (
          <Control attributes={attributes} key={id} />
        ))}
      </TableBody>
    </Table>
  </div>
)

export default ControlList
