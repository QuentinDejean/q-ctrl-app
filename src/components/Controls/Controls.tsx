import React, { useState, useEffect } from 'react'

import { title } from './constants'
import ControlList from './ControlList'
import controlData from './data'

import type { Control as ControlType } from './Control/types'
import { ButtonContainer, SpinnerContainer } from './styles'

type ControlState = {
  isLoading: boolean
  data?: ControlType[]
  hasError: boolean
}

const Controls = () => {
  const [controlList, setControlList] = useState<ControlState>({
    isLoading: true,
    data: undefined,
    hasError: false,
  })

  useEffect(() => {
    setTimeout(() => {
      setControlList({
        isLoading: false,
        data: controlData.data,
        hasError: false,
      })
    }, 2000)
  }, [])

  const { isLoading, data } = controlList

  return (
    <>
      <div>
        <strong>{title}</strong>
        <ButtonContainer variant="contained" color="primary" size="large">
          +
        </ButtonContainer>
      </div>
      {isLoading && <SpinnerContainer />}
      {!isLoading && data && <ControlList controls={data} />}
    </>
  )
}

export default Controls
