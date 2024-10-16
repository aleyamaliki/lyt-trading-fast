import { useState } from "react"
import ReactApexChart from "react-apexcharts"

const GraphPrice = ({ }) => {

    const [data, setData] = useState({
          
        series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }],
        options: {
          chart: {
            height: '100%',
            type: 'line',
            toolbar: { show: false }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          legend: {
            show: false
          },
          grid: { show: false },
          xaxis: {
            lines: { show: false },
            labels: { show: false },
            axisBorder: { show: false },
            axisTicks: { show: false }
          },
          yaxis: {
            lines: { show: false },
            labels: { show: false },
            axisBorder: { show: false }
          },
          tooltip: {
            enabled: false
          }
        },
      
      
    })

    return (
        <div className="w-full h-full">
            <ReactApexChart
                options={data.options}
                series={data.series}
                type="line"
                height="100%"
                width="100%"
            />
        </div>
    )
}

export default GraphPrice