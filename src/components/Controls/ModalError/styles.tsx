import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import styled from 'styled-components'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const ModalContainer = styled(Modal)`
  text-align: center;
  text-transform: uppercase;
`

const Title = styled.h2`
  margin: 50px 0 50px;
`

export { ModalContainer, Title, useStyles }
