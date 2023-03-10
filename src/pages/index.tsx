import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-5xl font-bold">Hi you are on the test homepage</h1>
        <div className="text-xl">
          <p>Here is a base text for the homepage to test changes</p>
        </div>
      </main>
    </>
  );
}
