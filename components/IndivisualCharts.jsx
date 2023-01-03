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
      data: [35],
      backgroundColor: "#f51cb8ac",
      borderColor: "#F51CB8",
      borderWidth: 2,
    },
    {
      label: "Attended Classes",
      data: [40],
      backgroundColor: "#570df8c9",
      borderColor: "#570DF8",
      borderWidth: 2,
    },
  ],
};

const IndivisualCharts = ({
  core11C,
  core11A,
  dse3ThC,
  dse3PrC,
  dse3ThA,
  dse3PrA,
  dse4ThC,
  dse4PrC,
  dse4ThA,
  dse4PrA,
}) => {
  const getPercentage = (a, b) => {
    return ((a / b) * 100).toFixed(2);
  };
  return (
    <div className="flex flex-wrap mt-8 items-end">
      <div className="w-full md:w-1/2 lg:w-1/3 ">
        <p>
          IOT &amp; VLSI: {getPercentage(core11A, core11C)}% ({core11A}/
          {core11C})
        </p>
        <Bar options={options} data={data1} />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 mt-4 lg:mt-0">
        <p>
          DSE3: {getPercentage(dse3ThA + dse3PrA, dse3ThC + dse3PrC)}% (
          {dse3ThA + dse3PrA}/{dse3ThC + dse3PrC})
        </p>
        <p className="text-sm">
          Theory: {getPercentage(dse3ThA, dse3ThC)}% ({dse3ThA}/{dse3ThC})
        </p>
        <p className="text-sm">
          Prac: {getPercentage(dse3PrA, dse3PrC)}% ({dse3PrA}/{dse3PrC})
        </p>
        <Bar options={options} data={data2} />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 mt-4 lg:mt-0">
        <p>
          DSE4: {getPercentage(dse4ThA + dse4PrA, dse4ThC + dse4PrC)}% (
          {dse4ThA + dse4PrA}/{dse4ThC + dse4PrC})
        </p>
        <p className="text-sm">
          Theory: {getPercentage(dse4ThA, dse4ThC)}% ({dse4ThA}/{dse4ThC})
        </p>
        <p className="text-sm">
          Prac: {getPercentage(dse4PrA, dse4PrC)}% ({dse4PrA}/{dse4PrC})
        </p>
        <Bar options={options} data={data2} />
      </div>
    </div>
  );
};

export default IndivisualCharts;
