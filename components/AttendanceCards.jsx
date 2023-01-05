import React from "react";
import AttendanceCard from "./AttendanceCard";

const AttendanceCards = () => {
  var getDaysArray = function (start, end) {
    for (
      var arr = [], dt = new Date(start);
      dt <= new Date(end);
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(new Date(dt));
    }
    return arr;
  };

  const daylist = getDaysArray(new Date("2023-01-01"), new Date());
  daylist.map((v) => v.toISOString().slice(0, 10)).join("");

  console.log(daylist);

  return (
    <div className="flex flex-nowrap mt-6 mb-6 pb-3 overflow-x-scroll ">
      {daylist.map((date) => (
        <AttendanceCard key={date} date={date} />
      ))}
    </div>
  );
};

export default AttendanceCards;
