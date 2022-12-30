import Head from "next/head";

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

      <main>
        <p className="text-5xl font-bold text-primary comfortaa">Yo what up</p>
      </main>

      <footer className="border-t border-opacity-10 text-center text-sm p-1 font-mono">
        Made by <span className="text-primary">@sujoy</span>
      </footer>
    </div>
  );
}
