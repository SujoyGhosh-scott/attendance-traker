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
  plugins: {
    title: {
      display: true,
      text: "Classes attended with total no of classes",
      color: "gray",
    },
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
    },
  },
};

const labels = ["IOT & VLSI", "DSE3", "DSE4"];

export const data = {
  labels,
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

const OverallChart = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <p>Percentage in overall classes: 82%</p>
        <p>IOT &amp; VLSI Design: 80%</p>
        <p>DSE 3: 82%</p>
        <p>DSE 4: 84%</p>
        <p>To see detailed breakdown, checkout the following graphs</p>
      </div>
      <div className="w-full md:w-1/2">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default OverallChart;
