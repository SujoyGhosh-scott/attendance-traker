import React, { useState } from "react";
import moment from "moment";
import SubRecord from "./SubRecord";
import axios from "axios";

const AttendanceCard = ({ date, subject, removeDate }) => {
  const [core11C, setCore11C] = useState(0);
  const [core11present, setCore11present] = useState(false);
  const [dse3thC, setdse3thC] = useState(0);
  const [dse3thPresent, setDse3ThPresent] = useState(false);
  const [dse3prC, setDse3PrC] = useState(0);
  const [dse3PrPresent, setDse3PrPresent] = useState(false);
  const [dse4thC, setdse4thC] = useState(0);
  const [dse4thPresent, setDse4ThPresent] = useState(false);
  const [dse4prC, setDse4PrC] = useState(0);
  const [dse4PrPresent, setDse4PrPresent] = useState(false);

  const addRecord = () => {
    console.log("adding record");
    //get roll no from localstorage

    //check if present in classes with count 0
    //check if total classes exceeds total class a day limit

    const payload = {
      roll: 102,
      date,
      core11C,
      core11present,
      dse3thC,
      dse3thPresent,
      dse3prC,
      dse3PrPresent,
      dse4thC,
      dse4thPresent,
      dse4prC,
      dse4PrPresent,
    };
    console.log(payload);

    axios
      .post("/api/add-entry", payload)
      .then((res) => {
        console.log("resp: ", res.data);
        removeDate(date);
      })
      .catch((err) => {
        console.log(err.message);
        //show alert error
      });

    //if successful, remove date from list to remove card
    //otherwise show alert saying what went wrong
  };

  return (
    <div
      className="border-2 border-black p-4 w-64 min-w-[256px] mr-6 rounded-sm"
      style={{ boxShadow: "5px 5px #F000B8" }}
    >
      <p>
        Date:{" "}
        <span className="text-primary">
          {moment(date).format("ddd, DD/MM/YY")}
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
          <SubRecord
            subject="IOT &amp; VLSI"
            classes={core11C}
            setClasses={setCore11C}
            present={core11present}
            setPresent={setCore11present}
          />
        </div>
        <div className="grid grid-cols-5 items-center">
          <SubRecord
            subject="DSE 3"
            classes={dse3thC}
            setClasses={setdse3thC}
            present={dse3thPresent}
            setPresent={setDse3ThPresent}
          />
        </div>
        {/* show prac based on day */}
        <div className="grid grid-cols-5 items-center">
          <SubRecord
            subject="DSE 3 Pr"
            classes={dse3prC}
            setClasses={setDse3PrC}
            present={dse3PrPresent}
            setPresent={setDse3PrPresent}
          />
        </div>
        <div className="grid grid-cols-5 items-center">
          <SubRecord
            subject="DSE 4"
            classes={dse4thC}
            setClasses={setdse4thC}
            present={dse4thPresent}
            setPresent={setDse4ThPresent}
          />
        </div>
        {/* show prac based on day */}
        <div className="grid grid-cols-5 items-center">
          <SubRecord
            subject="DSE 4 Pr"
            classes={dse4prC}
            setClasses={setDse4PrC}
            present={dse4PrPresent}
            setPresent={setDse4PrPresent}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => addRecord()}
          className="btn btn-sm btn-primary normal-case rounded-sm"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AttendanceCard;
