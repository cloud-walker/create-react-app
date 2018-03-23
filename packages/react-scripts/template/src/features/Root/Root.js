import React, {Fragment} from 'react'
import styled, {injectGlobal} from 'styled-components'
import {hot} from 'react-hot-loader'

injectGlobal`
  :root {
    font-family: sans-serif;
  }
  
  * {
    &,
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }
  
  body {
    margin: 0;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`

class Root extends React.Component {
  render = () => 'Root'
}

export default hot(module)(Root)
