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
