import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="px-6 comfortaa lg:px-72 xl:px-80 navbar bg-base-100 flex items-center">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>

          <p className="font-bold text-lg ml-3 text-primary">Home</p>
        </Link>
      </div>
      <main className="px-6 comfortaa lg:px-72 xl:px-80">
        <h2 className="text-3xl font-bold mt-8 mb-4 text-secondary">About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </main>
    </div>
  );
};

export default About;
