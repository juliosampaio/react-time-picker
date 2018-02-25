import React from 'react'
import styled, { css } from 'styled-components';

const HOURS = 'HOURS'
const MINUTES = 'MINUTES'
export default class Clock extends React.Component {
  static ACTIVE_VIEW = { HOURS, MINUTES }
  state = {
    activeView: HOURS,
    hours: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2],
    minutes: [
      "15","16","17","18","19","20","21","22","23","24",
      "25","26","27","28","29","30","31","32","33","34",
      "35","36","37","38","39","40","41","42","43","44",
      "45","46","47","48","49","50","51","52","53","54",
      "55","56","57","58","59","00","01","02","03","04",
      "05","06","07","08","09","10","11","12","13","14"
    ],
    selectedHours: 12,
    selectedHours: '00'
  }

  componentWillMount = () => {
    const { selectedHours, selectedMinutes } = this.props
    this.setState({ selectedHours, selectedMinutes })
  }

  activateView = (activeView) => {
    this.setState({ activeView })
    this.props.onChange(activeView, this.state.selectedHours, this.state.selectedMinutes)
  }

  selectHours = (hours) => {
    this.setState({ selectedHours: hours })
    // this.activateView(MINUTES)
    this.props.onChange(this.state.activeView, hours, this.state.selectedMinutes)
  }

  selectMinutes = (minutes) => {
    this.setState({ selectedMinutes: minutes })
    // this.activateView(HOURS)
    this.props.onChange(this.state.activeView, this.state.selectedHours, minutes)
  }

  render(){
    return (
      <ClockWrapper>
        <ClockCenter />
        <DigitsContainer active={this.state.activeView === HOURS}>
          {this.state.hours.map((d, idx) =>
            <Digit
              active={this.state.selectedHours == d}
              deg={idx * 30}
              key={d}
              major
              onClick={() => this.activateView(MINUTES)}
              onMouseOver={() => this.selectHours(d)}
            >{d}</Digit>
          )}
        </DigitsContainer>
        <DigitsContainer active={this.state.activeView === MINUTES}>
          {this.state.minutes.map((d, idx) =>
            <Digit
              active={this.state.selectedMinutes == d}
              deg={idx * 6}
              key={d}
              major={0+d % 5 === 0 }
              onClick={() => this.activateView(HOURS)}
              onMouseOver={() => this.selectMinutes(d)}
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
  position: relative;
`

const ClockCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  margin: -3px;
  background: #009A8A;
  border-radius: 50%;
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
    background-color: #009A8A;
    color: #ffffff;
    &:before {
      content: '';
      background: #009A8A;
      width: 90px;
      border: 1px solid #009A8A;
      position: absolute;
      top: 50%;
      left: 50%;
      transform-origin: left;
      transform: rotate(${props => props.deg }deg) translateX(-100px);
    }
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
  `}
  &:hover {
    background-color: #009A8A;
    color: #ffffff;
    opacity: 0.9;
  }
`

