import React from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { Button } from '@material-ui/core'
import { ModalContainer, Title, useStyles } from './styles'

import { errorMessage, tryAgainLabel } from './constants'

type Props = {
  onTryAgain: () => void
}

export default function TransitionsModal({ onTryAgain }: Props) {
  const classes = useStyles()
  return (
    <ModalContainer
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={true}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={true}>
        <div className={classes.paper}>
          <p>Error</p>
          <Title id="transition-modal-title">{errorMessage}</Title>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={onTryAgain}
          >
            {tryAgainLabel}
          </Button>
        </div>
      </Fade>
    </ModalContainer>
  )
}
