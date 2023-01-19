import moment from "moment/moment";
import React, { useState, useEffect } from "react";
import { listOfNoClassDays } from "../lib/listOfNoClassDays";
import AttendanceCard from "./AttendanceCard";

const AttendanceCards = ({ lastUpdated = "Jan 15, 2023" }) => {
  const [daylist, setDaylist] = useState([]);

  // console.log("lastupdated: ", lastUpdated);

  useEffect(() => {
    var getDaysArray = function (start, end) {
      for (
        var arr = [], dt = new Date(start);
        dt <= new Date(end);
        dt.setDate(dt.getDate() + 1)
      ) {
        //if not thursday or sunday, add the date
        // console.log(
        //   dt,
        //   moment(dt).format("DD/MM/YYYY"),
        //   listOfNoClassDays.includes(moment(dt).format("DD/MM/YYYY"))
        // );
        if (
          dt.getDay() !== 0 &&
          dt.getDay() !== 4 &&
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
    <div className="flex flex-nowrap mt-4 mb-4 pb-3 overflow-x-scroll ">
      {daylist.length > 0 ? (
        daylist.map((date) => (
          <AttendanceCard key={date} date={date} removeDate={removeDate} />
        ))
      ) : (
        <p>All record entered</p>
      )}
    </div>
  );
};

export default AttendanceCards;
