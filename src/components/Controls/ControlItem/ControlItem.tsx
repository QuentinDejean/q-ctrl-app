import React from 'react'
import { TableRow, TableCell, Chip } from '@material-ui/core'

import type { ControlAttributes } from './types'

type Props = {
  attributes: ControlAttributes
}

const ControlItem = ({
  attributes: {
    name,
    type,
    maximum_rabi_rate: maxRabiRate,
    polar_angle: polarAngle,
  },
}: Props) => (
  <TableRow>
    <TableCell>{name}</TableCell>
    <TableCell>
      <Chip color="secondary" label={type} size="small" />
    </TableCell>
    <TableCell>{maxRabiRate}</TableCell>
    <TableCell>{polarAngle}</TableCell>
  </TableRow>
)

export default ControlItem
