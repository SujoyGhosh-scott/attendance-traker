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

const SubjectChart = ({
  dataSet,
  labels = ["Total", "Attended", "Th", "Pr"],
}) => {
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: dataSet,
        borderColor: ["#570DF8", "#06b6d4", "#F51CB8", "#F51CB8"],
        backgroundColor: ["#570df8c9", "#22d3ee", "#f51cb8ac", "#f51cb8ac"],
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default SubjectChart;
