import React from 'react'
import TimePicker from './TimePicker'

export class InputTimePicker extends React.Component {

  state = {
    show: false,
    value: ''
  }

  showTimePicker = () => {
    this.setState({show: true})
  }

  hideTimePicker = () => {
    this.setState({show: false})
  }

  pickTime = (time) => {
    this.setState({
      show: false,
      value: time
    })
  }

  render() {
   return (
     <TimePicker
      show={this.state.show}
      onTimeChange={this.pickTime}
      onCancel={this.hideTimePicker}
      {...this.props}
     >
      <input
        {...this.props}
        onFocus={this.showTimePicker}
        value={this.state.value}
      />
     </TimePicker>
   )
  }

}
