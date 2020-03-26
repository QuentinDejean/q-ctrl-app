import React from 'react'
import styled from 'styled-components'
import { Container } from '@material-ui/core'

const Header = styled.header`
  padding: 10px 0 10px 20px;
`

const AppContainer = styled.section`
  background-color: #f9f7fc;
  min-height: 95vh;
`

function App() {
  return (
    <div>
      <Header>
        <img src="/logo.svg" alt="Q-CTL logo" />
      </Header>
      <AppContainer>
        <Container maxWidth="sm">App stuff</Container>
      </AppContainer>
    </div>
  )
}

export default App
