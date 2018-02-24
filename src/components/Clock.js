import React from 'react'
import styled, { css } from 'styled-components';

export default class Clock extends React.Component {
  state = {
    hours: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2],
    minutes: [
      "15","16","17","18","19","20","21","22","23","24",
      "25","26","27","28","29","30","31","32","33","34",
      "35","36","37","38","39","40","41","42","43","44",
      "45","46","47","48","49","50","51","52","53","54",
      "55","56","57","58","59","00","01","02","03","04",
      "05","06","07","08","09","10","11","12","13","14"
    ]
  }
  render(){
    return (
      <ClockWrapper>
        <DigitsContainer active>
          {this.state.hours.map((d, idx) => <Digit deg={idx * 30} key={d} major>{d}</Digit>)}
        </DigitsContainer>
        <DigitsContainer>
          {this.state.minutes.map((d, idx) =>
            <Digit
              deg={idx * 6}
              key={d}
              major={0+d % 5 === 0 }
            >{d}</Digit>
          )}
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
  display: ${props => props.active ? 'block' : 'none'};
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
`

const Digit = styled.li`
  color: #696768;
  cursor: pointer;
  font-weight: bold;
  font-size: 0;
  display: inline-block;
  position: absolute;
  width: 30px;
  height: 30px;
  margin: -15px;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transform: rotate(${props => props.deg}deg) translate(100px) rotate(${props => props.deg * -1}deg);
  ${props => props.major && css`
    font-size: 16px;
    &:after {
      display: none;
    }
  `}
  ${props => props.active && css`

  `}
  &:hover {
    background-color: #009A8A;
    color: #ffffff;
    opacity: 0.9;
    &:after {
      content: '';
      background: #ffffff;
      width: 6px;
      height: 6px;
      margin: -3px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
    }
  }
`

