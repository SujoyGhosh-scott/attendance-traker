import React from "react";

const SubRecord = ({ subject, classes, present, setPresent, setClasses }) => {
  return (
    <>
      <div className="col-span-2 text-xs">{subject}</div>
      <div className="col-span-1 flex">
        <input
          type="checkbox"
          value={present}
          onChange={(e) => setPresent(e.target.value)}
          className="toggle toggle-primary toggle-xs"
        />
      </div>
      <div className="col-span-2">
        <button
          onClick={() => {
            if (classes === 0) return;
            setClasses(classes - 1);
          }}
          className={`btn btn-xs rounded-full ${
            classes === 0 ? "btn-disabled" : "btn-primary"
          }`}
        >
          -
        </button>
        <span className="text-xs mx-2">{classes}</span>
        <button
          onClick={() => {
            setClasses(classes + 1);
          }}
          className="btn btn-xs rounded-full btn-primary"
        >
          +
        </button>
      </div>
    </>
  );
};

export default SubRecord;
