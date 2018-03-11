import React, { Component } from 'react';
import TimePicker from './components/TimePicker'
import './App.css';

const getTime = (time) => {
  console.log(time);
}

class App extends Component {
  render() {
    return <TimePicker
      onTimeChange={getTime}
      okText="OK"
      cancelText="CANCEL"
    />
  }
}

export default App;
