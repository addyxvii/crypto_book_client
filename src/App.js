import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getOrderBooks, getPoloniex } from './api.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {data : 'hello' }
  };

  componentDidMount() {
    getOrderBooks((error, data) => {
      console.log('component has socket data');
      this.setState({data})
    });

    getPoloniex((error, data) => {
      console.log('component has Poloniex data')
      this.setState({
        poloniex : data,
      })
    });
    console.log('component mounted!!');
  }

  render() {
    return (
      <div className="App">
        <div style={{
          background: 'cornflowerblue',
          color: 'black',
          height: this.state.poloniex ? `${this.state.poloniex[1] * 5}px` : '50px',
          width: this.state.poloniex ? `${this.state.poloniex[1] * 5}px` : '50px'
        }}>sample div</div>
        {this.state.data ? "got dat web socket data" : "no data. Sad!"}
      </div>
    );
  }
}

export default App;
