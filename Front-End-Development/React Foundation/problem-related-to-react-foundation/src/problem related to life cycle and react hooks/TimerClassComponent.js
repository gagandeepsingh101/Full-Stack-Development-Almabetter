import React, { Component } from 'react';

class TimerClassComponent extends Component {
  state = {
    timer: 0,
  };

  intervalId = null;

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer + 1,
      }));
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.intervalId);
  };

  render() {
    return (
      <div>
        <h1>Class Component with Lifecycle Methods</h1>
        <p>Timer: {this.state.timer} seconds</p>
      </div>
    );
  }
}

export default TimerClassComponent;