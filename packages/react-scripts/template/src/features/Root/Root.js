import React, {Fragment} from 'react'
import styled, {injectGlobal, keyframes} from 'styled-components'

import logo from './logo.svg'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`

const Container = styled.div`
  max-width: ${p => p.width || '600px'};
  margin-right: auto;
  margin-left: auto;
`

const Header = styled.header`
  background-color: #222;
  color: white;
  padding: 1rem;
  text-align: center;
`

const Title = styled.h1`font-size: 1.5rem;`

const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`

const Logo = styled.img`
  height: 80px;
  animation: ${rotate} infinite 20s linear;
`

const Intro = styled.div`font-size: large;`

export class Root extends React.Component {
  render = () => (
    <Fragment>
      <Header>
        <Container>
          <Logo src={logo} />
          <Title>Welcome to React</Title>
        </Container>
      </Header>

      <Container>
        <Intro>
          To get started, edit <code>src/features/Root/Root.js</code> and save
          to reload.
        </Intro>
      </Container>
    </Fragment>
  )
}
