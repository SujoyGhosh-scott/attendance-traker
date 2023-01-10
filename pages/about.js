import Link from "next/link";
import React from "react";
import ReviewModal from "../components/ReviewModal";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Attendance Tracker About</title>
        <meta
          name="description"
          content="Login page of Attendance Tracker, a website to keep track of attendance for students"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
      <main className="px-6 pb-6 comfortaa lg:px-72 xl:px-80">
        <h2 className="text-3xl font-bold mt-8 mb-4 text-secondary">About</h2>
        <p className="w-full xl:w-4/5">
          This is a website for students to keep track of their attendance
          percentage. The student has to log their attendance of different
          classes of every class day. If you&apos;re facing any issue while
          login, please drop a message to the creator from the review
          section(mentioning your contact details or mail), we will get back to
          you.
        </p>
        <br />
        <p className="w-full xl:w-4/5">
          If you&apos;re using the site for sometime please give a moment to
          drop a review, This will help us improve the application. And If you
          find this project helpful, starring the repo or maybe following me on
          gitHub would be appreciated.
        </p>

        <div className="mt-8 grid grid-cols-3">
          <div className="col-span-3 md:col-span-1 mt-3 md:mt-0">
            <label
              htmlFor="review-modal"
              className="btn btn-outline w-44 btn-warning normal-case rounded-sm mt-0"
            >
              Add Review
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 ml-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
            </label>
          </div>
          <div className="col-span-3 md:col-span-1 mt-3 md:mt-0">
            <Link
              target="_blank"
              href="https://github.com/SujoyGhosh-scott/attendance-traker"
              className="btn btn-primary btn-outline w-44 normal-case rounded-sm"
            >
              Source Code
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 ml-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </Link>
          </div>
          <div className="col-span-3 md:col-span-1 mt-3 md:mt-0">
            <Link
              target="_blank"
              href="https://github.com/SujoyGhosh-scott"
              className="btn btn-outline w-44 normal-case rounded-sm mt-0"
            >
              My GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                className="ml-4"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z" />
                  <path d="M14.333 19v-1.863c.025-.31-.018-.62-.126-.913a2.18 2.18 0 0 0-.5-.781c2.093-.227 4.293-1 4.293-4.544a3.48 3.48 0 0 0-1-2.434a3.211 3.211 0 0 0-.06-2.448s-.787-.227-2.607.961a9.152 9.152 0 0 0-4.666 0c-1.82-1.188-2.607-.96-2.607-.96A3.211 3.211 0 0 0 7 8.464a3.482 3.482 0 0 0-1 2.453c0 3.519 2.2 4.291 4.293 4.544a2.18 2.18 0 0 0-.496.773a2.134 2.134 0 0 0-.13.902V19" />
                  <path d="M9.667 17.702c-2 .631-3.667 0-4.667-1.948" />
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </main>
      {/* review modal */}
      <ReviewModal />
    </div>
  );
};

export default About;
