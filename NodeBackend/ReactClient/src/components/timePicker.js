import React from 'react';
import TimePicker from 'react-bootstrap-time-picker';

export default class Parent extends React.Component {
  constructor() {
    super();

    this.handleTimeChange = this.handleTimeChange.bind(this);

    this.state = { time: 0 };
  }

  handleTimeChange(time) {
    //console.log(SecondsTohhmmss(time));     // <- prints "3600" if "01:00" is picked
    this.setState({ time });
  }

  render() {
    return (
      <div className="time">
        <h5><b>Vælg tidspunkt</b></h5>
        <label>Tid:</label>
        <TimePicker onChange={this.handleTimeChange} value={this.state.time}/>
      </div>
    );
  }
}

var SecondsTohhmmss = function(totalSeconds) {
  var hours   = Math.floor(totalSeconds / 3600);
  var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
  var seconds = totalSeconds - (hours * 3600) - (minutes * 60);

  // round seconds
  seconds = Math.round(seconds * 100) / 100

  var result = (hours < 10 ? "0" + hours : hours);
      result += "-" + (minutes < 10 ? "0" + minutes : minutes);
      result += "-" + (seconds  < 10 ? "0" + seconds : seconds);
  return result;
}
