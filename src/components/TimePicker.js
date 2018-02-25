import React from 'react'
import styled, { css, ThemeProvider } from 'styled-components'
import moment from 'moment'
import media from '../utils/media'
import Clock from './Clock'

class TimePicker extends React.Component {
  state = {
    activeView: Clock.ACTIVE_VIEW.HOURS,
    time: { hours: moment().format('hh'), minutes: moment().minutes()}
  }

  handleTimeChange = (activeView, hours, minutes) => {
    console.log(activeView, hours, minutes)
    const time = { hours, minutes }
    this.setState({ activeView, time })
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme || DefaultTheme} >
        <Wrapper>
          <Header>
            <Hours active={this.state.activeView === Clock.ACTIVE_VIEW.HOURS}>
              {this.state.time.hours}
            </Hours>
            <Separator>:</Separator>
            <Minutes active={this.state.activeView === Clock.ACTIVE_VIEW.MINUTES}>
              {this.state.time.minutes}
            </Minutes>
          </Header>
          <Content>
            <ClockWrapper>
              <Clock
                onChange={this.handleTimeChange}
                selectedHours={this.state.time.hours}
                selectedMinutes={this.state.time.minutes}
              />
            </ClockWrapper>
            <Footer>
              <Button>{this.props.cancelText}</Button>
              <Button>{this.props.okText}</Button>
            </Footer>
          </Content>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  top: 0; left: 0; bottom: 0; right: 0;
  margin: auto;
  background: ${props => props.theme.background};
  border-radius: 3px;
  box-shadow: 0px 5px 35px ${props => props.theme.boxShadowColor};
  width: ${props => props.theme.width}px;
  height: ${props => props.theme.height}px;
  flex-direction: column;
  ${media.landscape.phone`
    width: ${props => props.theme.landscapeWidth}px;
    height: ${props => props.theme.landscapeHeight}px;
    flex-direction: row;
  `}
`

const Header = styled.div`
  background: ${props => props.theme.headerBg};
  color: ${props => props.theme.headerColor};
  flex-grow: 0.3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  ${media.landscape.phone`
    flex-grow: 0.5;
  `}
`

const HeaderItem = styled.h2`
  cursor: pointer;
  margin: 2px;
  ${props => props.active && css`
    color: ${props => props.theme.headerActiveColor};
  `}
`

const Hours = HeaderItem.extend``

const Separator = HeaderItem.extend`
  cursor: initial;
`

const Minutes = HeaderItem.extend``

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

const ClockWrapper = styled.div`
  flex-grow: 1;
  padding: 15px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = styled.div`
  flex-grow: 0.1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
`

const Button = styled.button`
  border: none;
  background: none;
  margin: 3px;
  font-weight: bolder;
  color: ${props => props.theme.headerBg};
`

const DefaultTheme = {
  background: '#ffffff',
  boxShadowColor: '#828282',
  height: 400,
  headerBg: '#009A8A',
  headerColor: '#A7E1DC',
  headerActiveColor: '#FFFFFF',
  landscapeWidth: 400,
  landscapeHeight: 300,
  width: 300,
}

export default TimePicker
