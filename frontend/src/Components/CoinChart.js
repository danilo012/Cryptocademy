import React, { Component } from "react";
import Chart from "react-apexcharts";
import dayjs from 'dayjs'

class CoinChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
          
        series: [{
          name: 'candle',
          data: props.historicalData
        }],
        options: {
          chart: {
            // height: 550,
            type: 'candlestick',
          },
          title: {
            text: '',
            align: 'left'
          },
          annotations: {
            xaxis: [
              {
                x: 'Oct 06 14:00',
                borderColor: '#00E396',
                label: {
                  borderColor: '#00E396',
                  style: {
                    fontSize: '20px',
                    color: '#fff',
                    background: '#00E396'
                  },
                  orientation: 'horizontal',
                  offsetY: 7,
                  text: 'Annotation Test'
                }
              }
            ]
          },
          tooltip: {
            enabled: true,
          },
          xaxis: {
            type: 'category',
            labels: {
              formatter: function(val) {
                return dayjs(val).format('MMM DD HH:mm')
              }
            }
          },
          yaxis: {
            tooltip: {
              enabled: true
            }
          }
        },
      
      
      };
  }

  render() {
    return (
      <div className="">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="candlestick"
              height={800}
            />
          </div>
        </div>
        
      </div>
    );
  }
}

export default CoinChart;