import React from 'react'
import styled, { css, keyframes } from 'styled-components';
import { zeroPad } from '../utils/string'

const HOURS = 'HOURS'
const MINUTES = 'MINUTES'
export default class Clock extends React.Component {
  static ACTIVE_VIEW = { HOURS, MINUTES }
  state = {
    activeView: HOURS,
    hours: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2],
    minutes: [
      15,16,17,18,19,20,21,22,23,24,25,26,
      27,28,29,30,31,32,33,34,35,36,37,38,
      39,40,41,42,43,44,45,46,47,48,49,50,
      51,52,53,54,55,56,57,58,59,0,1,2,3,
      4,5,6,7,8,9,10,11,12,13,14
    ],
    selectedHours: 12,
    selectedMinutes: '00'
  }

  componentWillReceiveProps({ activeView, selectedHours, selectedMinutes }) {
    if (activeView !== this.state.activeView) {
      this.setState({ activeView })
    }
    if (selectedHours !== this.state.selectedHours) {
      this.setState({ selectedHours })
    }
    if (selectedMinutes !== this.state.selectedMinutes) {
      this.setState({ selectedMinutes })
    }
  }

  componentWillMount = () => {
    const { activeView, selectedHours, selectedMinutes } = this.props
    this.setState({ activeView, selectedHours, selectedMinutes })
  }

  activateView = (activeView) => {
    this.setState({ activeView })
    this.props.onChange(activeView, this.state.selectedHours, this.state.selectedMinutes)
  }

  selectHours = (selectedHours) => {
    this.setState({ selectedHours })
    this.props.onChange(this.state.activeView, selectedHours, this.state.selectedMinutes)
  }

  selectMinutes = (selectedMinutes) => {
    this.setState({ selectedMinutes })
    this.props.onChange(this.state.activeView, this.state.selectedHours, selectedMinutes)
  }

  render() {
    return (
      <ClockWrapper>
        <ClockCenter />
        <DigitsContainer active={this.state.activeView === HOURS} className="hide">
          {this.state.hours.map((d, idx) =>
            <Digit
              draggable={true}
              active={this.state.selectedHours === d}
              deg={idx * 30}
              key={d}
              major
              onClick={() => this.activateView(MINUTES)}
              onMouseOver={() => this.selectHours(d)}
            >{zeroPad(d)}</Digit>
          )}
        </DigitsContainer>
        <DigitsContainer active={this.state.activeView === MINUTES}>
          {this.state.minutes.map((d, idx) =>
            <Digit
              draggable={true}
              active={this.state.selectedMinutes === d}
              deg={idx * 6}
              key={d}
              major={0+d % 5 === 0 }
              onClick={() => this.activateView(HOURS)}
              onMouseOver={() => this.selectMinutes(d)}
            >{zeroPad(d)}</Digit>
          )}
        </DigitsContainer>
      </ClockWrapper>
    )
  }
}

const showAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const hideAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const ClockWrapper = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: ${props => props.theme.Clock.background};
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
  background: ${props => props.theme.Clock.armBg};
  border-radius: 50%;
`

const DigitsContainer = styled.ul`
  display: ${props => props.active ? 'block' : 'none'};
  animation: ${props => props.active ? showAnimation : hideAnimation} 0.8s linear;
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
`

const Digit = styled.li`
  color: ${props => props.theme.Clock.digitColor};
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
    background-color: ${props => props.theme.Clock.digitActiveBg};
    color: ${props => props.theme.Clock.digitActiveColor};
    &:before {
      content: '';
      background: ${props => props.theme.Clock.digitActiveBg};
      width: 85px;
      border: 1px solid ${props => props.theme.Clock.digitActiveBg};
      position: absolute;
      top: 50%;
      left: 50%;
      transform-origin: left;
      transform: rotate(${props => props.deg }deg) translateX(-100px);
    }
    &:after {
      content: '';
      background: ${props => props.theme.Clock.digitActiveColor};
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
    background-color: ${props => props.theme.Clock.digitActiveBg};
    color: ${props => props.theme.Clock.digitActiveColor};
    opacity: 0.9;
    transition: all 0.4s;
  }
`

