import React from 'react'
import styled from 'styled-components';

export default class Clock extends React.Component {
  state = {
    hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }
  render(){
    return (
      <ClockWrapper>
        <DigitsContainer>
          {this.state.hours.map((i) => <Digit key={i}>{i}</Digit>)}
        </DigitsContainer>
      </ClockWrapper>
    )
  }
}


const ClockWrapper = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: #EDEDED;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DigitsContainer = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  li:nth-child(1) { transform: translate(60px, -90px) }
  li:nth-child(2) { transform: translate(94px,-45px); }
  li:nth-child(3) { transform: translate(100px, 0); }
  li:nth-child(4) { transform: translate(90px,45px) }
  li:nth-child(5) { transform: translate(50px,76px) }
  li:nth-child(6) { transform: translate(75px,220px); }
  li:nth-child(7) { transform: translate(15px,206px) }
  li:nth-child(8) { transform: translate(-90px,45px) }
  li:nth-child(9) { transform: translate(-100px, 0); }
  li:nth-child(10) { transform: translate(-94px,-45px); }
  li:nth-child(11) { transform: translate(-60px,-90px); }
  li:nth-child(12) { transform: translate(0px, 10px); }
`
const Digit = styled.li`
  color: #696768;
  font-weight: bold;
  display: inline-block;
  position: absolute;
  top: 46%;
  left: 46%;
`

