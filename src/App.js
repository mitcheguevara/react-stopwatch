import React, { Component } from 'react';
import Stopwatch from './Stopwatch';
import './App.css'



class App extends Component {
  render() {
  return(
    <Stopwatch />
  );
}

}
export default App;

//   constructor(props){
//     super(props);
//     this.state = {
//       secondsElapsed: 0
//     };
//     this.incrementer = null;
//   }
//
//
//   handleStartClick(e){
//     setInterval(function() {this.setState({
//       secondsElapsed: this.state.secondsElapsed + 1
//     })
//   }, 1000)
// }
//
//   handleStopClick(e){
//     clearInterval(this.incrementer);
//     this.setState({
//       lastClearedIncrementer: this.incrementer
//     });
//   }
//
//   handleResetClick(){
//     clearInterval(this.incrementer);
//     this.setState({
//       secondsElapsed:0,
//       laps:[]
//     });
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>{this.state.secondsElapsed}</h1>
//         <button type="button" onClick={e => this.handleStartClick()}>Start</button>
//         <button type="button" onClick={e => this.handleStopClick(e)}>Stop</button>
//         <button type="button" onClick={e => this.handleResetClick(e)}>Reset</button>
//       </div>
//     );
//   }
// }
//
