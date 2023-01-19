import axios from "axios";
import moment from "moment";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const EditEntries = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  const getData = (token) => {
    axios
      .post(
        "/api/get-entries",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        // console.log("edit entries: ", res.data);
        setData(res.data.entries);
      })
      .catch((err) => {
        console.error(err.message);
        localStorage.removeItem("at_token");
        router.push("/auth/login");
        return;
      });
  };

  useEffect(() => {
    let token = localStorage.getItem("at_token");

    //console.log(token);

    if (!token || token === "") {
      localStorage.removeItem("at_token");
      router.push("/auth/login");
      return;
    }

    getData(token);
  }, []);

  return (
    <div>
      <Head>
        <title>Attendance Tracker</title>
        <meta
          name="description"
          content="Edit previously added entries in the app"
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
        <h2 className="text-3xl font-bold mt-8 mb-4 text-secondary">
          Edit entries
        </h2>
        <p className="w-full xl:w-4/5">
          Edit previously added entries from here
        </p>
        <br />
        {data.length > 0 ? (
          <div className="flex flex-wrap">
            {data.map((entry, i) => (
              <div className="border-2 p-2 mr-4 mb-4" key={i}>
                <p className="text-sm">
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
              </div>
            ))}
          </div>
        ) : (
          <p>No records entered yet</p>
        )}
      </main>
    </div>
  );
};

export default EditEntries;
