import React, {  useEffect, useRef, useState } from "react";
import Chart from "react-apexcharts";
import dayjs from 'dayjs'
import { useGetHistoricalDataQuery } from "../services/coinsDataApi";
import ErrorToast from "./ErrorToast";
import { BsFillBarChartLineFill } from "react-icons/bs";

const CoinChart = ({id}) => {
  const [chartDays,setChartDays] = useState('365')
  const [candleStickChart, setCandleStickChart] = useState(true)
  const toastRef = useRef(null)

  const { data, error, isLoading,isFetching,isSuccess,refetch } = useGetHistoricalDataQuery({id,chartDays})

   
  useEffect(()=>{
    if(error){
        toastRef.current.show()
    }
  },[error])

  const series = [{
    name: 'candle',
    data
  }]

  const options = {
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
    },
    // fill: {
    //   type: 'gradient',
    //   gradient: {
    //     shade: 'dark',
    //     gradientToColors: [ '#1ce950'],
    //     shadeIntensity: 1,
    //     type: 'horizontal',
    //     opacityFrom: 1,
    //     opacityTo: 1,
    //     stops: [0, 100, 100, 100]
    //   },
    // },
  }
  return (
    <>
      <div className="mb-6 ml-4 inline-flex  rounded-md shadow-sm" role="group">
        <button onClick={() => setChartDays(() => '1')} type="button" className="py-2 px-4 text-sm font-medium  rounded-l-lg border  focus:z-10 focus:ring-2  bg-gray-900 border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white">
          24 Hours
        </button>
        <button onClick={() => setChartDays(() =>'30')} type="button" className="py-2 px-4 text-sm font-medium  border-t border-b  focus:z-10 focus:ring-2  bg-gray-900 border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white">
          30 Days
        </button>
        <button onClick={() => setChartDays(() =>'90')} type="button" className="py-2 px-4 text-sm font-medium   border  focus:z-10 focus:ring-2  bg-gray-900 border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white">
          3 Months
        </button>
        <button onClick={() => setChartDays(() =>'365')} type="button" className="py-2 px-4 text-sm font-medium   border  focus:z-10 focus:ring-2  bg-gray-900 border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white">
          1 Year
        </button>
        <button onClick={() => setCandleStickChart(!candleStickChart)}  type="button" className="py-2 px-4 text-sm font-medium  rounded-r-md border  focus:z-10 focus:ring-2  bg-gray-900 border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white">
          {
            candleStickChart ?
            <img src="https://img.icons8.com/color-glass/96/000000/area-chart.png" className='inline-block w-5 h-5 '/>
            :
            <img src="https://img.icons8.com/color/48/000000/candle-sticks.png" className='inline-block w-5 h-5 '/>
          }
        </button>
      </div>
      {isLoading && <p className='text-white text-3xl'>...Loading</p>}
          
      {error && <ErrorToast message="Something Went Wrong!" ref={toastRef}/>}
      {/* chart */}
      <div className="row">
        <div className="mixed-chart">
          {
            (isSuccess ) &&
            candleStickChart ?
            <Chart
              options={options}
              series={series}
              type="candlestick"
              height={800}
            />
            :
            <Chart
              options={options}
              series={series}
              type="line"
              height={800}
            />
          }
        </div>
      </div>
    </>
  )
}

export const HistoricalChart = React.memo(CoinChart)