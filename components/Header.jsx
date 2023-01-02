import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="px-6 lg:px-72 xl:px-80 navbar bg-base-100 flex items-center justify-end">
      <div className="tooltip tooltip-bottom" data-tip="About">
        <Link href="/about" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </Link>
      </div>
      <div className="tooltip tooltip-bottom" data-tip="Logout">
        <label htmlFor="my-modal-6" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </label>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-semibold text-lg">
            Are you sure you want to logut?
          </h3>
          <div className="modal-action">
            <label
              htmlFor="my-modal-6"
              className="btn btn-info normal-case mr-4 rounded-sm"
            >
              Cancel
            </label>
            <label
              htmlFor="my-modal-6"
              className="btn btn-error normal-case rounded-sm"
            >
              Logout
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
