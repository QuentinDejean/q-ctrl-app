import React from 'react'
import styled from 'styled-components'
import { Container, ThemeProvider } from '@material-ui/core'
import Controls from './Controls/Controls'
import theme from 'utils/theme'

const Header = styled.header`
  background-color: white;
  padding: 10px 0 10px 20px;
  margin-bottom: 50px;
`

const LayoutContainer = styled.section`
  background-color: #f9f7fc;
  min-height: 100vh;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LayoutContainer>
        <Header>
          <img src="/logo.svg" alt="Q-CTL logo" />
        </Header>
        <Container maxWidth="md">
          <Controls />
        </Container>
      </LayoutContainer>
    </ThemeProvider>
  )
}

export default App
