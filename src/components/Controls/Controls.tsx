import React, { useState } from 'react'
import styled from 'styled-components'
import { CircularProgress, Button } from '@material-ui/core'

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

const Controls = () => {
  const [isLoading] = useState(true)
  return (
    <>
      <div>
        <strong>Controls </strong>
        <ButtonContainer variant="contained" color="primary" size="large">
          +
        </ButtonContainer>
      </div>
      {isLoading && <SpinnerContainer />}
    </>
  )
}

export default Controls
