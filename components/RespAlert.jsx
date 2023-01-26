import React from "react";

const RespAlert = ({ resp, setResp }) => {
  return (
    <div
      className={`flex border-2 p-2 mt-2 items-center rounded-sm ${
        resp.type === "success"
          ? "border-success bg-green-100"
          : "border-error bg-red-100"
      }`}
    >
      <p
        className={`w-full xl:w-4/5 text-sm flex-1 ${
          resp.type === "success" ? "text-success" : "text-error"
        }`}
      >
        {resp.message}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        onClick={() => {
          setResp({
            type: null,
            message: "",
          });
        }}
        className={`w-5 h-5  ${
          resp.type === "success" ? "text-success" : "text-error"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default RespAlert;
