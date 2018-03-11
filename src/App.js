import React, { Component, Fragment } from 'react';
import { InputTimePicker } from './components/InputTimePicker'
import './App.css';

const getTime = (time) => {
  console.log(time);
}

class App extends Component {

  state = {
    showTimePicker: false
  }

  showTimePicker = () => {
    this.setState({ showTimePicker: true })
  }

  hideTimePicker = () => {
    this.setState({ showTimePicker: false })
  }

  render() {
    return (
      <Fragment>
        <InputTimePicker
          placeholder="Pick a time"
        />
        <InputTimePicker
          placeholder="Pick a time again"
        />
      </Fragment>
    )
  }
}

export default App;
