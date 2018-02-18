import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { media } from '../utils/media'

const TimePicker = ({ theme }) =>
  <ThemeProvider theme={theme || DefaultTheme} >
    <Wrapper>
    </Wrapper>
  </ThemeProvider>

const Wrapper = styled.div`
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  margin: auto;
  background: ${props => props.theme.background};
  border-radius: 3px;
  box-shadow: 0px 5px 35px ${props => props.theme.boxShadowColor};
  width: ${props => props.theme.width}px;
  height: ${props => props.theme.height}px;
  ${media.landscape`
    width: ${props => props.theme.landscapeWidth}px;
    height: ${props => props.theme.landscapeHeight}px;
  `}
`

const DefaultTheme = {
  background: '#F8F8F8',
  boxShadowColor: '#828282',
  height: 400,
  landscapeWidth: 400,
  landscapeHeight: 300,
  width: 300,
}
export default TimePicker
