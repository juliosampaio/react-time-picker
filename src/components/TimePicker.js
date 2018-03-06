import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { func } from "prop-types";
import media from "../utils/media";
import { zeroPad } from "../utils/string";
import Clock from "./Clock";

class TimePicker extends React.Component {
  state = {
    activeView: Clock.ACTIVE_VIEW.HOURS,
    time: { hours: 12, minutes: 0 }
  };

  handleTimeChange = (activeView, hours, minutes) => {
    const time = { hours, minutes };
    this.setState({ activeView, time });
  };

  changeView = activeView => {
    this.setState({ activeView });
  };

  mergeTheme = () => Object.assign(DefaultTheme, this.props.theme);

  sendTime = () => {
    this.props.onTimeChange(this.state.time);
  };

  sendCancel = () => {
    this.props.onCancel();
  };

  render() {
    return (
      <ThemeProvider theme={this.mergeTheme()}>
        <Wrapper>
          <Header>
            <Hours
              active={this.state.activeView === Clock.ACTIVE_VIEW.HOURS}
              onClick={() => this.changeView(Clock.ACTIVE_VIEW.HOURS)}
            >
              {zeroPad(this.state.time.hours)}
            </Hours>
            <Separator>:</Separator>
            <Minutes
              active={this.state.activeView === Clock.ACTIVE_VIEW.MINUTES}
              onClick={() => this.changeView(Clock.ACTIVE_VIEW.MINUTES)}
            >
              {zeroPad(this.state.time.minutes)}
            </Minutes>
          </Header>
          <Content>
            <ClockWrapper>
              <Clock
                activeView={this.state.activeView}
                onChange={this.handleTimeChange}
                selectedHours={this.state.time.hours}
                selectedMinutes={this.state.time.minutes}
              />
            </ClockWrapper>
            <Footer>
              <Button onClick={this.sendCancel}>{this.props.cancelText}</Button>
              <Button onClick={this.sendTime}>{this.props.okText}</Button>
            </Footer>
          </Content>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
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
  `};
`;

const Header = styled.div`
  background: ${props => props.theme.headerBg};
  border-radius: 3px 3px 0 0;
  color: ${props => props.theme.headerColor};
  min-height: 96px;
  min-width: 170px;
  flex-grow: 0.3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  ${media.landscape.phone`
    flex-grow: 0.5;
    border-radius: 3px 0 0 3px;
  `};
`;

const HeaderItem = styled.h2`
  cursor: pointer;
  margin: 2px;
  ${props =>
    props.active &&
    css`
      color: ${props => props.theme.headerActiveColor};
    `};
`;

const Hours = HeaderItem.extend``;

const Separator = HeaderItem.extend`
  cursor: initial;
`;

const Minutes = HeaderItem.extend``;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ClockWrapper = styled.div`
  flex-grow: 1;
  padding: 15px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  flex-grow: 0.1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
  min-height: 35px;
`;

const Button = styled.button`
  border: none;
  background: none;
  margin: 3px;
  font-weight: bolder;
  color: ${props => props.theme.headerBg};
  outline: none;
  cursor: pointer;
`;

const DefaultTheme = {
  background: "#ffffff",
  boxShadowColor: "#828282",
  height: 400,
  headerBg: "#009A8A",
  headerColor: "#A7E1DC",
  headerActiveColor: "#FFFFFF",
  landscapeWidth: 512,
  landscapeHeight: 300,
  width: 300,
  Clock: {
    background: "#EDEDED",
    armBg: "#009A8A",
    digitColor: "#696768",
    digitActiveBg: "#009A8A",
    digitActiveColor: "#ffffff"
  }
};

TimePicker.propTypes = {};

export default TimePicker;
