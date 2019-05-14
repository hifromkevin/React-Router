import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import Chart from 'chart.js';

export default class ChartFun extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: ['San Francisco', 'Oakland', 'San Jose', 'Walnut Creek', 'Concord'],
        datasets: [
          {
            label: 'Population',
            data: [
              617423,
              481435,
              153546,
              254932,
              95013
            ],
            backgroundColor: [
              '#f90',
              '#00f',
              '#900',
              '#fff',
              '#777'
            ]
          }
        ]
      }
    }
  }

  render() {
    return(
      <div>
        <h1>Charts</h1>
        <Bar 
          data={this.state.chartData}
          width={100}
          height={50}
          options={{
            title: {
              display: true,
              text: 'Largest Cities in the Bay Area'
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div> 
    );
  }
};
