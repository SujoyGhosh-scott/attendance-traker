import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  plugins: {
    title: {},
  },
  responsive: true,
  scales: {
    x: {
      //stacked: true,
    },
    y: {
      //stacked: true,
      max: 60,
      stepSize: 10,
      display: false,
    },
  },
};

export const data1 = {
  labels: ["IOT & VLSI"],
  datasets: [
    {
      label: "Total Classes",
      data: [45, 50, 54],
      backgroundColor: "#f51cb8ac",
      borderColor: "#F51CB8",
      borderWidth: 2,
    },
    {
      label: "Attended Classes",
      data: [40, 43, 45],
      backgroundColor: "#570df8c9",
      borderColor: "#570DF8",
      borderWidth: 2,
    },
  ],
};

export const data2 = {
  labels: ["DSE"],
  datasets: [
    {
      label: "Total Classes",
      data: [45, 50, 54],
      backgroundColor: "#f51cb8ac",
      borderColor: "#F51CB8",
      borderWidth: 2,
    },
    {
      label: "Attended Classes",
      data: [40, 43, 45],
      backgroundColor: "#570df8c9",
      borderColor: "#570DF8",
      borderWidth: 2,
    },
  ],
};

const IndivisualCharts = () => {
  return (
    <div className="flex flex-wrap mt-8">
      <div className="w-full md:w-1/2 lg:w-1/3 ">
        <p>IOT &amp; VLSI: 84% (40/45)</p>
        <Bar options={options} data={data1} />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 mt:4 lg:mt-0">
        <p>DSE3: 82% (43/50)</p>
        <Bar options={options} data={data2} />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 mt-4 lg:mt-0">
        <p>DSE3: 84% (45/54)</p>
        <Bar options={options} data={data2} />
      </div>
    </div>
  );
};

export default IndivisualCharts;
