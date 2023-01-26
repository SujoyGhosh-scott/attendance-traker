import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import EntryCard from "../components/EntryCard";
import RespAlert from "../components/RespAlert";
import UpdateEntryModal from "../components/UpdateEntryModal";

const EditEntries = () => {
  const [data, setData] = useState([]);

  const [date, setDate] = useState(null);
  const [core11C, setCore11C] = useState(0);
  const [core11P, setCore11P] = useState(true);

  const [dse3ThC, setDse3ThC] = useState(0);
  const [dse3ThP, setDse3ThP] = useState(true);
  const [dse3PrC, setDse3PrC] = useState(0);
  const [dse3PrP, setDse3PrP] = useState(true);

  const [dse4ThC, setDse4ThC] = useState(0);
  const [dse4ThP, setDse4ThP] = useState(true);
  const [dse4PrC, setDse4PrC] = useState(0);
  const [dse4PrP, setDse4PrP] = useState(true);
  const [resp, setResp] = useState({
    type: null,
    message: "",
  });

  const router = useRouter();

  const updateModalData = (
    dt,
    c11C,
    c11P,
    d3TC,
    d3TP,
    d3PC,
    d3PP,
    d4TC,
    d4TP,
    d4PC,
    d4PP
  ) => {
    setDate(dt);
    setCore11C(c11C);
    setCore11P(c11P);

    setDse3ThC(d3TC);
    setDse3ThP(d3TP);
    setDse3PrC(d3PC);
    setDse3PrP(d3PP);

    setDse4ThC(d4TC);
    setDse4ThP(d4TP);
    setDse4PrC(d4PC);
    setDse4PrP(d4PP);
  };

  const updateEntry = () => {
    console.log("updating entry");
    let token = localStorage.getItem("at_token");

    const newData = {
      date,
      core11C,
      core11P,
      dse3ThC,
      dse3ThP,
      dse3PrC,
      dse3PrP,
      dse4ThC,
      dse4ThP,
      dse4PrC,
      dse4PrP,
    };
    console.log("new Data: ", newData);

    axios
      .post(
        "/api/update-entry",
        { date, updatedValue: newData },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log("updated entries: ", res.data);
        if (res.data.success) {
          setResp({
            type: "success",
            message: "Successfully updated",
          });
          setData(res.data.entries);
        } else {
          setResp({
            type: "error",
            message: res.data.message,
          });
        }
      })
      .catch((err) => {
        setResp({
          type: "error",
          message: err.message,
        });
      });
  };

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
        {/* resp alert */}
        {resp.type !== null && <RespAlert resp={resp} setResp={setResp} />}

        <br />
        {data.length > 0 ? (
          <div className="flex flex-wrap">
            {data.map((entry, i) => (
              <div
                style={{ boxShadow: "-6px 6px #F000B8" }}
                className="border-2 border-gray-800 p-3 mr-6 mb-4 w-48"
                key={i}
              >
                <EntryCard entry={entry} updateModalData={updateModalData} />
              </div>
            ))}
          </div>
        ) : (
          <p>No records entered yet</p>
        )}
      </main>

      {/* update entry modal */}
      <UpdateEntryModal
        date={date}
        core11C={core11C}
        setCore11C={setCore11C}
        core11P={core11P}
        setCore11P={setCore11P}
        dse3ThC={dse3ThC}
        setDse3ThC={setDse3ThC}
        dse3ThP={dse3ThP}
        setDse3ThP={setDse3ThP}
        dse3PrC={dse3PrC}
        setDse3PrC={setDse3PrC}
        dse3PrP={dse3PrP}
        setDse3PrP={setDse3PrP}
        dse4ThC={dse4ThC}
        setDse4ThC={setDse4ThC}
        dse4ThP={dse4ThP}
        setDse4ThP={setDse4ThP}
        dse4PrC={dse4PrC}
        setDse4PrC={setDse4PrC}
        dse4PrP={dse4PrP}
        setDse4PrP={setDse4PrP}
        updateEntry={updateEntry}
      />
    </div>
  );
};

export default EditEntries;
