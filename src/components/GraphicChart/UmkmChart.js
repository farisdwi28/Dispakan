import React from "react";
import Chart from "react-apexcharts";

const UmkmChart = () => {
  const data = {
    series: [
      {
        name: "Total UMKM",
        data: [10, 50, 30, 90, 40, 120, 100]
      }
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
        toolbar: {
          show: false
        }
      },
      fill: {
        colors: ["#5F63F2"],
        type: "gradient"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        colors: ["#5F63F2"]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      },
      grid: {
        show: false
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      yaxis: {
        show: false
      }
    }
  };

  return (
    <div className="UmkmChart">
      <Chart options={data.options} series={data.series} type="area" />
    </div>
  );
};

export default UmkmChart;
