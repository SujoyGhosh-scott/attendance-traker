import React from "react";
import SubjectChart from "./SubjectChart";

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
      <div className="w-full md:w-1/2 lg:w-1/3 lg:pr-6">
        <p>
          IOT &amp; VLSI: {getPercentage(core11A, core11C)}% ({core11A}/
          {core11C})
        </p>
        <SubjectChart
          dataSet={[100, getPercentage(core11A, core11C)]}
          labels={["Total", "Attendded"]}
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 mt-4 lg:mt-0 lg:pr-6">
        <p>
          ML &amp; DS: {getPercentage(dse3ThA + dse3PrA, dse3ThC + dse3PrC)}% (
          {dse3ThA + dse3PrA}/{dse3ThC + dse3PrC})
        </p>
        <p className="text-sm">
          Theory: {getPercentage(dse3ThA, dse3ThC)}% ({dse3ThA}/{dse3ThC})
        </p>
        <p className="text-sm">
          Prac: {getPercentage(dse3PrA, dse3PrC)}% ({dse3PrA}/{dse3PrC})
        </p>
        <SubjectChart
          dataSet={[
            100,
            getPercentage(dse3ThA + dse3PrA, dse3ThC + dse3PrC),
            getPercentage(dse3ThA, dse3ThC),
            getPercentage(dse3PrA, dse3PrC),
          ]}
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 mt-4 lg:mt-0 lg:pr-6">
        <p>
          Image Processing:{" "}
          {getPercentage(dse4ThA + dse4PrA, dse4ThC + dse4PrC)}% (
          {dse4ThA + dse4PrA}/{dse4ThC + dse4PrC})
        </p>
        <p className="text-sm">
          Theory: {getPercentage(dse4ThA, dse4ThC)}% ({dse4ThA}/{dse4ThC})
        </p>
        <p className="text-sm">
          Prac: {getPercentage(dse4PrA, dse4PrC)}% ({dse4PrA}/{dse4PrC})
        </p>
        <SubjectChart
          dataSet={[
            100,
            getPercentage(dse4ThA + dse4PrA, dse4ThC + dse4PrC),
            getPercentage(dse4ThA, dse4ThC),
            getPercentage(dse4PrA, dse4PrC),
          ]}
        />
      </div>
    </div>
  );
};

export default IndivisualCharts;
