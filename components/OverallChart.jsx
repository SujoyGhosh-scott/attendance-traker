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

const OverallChart = ({
  totalClasses,
  attendedClasses,
  max = 70,
  totalCore11,
  attendedCore11,
  totalDse3,
  attendedDse3,
  totalDse4,
  attendedDse4,
}) => {
  // console.log(
  //   "max: ",
  //   totalCore11,
  //   totalDse3,
  //   totalDse4,
  //   attendedCore11,
  //   attendedDse3,
  //   attendedDse4
  // );

  const options = {
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
        max: max,
        stepSize: 10,
      },
    },
  };

  const getData = () => {
    return {
      labels: ["IOT & VLSI", "DSE3", "DSE4"],
      datasets: [
        {
          label: "Total Classes",
          data: totalClasses,
          backgroundColor: "#f51cb8ac",
          borderColor: "#F51CB8",
          borderWidth: 2,
        },
        {
          label: "Attended Classes",
          data: attendedClasses,
          backgroundColor: "#570df8c9",
          borderColor: "#570DF8",
          borderWidth: 2,
        },
      ],
    };
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <p>
          Percentage in overall classes:{" "}
          {(
            ((attendedCore11 + attendedDse3 + attendedDse4) /
              (totalCore11 + totalDse3 + totalDse4)) *
            100
          ).toFixed(2)}
          %
        </p>
        <p>IOT &amp; VLSI Design: {attendedCore11 / totalCore11}%</p>
        <p>DSE 3: {((attendedDse3 / totalDse3) * 100).toFixed(2)}%</p>
        <p>DSE 4: {((attendedDse4 / totalDse4) * 100).toFixed(2)}%</p>
        <p>To see detailed breakdown, checkout the following charts</p>
      </div>
      <div className="w-full md:w-1/2">
        <Bar options={options} data={getData()} />
      </div>
    </div>
  );
};

export default OverallChart;
