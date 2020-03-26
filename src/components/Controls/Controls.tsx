import React, { useState, useEffect } from 'react'

import ControlList from './ControlList/ControlList'
import controlData from './data'

import type { Control as ControlType } from './ControlItem/types'
import { SpinnerContainer } from './styles'
import ModalError from './ModalError/ModalError'

type ControlState = {
  isLoading: boolean
  data?: ControlType[]
  hasError: boolean
}

type Props = {
  testFailure?: boolean
}

const defaultState = {
  isLoading: true,
  data: undefined,
  hasError: false,
}

const Controls = ({ testFailure }: Props) => {
  const [controlList, setControlList] = useState<ControlState>(defaultState)

  useEffect(() => {
    const controlListLoading = setTimeout(() => {
      const hasError =
        typeof testFailure !== 'undefined'
          ? testFailure
          : Math.floor(Math.random() * 100 + 1) > 50

      setControlList({
        isLoading: false,
        data: hasError ? undefined : controlData.data,
        hasError,
      })
    }, 500)

    return () => {
      clearTimeout(controlListLoading)
    }
  }, [controlList.hasError, testFailure])

  const { data, hasError, isLoading } = controlList

  return (
    <>
      {isLoading && <SpinnerContainer />}
      {hasError && (
        <ModalError onTryAgain={() => setControlList(defaultState)} />
      )}
      {!isLoading && !hasError && data && <ControlList controls={data} />}
    </>
  )
}

export default Controls
