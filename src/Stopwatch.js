import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(){
    super()
    this.state = {
      seconds: 0
    }
    this.incrementer = null;
  }


  handleStartClick(e){
    e.preventDefault()
    this.incrementer = setInterval(() => {this.setState({
      seconds: this.state.seconds += 1
    })
  }, 1000)
}
  handleStopClick(e){
    e.preventDefault()
    clearInterval(this.incrementer)
  }
  handleResetClick(e){
    e.preventDefault()
    clearInterval(this.incrementer)
    this.setState({seconds:0})
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.seconds}</h1>
        <button type="button" onClick={e => this.handleStartClick(e)}>Start</button>
        <button type="button" onClick={e => this.handleStopClick(e)}>Stop</button>
        <button type="button" onClick={e => this.handleResetClick(e)}>Reset</button>
      </div>
    );
  }
}


export default Stopwatch;
