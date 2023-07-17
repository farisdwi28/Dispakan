import React from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  return (
    <div className="BlogChart container-fluid mb-5">
      <Chart
        type="bar"
        width={500}
        height={300}
        series={[
          {
            name: "Social Media",
            data: [6578, 6787, 3245, 9876, 2324, 5123]
          }
        ]}
        options={{
          colors: ["#5F63F2"],
          theme: { mode: "light" },

          xaxis: {
            tickPlacement: "on",
            categories: [
              "Facebook",
              "Instagram",
              "Tokopedia",
              "Shopee",
              "Whatsapp",
              "Line"
            ]
          },

          yaxis: {
            labels: {
              formatter: val => {
                return `${val}`;
              },
              style: { fontSize: "15", colors: ["#5F63F2"] }
            },
            title: {
              text: "Banyak Klik",
              style: { color: "#5F63F2", fontSize: 15 }
            }
          },

          legend: {
            show: true,
            position: "right"
          },

          dataLabels: {
            formatter: val => {
              return `${val}`;
            },
            style: {
              colors: ["#f4f4f4"],
              fontSize: 15
            }
          }
        }}
      ></Chart>
    </div>
  );
};

export default BarChart;
