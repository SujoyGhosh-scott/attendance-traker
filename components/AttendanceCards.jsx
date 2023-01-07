import React, { useState, useEffect } from "react";
import AttendanceCard from "./AttendanceCard";

const AttendanceCards = () => {
  const [daylist, setDaylist] = useState([]);

  useEffect(() => {
    var getDaysArray = function (start, end) {
      for (
        var arr = [], dt = new Date(start);
        dt <= new Date(end);
        dt.setDate(dt.getDate() + 1)
      ) {
        if (dt.getDay() !== 0 && dt.getDay() !== 6) arr.push(new Date(dt));
      }
      return arr;
    };

    const temp = getDaysArray(new Date("2023-01-01"), new Date());
    temp.map((v) => v.toISOString().slice(0, 10)).join("");
    //daylist with holidays. remove holidays from academic caledner

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
