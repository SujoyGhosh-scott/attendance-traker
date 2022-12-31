import Head from "next/head";
import Header from "../components/Header";
import IndivisualCharts from "../components/IndivisualCharts";
import OverallChart from "../components/OverallChart";

export default function Home() {
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
          <p className="text-gray-700">Add today&apos;s attendance</p>
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
          <OverallChart />
          <IndivisualCharts />
        </div>
      </main>

      <footer className="border-t border-opacity-10 text-center text-sm p-1 font-mono">
        Made by <span className="text-primary">@sujoy</span>
      </footer>
    </div>
  );
}
