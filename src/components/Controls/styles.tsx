import { Button, CircularProgress } from '@material-ui/core'
import styled from 'styled-components'

const ButtonContainer = styled(Button)`
  &&& {
    margin-left: 20px;
    border-radius: 22px;
    min-width: 42px;
    padding: 8px 15px;
  }
`

const SpinnerContainer = styled(CircularProgress)`
  margin-top: 30px;
`

export { ButtonContainer, SpinnerContainer }
