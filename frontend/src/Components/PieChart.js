import React from 'react'
import ReactApexChart from 'react-apexcharts'

const PieChart = ({globalCryptoData}) => {
    const state = {
        series: Object.values(globalCryptoData.data.market_cap_percentage),
        options: {
            chart: {
            width: 380,
            type: 'pie',
            },
            labels: Object.keys(globalCryptoData.data.market_cap_percentage),
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                            chart: {
                            width: 350
                            },
                            legend: {
                            position: 'bottom'
                            }
                    }
                },
            ]
        },
    }
  return (
    <div className='flex justify-center mt-8'>
        <ReactApexChart options={state.options} series={state.series} type="pie" width={600} />
    </div>
  )
}

export default PieChart