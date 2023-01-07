import moment from "moment/moment";
import React, { useState, useEffect } from "react";
import { listOfNoClassDays } from "../lib/listOfNoClassDays";
import AttendanceCard from "./AttendanceCard";

const AttendanceCards = ({ lastUpdated = "2023-01-01" }) => {
  const [daylist, setDaylist] = useState([]);

  useEffect(() => {
    var getDaysArray = function (start, end) {
      for (
        var arr = [], dt = new Date(start);
        dt <= new Date(end);
        dt.setDate(dt.getDate() + 1)
      ) {
        //if not saturday or sunday, add the date
        // console.log(
        //   dt,
        //   moment(dt).format("DD/MM/YYYY"),
        //   listOfNoClassDays.includes(moment(dt).format("DD/MM/YYYY"))
        // );
        if (
          dt.getDay() !== 0 &&
          dt.getDay() !== 6 &&
          !listOfNoClassDays.includes(moment(dt).format("DD/MM/YYYY"))
        ) {
          arr.push(new Date(dt));
        }
      }
      return arr;
    };

    let temp = getDaysArray(new Date(lastUpdated), new Date());
    temp.map((v) => v.toISOString().slice(0, 10)).join("");

    setDaylist(temp);
  }, []);

  const removeDate = (date) => {
    console.log("removing date from list of dates: ", date);
    setDaylist(daylist.filter((day) => day !== date));
  };

  return (
    <div className="flex flex-nowrap mt-6 mb-6 pb-3 overflow-x-scroll ">
      {daylist.map((date) => (
        <AttendanceCard key={date} date={date} removeDate={removeDate} />
      ))}
    </div>
  );
};

export default AttendanceCards;
