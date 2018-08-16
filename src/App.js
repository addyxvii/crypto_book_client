import React, { Component } from 'react';
import './App.css';
import Orders from './components/orders.js';
import { getBittrex, getPoloniex } from './api.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {data : 'no data yet' }
  };

  componentDidMount() {
    getBittrex((error, data) => {
      console.log('component has socket data');
      this.setState({
       bittrex : data,
      })
    });

    getPoloniex((error, data) => {
      console.log('component has Poloniex data')
      this.setState({
        poloniex : data,
      })
    });
  }

  render() {
    return (
     <Orders />
    );
  }
}

export default App;
