import React from 'react'
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from '@material-ui/core'

import Control from './Control/Control'

import type { Control as ControlType } from './Control/types'

type Props = {
  controls: ControlType[]
}

const ControlList = ({ controls }: Props) => (
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
)

export default ControlList
