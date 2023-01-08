import React, { useEffect, useState } from "react";

import Head from "next/head";
import Header from "../components/Header";
import IndivisualCharts from "../components/IndivisualCharts";
import OverallChart from "../components/OverallChart";
import axios from "axios";
import AttendanceCards from "../components/AttendanceCards";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState("01-01-2023");
  const [core11C, setCore11C] = useState(0);
  const [core11A, setCore11A] = useState(0);

  const [dse3ThC, setDse3ThC] = useState(0);
  const [dse3ThA, setDse3ThA] = useState(0);
  const [dse3PrC, setDse3PrC] = useState(0);
  const [dse3PrA, setDse3PrA] = useState(0);

  const [dse4ThC, setDse4ThC] = useState(0);
  const [dse4ThA, setDse4ThA] = useState(0);
  const [dse4PrC, setDse4PrC] = useState(0);
  const [dse4PrA, setDse4PrA] = useState(0);

  useEffect(() => {
    //is there any token
    //verify the token,
    //if valid, get roll
    //  store roll in localstorage
    //if not redirect to the login page
    axios
      .post("/api/data", { roll: 102 })
      .then((res) => {
        console.log(res.data);
        const { data } = res.data.user;
        setCore11C(data.core11C);
        setCore11A(data.core11A);
        setDse3ThC(data.dse3ThC);
        setDse3ThA(data.dse3ThA);
        setDse3PrC(data.dse3PrC);
        setDse3PrA(data.dse3PrA);
        setDse4ThC(data.dse4ThC);
        setDse4ThA(data.dse4ThA);
        setDse4PrC(data.dse4PrC);
        setDse4PrA(data.dse4PrA);

        let nextDayOfLastUpdated = new Date(res.data.user.lastUpdated);
        nextDayOfLastUpdated.setDate(nextDayOfLastUpdated.getDate() + 1);
        setLastUpdated(nextDayOfLastUpdated);

        setLoading(false);
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div>
      <Head>
        <title>Attendance Tracker</title>
        <meta
          name="description"
          content="Attendance tracking website for students"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-[95vh] comfortaa">
        <Header />
        <div className="px-6 lg:px-72 xl:px-80">
          <h2 className="text-3xl  font-bold mt-8 mb-3 text-gray-600">
            Hi <span className="text-secondary">Sujoy</span>
          </h2>
          <p className="text-gray-700">
            Add both the days you were <strong>present</strong> and{" "}
            <strong>absent</strong> to get accurate percentage
          </p>
          <p className="text-gray-700">
            And please try to add the oldest record first, this helps generate
            the remaining attendance cards
          </p>
          {loading ? (
            <p className="text-gray-700">Loading cards...</p>
          ) : (
            <AttendanceCards lastUpdated={lastUpdated} />
          )}

          <p className="text-gray-700">Want to add previous attendance?</p>
          <p className="text-gray-700">
            Click{" "}
            <span className="text-primary font-semibold cursor-pointer">
              here
            </span>
          </p>
          <h2 className="text-3xl text-primary font-bold mt-6 mb-3">
            Your attendance percentage
          </h2>
          {loading ? (
            <div role="status">
              <svg
                className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <>
              <OverallChart
                totalClasses={[core11C, dse3ThC + dse3PrC, dse4ThC + dse4PrC]}
                attendedClasses={[
                  core11A,
                  dse3ThA + dse3PrA,
                  dse4ThA + dse4PrA,
                ]}
                totalCore11={core11C}
                attendedCore11={core11A}
                totalDse3={dse3ThC + dse3PrC}
                attendedDse3={dse3ThA + dse3PrA}
                totalDse4={dse4ThC + dse4PrC}
                attendedDse4={dse4ThA + dse4PrA}
                max={
                  Math.max(...[core11C, dse3ThC + dse3PrC, dse4ThC + dse4PrC]) +
                  10
                }
              />
              <IndivisualCharts
                core11C={core11C}
                core11A={core11A}
                dse3ThC={dse3ThC}
                dse3PrC={dse3PrC}
                dse3ThA={dse3ThA}
                dse3PrA={dse3PrA}
                dse4ThC={dse4ThC}
                dse4PrC={dse3PrC}
                dse4ThA={dse4ThA}
                dse4PrA={dse4PrA}
              />
            </>
          )}
        </div>
      </main>

      <footer className="mt-4 border-t border-opacity-10 text-center text-sm p-1 font-mono">
        Made by <span className="text-primary">@sujoy</span>
      </footer>
    </div>
  );
}
