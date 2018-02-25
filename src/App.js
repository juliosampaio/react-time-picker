import React, { Component } from 'react';
import TimePicker from './components/TimePicker'
import './App.css';

class App extends Component {
  render() {
    return <TimePicker
      okText="OK"
      cancelText="CANCEL"
    />
  }
}

export default App;
