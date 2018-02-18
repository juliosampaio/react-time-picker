import React from 'react'
import styled from 'styled-components'
import { media } from '../utils/media'

const TimePicker = () =>
  <Wrapper>
  </Wrapper>

const Wrapper = styled.div`
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  margin: auto;
  background: #F8F8F8;
  border-radius: 3px;
  box-shadow: 0px 5px 35px #828282;
  width: 300px;
  height: 400px;
  ${media.landscape`
    width: 400px;
    height: 300px;
  `}
`
export default TimePicker
