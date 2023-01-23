import moment from "moment";
import React from "react";

const SubjectRow = ({ subject, classes, setClasses, present, setPresent }) => {
  console.log({ subject, classes, present });
  return (
    <>
      <div className="col-span-3 text-gray-600">{subject}</div>
      <div className="col-span-2 text-gray-600">
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
      <div className="col-span-1 text-gray-600 flex items-center">
        <input
          type="checkbox"
          checked={present}
          onChange={(e) => {
            console.log(!present);
            setPresent(!present);
          }}
          className="toggle toggle-primary toggle-sm"
        />
      </div>
    </>
  );
};

const UpdateEntryModal = ({
  date,
  core11C,
  setCore11C,
  core11P,
  setCore11P,
  dse3ThC,
  setDse3ThC,
  dse3ThP,
  setDse3ThP,
  dse3PrC,
  setDse3PrC,
  dse3PrP,
  setDse3PrP,
  dse4ThC,
  setDse4ThC,
  dse4ThP,
  setDse4ThP,
  dse4PrC,
  setDse4PrC,
  dse4PrP,
  setDse4PrP,
  updateEntry,
}) => {
  return (
    <>
      <input type="checkbox" id="upate-entry-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle comfortaa">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit entry</h3>
          <p className="text-gray-600">
            Date: {moment(date).format("ddd, DD/MM/YYYY")}
          </p>
          <div className="grid grid-cols-6 pt-2">
            <div className="col-span-3 border-b text-sm text-gray-600">
              Subject
            </div>
            <div className="col-span-2 border-b text-sm text-gray-600">
              No of Classes
            </div>
            <div className="col-span-1 border-b text-sm text-gray-600">
              Present
            </div>

            <SubjectRow
              subject="IOT &amp; VLSI"
              classes={core11C}
              setClasses={setCore11C}
              present={core11P}
              setPresent={setCore11P}
            />
            <SubjectRow
              subject="ML &amp; DS"
              classes={dse3ThC}
              setClasses={setDse3ThC}
              present={dse3ThP}
              setPresent={setDse3ThP}
            />
            <SubjectRow
              subject="ML &amp; DS Pr."
              classes={dse3PrC}
              setClasses={setDse3PrC}
              present={dse3PrP}
              setPresent={setDse3PrP}
            />
            <SubjectRow
              subject="ML &amp; DS"
              classes={dse4ThC}
              setClasses={setDse4ThC}
              present={dse4ThP}
              setPresent={setDse4ThP}
            />
            <SubjectRow
              subject="ML &amp; DS Pr."
              classes={dse4PrC}
              setClasses={setDse4PrC}
              present={dse4PrP}
              setPresent={setDse4PrP}
            />
          </div>
          <div className="modal-action pb-16 md:pb-0">
            <label
              htmlFor="upate-entry-modal"
              className="btn rounded-sm btn-primary mr-3 normal-case"
            >
              Close
            </label>
            <label
              onClick={updateEntry}
              htmlFor="upate-entry-modal"
              className="btn rounded-sm btn-secondary normal-case"
            >
              Update
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateEntryModal;
