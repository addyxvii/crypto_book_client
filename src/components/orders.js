import React, { Component } from 'react';
import { getBittrex, getPoloniex } from '../api.js';
import {
    AreaChart, 
    linearGradient, 
    CartesianGrid, 
    Area, 
    defs,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";


class Orders extends React.Component {
    constructor(props){
        super(props);
        this.state = {data : 'no data yet' }
      };
    
      componentDidMount() {
        getBittrex((error, data) => {
          console.log('component has socket data');
          this.setState({
           bittrex : data.A[0].Buys,
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
        console.log("LOG THIS YOU BEAUTIFUL IDIOT", this.state.bittrex);
        let data = [
            {name: 'Point 1', Bittrex: 4000, Poloniex:2400, amt: 2400},
            {name: 'Point 2', Bittrex: 3000, Poloniex:1398, amt: 2210},
            {name: 'Point 3', Bittrex: 2000, Poloniex:9800, amt: 2000},
            {name: 'Point 4', Bittrex: 2780, Poloniex:3908, amt: 1234},
            {name: 'Point 5', Bittrex: 1890, Poloniex:4800, amt: 2181},
            {name: 'Point 6', Bittrex: 2390, Poloniex:3800, amt: 2290},
        ]
        return(
            <AreaChart width={730} height={250} data= {data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="Bittrex" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="Poloniex" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        )}
};
export default(Orders); 