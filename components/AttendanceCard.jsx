import React from "react";
import moment from "moment";

const SubRecord = ({ subject }) => {
  return (
    <>
      <div className="col-span-2 text-xs">IOT &amp; VLSI</div>
      <div className="col-span-1 flex">
        <input type="checkbox" className="toggle toggle-primary toggle-xs" />
      </div>
      <div className="col-span-2">
        <button className="btn btn-xs rounded-full btn-disabled">-</button>
        <span className="text-xs mx-2">0</span>
        <button className="btn btn-xs rounded-full btn-primary">+</button>
      </div>
    </>
  );
};

const AttendanceCard = ({ date }) => {
  return (
    <div
      className="border-2 border-black p-4 w-64 min-w-[256px] mr-6 rounded-sm"
      style={{ boxShadow: "5px 5px #F000B8" }}
    >
      <p>
        Date:{" "}
        <span className="text-primary">
          {moment(date).format("DD/MM/YY, (ddd)")}
        </span>
      </p>
      <div className="py-2 mb-3">
        <div className="grid grid-cols-5 mb-1">
          <div className="col-span-2">
            <p className="text-xs">Paper</p>
          </div>
          <div className="col-span-1 ">
            <p style={{ fontSize: 10 }}>Present</p>
          </div>
          <div className="col-span-1 ">
            <p style={{ fontSize: 10 }}>
              No of
              <br />
              Classes
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 items-center">
          <SubRecord />
        </div>
        <div className="grid grid-cols-5 items-center">
          <SubRecord />
        </div>
        <div className="grid grid-cols-5 items-center">
          <SubRecord />
        </div>
        <div className="grid grid-cols-5 items-center">
          <SubRecord />
        </div>
        <div className="grid grid-cols-5 items-center">
          <SubRecord />
        </div>
      </div>
      <div className="flex justify-end">
        <button className="btn btn-sm btn-primary normal-case rounded-sm">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AttendanceCard;
