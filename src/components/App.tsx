import React from 'react'
import styled from 'styled-components'
import { Container, ThemeProvider } from '@material-ui/core'
import Controls from './Controls/Controls'
import theme from 'utils/theme'

const Header = styled.header`
  padding: 10px 0 10px 20px;
`

const LayoutContainer = styled.section`
  background-color: #f9f7fc;
  min-height: 95vh;
  padding-top: 50px;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <img src="/logo.svg" alt="Q-CTL logo" />
      </Header>
      <LayoutContainer>
        <Container maxWidth="sm">
          <Controls />
        </Container>
      </LayoutContainer>
    </ThemeProvider>
  )
}

export default App
