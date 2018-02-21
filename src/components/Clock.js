import React from 'react'
import styled from 'styled-components';

export default class Clock extends React.Component {
  state = {
    hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    minutes: ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']
  }
  render(){
    return (
      <ClockWrapper>
        <HoursContainer>
          {this.state.hours.map((i) => <Digit key={i}>{i}</Digit>)}
          <MinutesContainer>
            {this.state.minutes.map((i) => <Digit key={i}>{i}</Digit>)}
          </MinutesContainer>
        </HoursContainer>
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
const HoursContainer = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  li:nth-child(1) { transform: translate(60px, -90px); }
  li:nth-child(2) { transform: translate(100px,-45px); }
  li:nth-child(3) { transform: translate(110px, 0); }
  li:nth-child(4) { transform: translate(100px,45px); }
  li:nth-child(5) { transform: translate(60px,85px) }
  li:nth-child(6) { transform: translate(5px,100px); }
  li:nth-child(7) { transform: translate(-50px,85px); }
  li:nth-child(8) { transform: translate(-90px,45px); }
  li:nth-child(9) { transform: translate(-100px, 0); }
  li:nth-child(10) { transform: translate(-90px,-45px) }
  li:nth-child(11) { transform: translate(-60px,-90px); }
  li:nth-child(12) { transform: translate(0px, -100px); }
`

const MinutesContainer = HoursContainer.extend`
    width: 40%;
    height: 40%;
    position: absolute;
    border: 1px solid;
    top: 68px;
    left: 68px;
    li:nth-child(1) { transform: translate(60px, -90px); }
    li:nth-child(2) { transform: translate(40px,-45px) }
    li:nth-child(3) { transform: translate(110px, 0); }
    li:nth-child(4) { transform: translate(100px,45px); }
    li:nth-child(5) { transform: translate(60px,85px) }
    li:nth-child(6) { transform: translate(5px,100px); }
    li:nth-child(7) { transform: translate(-50px,85px); }
    li:nth-child(8) { transform: translate(-90px,45px); }
    li:nth-child(9) { transform: translate(-100px, 0); }
    li:nth-child(10) { transform: translate(-90px,-45px) }
    li:nth-child(11) { transform: translate(-50px,-45px) }
    li:nth-child(12) { transform: translate(0px, -60px); }
`

const Digit = styled.li`
  color: #696768;
  font-weight: bold;
  display: inline-block;
  position: absolute;
  top: 46%;
  left: 46%;
`

