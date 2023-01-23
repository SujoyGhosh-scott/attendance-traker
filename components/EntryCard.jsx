import moment from "moment";
import React from "react";

const EntryCard = ({ entry, updateModalData }) => {
  return (
    <>
      <p className="text-xs mb-2">
        Date: {moment(entry.date).format("ddd, DD/MM/YYYY")}
      </p>
      <p className="text-sm">
        IOT &amp; VLSI: {entry.core11C}&nbsp;
        {entry.core11C ? (entry.core11P ? "(Pre)" : "(Abs)") : null}
      </p>
      <p className="text-sm">
        ML &amp; DS: {entry.dse3ThC}&nbsp;
        {entry.dse3ThC ? (entry.dse3ThP ? "(Pre)" : "(Abs)") : null}
      </p>
      <p className="text-sm">
        ML &amp; DS Pr: {entry.dse3PrC}&nbsp;
        {entry.dse3PrC ? (entry.dse3PrP ? "(Pre)" : "(Abs)") : null}
      </p>
      <p className="text-sm">
        Image Pro: {entry.dse4ThC}&nbsp;
        {entry.dse4ThC ? (entry.dse4ThP ? "(Pre)" : "(Abs)") : null}
      </p>
      <p className="text-sm">
        Image Pro. Pr: {entry.dse4PrC}&nbsp;
        {entry.dse4PrC ? (entry.dse4PrP ? "(Pre)" : "(Abs)") : null}
      </p>

      <div className="flex justify-end">
        <label
          onClick={() =>
            updateModalData(
              entry.date,
              entry.core11C,
              entry.core11P,
              entry.dse3ThC,
              entry.dse3ThP,
              entry.dse3PrC,
              entry.dse3PrP,
              entry.dse4ThC,
              entry.dse4ThP,
              entry.dse4PrC,
              entry.dse4PrP
            )
          }
          htmlFor="upate-entry-modal"
          className="btn normal-case rounded-sm btn-primary btn-sm mt-4"
        >
          Update
        </label>
      </div>
    </>
  );
};

export default EntryCard;
