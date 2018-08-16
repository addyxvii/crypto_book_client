import React, { Component } from 'react';
import {
    Charts,
    ChartContainer,
    ChartRow,
    YAxis,
    LineChart,
} from "react-timeseries-charts";

class Orders extends React.Component {
    render() {
        return(
        <ChartContainer timeRange={timeRange()} width={800}>
        <ChartRow height="200">
            <YAxis id="axis1" label="AUD" min={0.5} max={1.5} width="60" type="linear" format="$,.2f"/>
            <Charts>
                <LineChart axis="axis1" series={[1, 2, 3]} column={["aud"]}/>
                <LineChart axis="axis2" series={[3, 4, 5]} column={["euro"]}/>
            </Charts>
            <YAxis id="axis2" label="Euro" min={0.5} max={1.5} width="80" type="linear" format="$,.2f"/>
        </ChartRow>
    </ChartContainer>
        )}
};
export default(Orders); 