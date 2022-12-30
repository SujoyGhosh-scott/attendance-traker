import Link from "next/link";
import React, { useState } from "react";

const SignUp = () => {
  const [type, setType] = useState("password");
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({
    type: null,
    message: "",
  });

  const createAccount = () => {
    console.log("createAccount");
    //is name there
    //is roll there
    //is password there
    //does passwords match
  };

  return (
    <div className="bg-gray-50 min-h-screen text-black lg:px-72 xl:px-96 flex flex-col justify-center items-center">
      <h2 className="text-3xl mb-8 comfortaa font-semibold text-secondary">
        Attendance <br />
        Tracker
      </h2>
      <div
        style={{ boxShadow: "-5px 5px #570DF8" }}
        className="border-2 border-black p-6 pt-4"
      >
        <div className="tabs mb-4 flex">
          <Link
            href="/auth/signup"
            className="tab flex-1  tab-active tab-lg tab-bordered text-secondary"
          >
            Sign Up
          </Link>
          <Link href="/auth/login" className="tab flex-1 tab-lg tab-bordered">
            Sign In
          </Link>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type here"
            className="input input-bordered input-secondary w-full rounded-sm"
          />
          <label className="label mt-4">
            <span className="label-text">Roll no.</span>
          </label>
          <input
            type="text"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            placeholder="Type here"
            className="input input-bordered input-secondary w-full rounded-sm"
          />
          {/* <label className="label">
            <span className="label-text-alt">Alt label</span>
          </label> */}
          <label className="label mt-4">
            <span className="label-text">Password</span>
          </label>
          <div className="flex mb-4">
            <div className="flex-1">
              <input
                type={type}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type here"
                className="input input-bordered input-secondary w-full rounded-sm"
              />
              {/* <label className="label">
            <span className="label-text-alt">Alt label</span>
          </label> */}
            </div>
            <button
              onClick={() => {
                if (type === "password") {
                  setType("text");
                } else {
                  setType("password");
                }
              }}
              className="btn btn-primary rounded-sm"
            >
              {type === "password" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                  <path
                    fillRule="evenodd"
                    d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z"
                    clipRule="evenodd"
                  />
                  <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
                </svg>
              )}
            </button>
          </div>
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Type here"
            className="input input-bordered input-secondary w-full rounded-sm"
          />
          <button
            onClick={() => createAccount()}
            className="btn mt-10 rounded-sm text-lg normal-case comfortaa w-full btn-secondary shadow-md"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
