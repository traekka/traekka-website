import { Metadata } from "@/layouts/Metadata";

export default function Home() {
  return (
    <>
      <Metadata
        title="Traekka Neuroscience Solutions Presentation"
        description="Traekka Neuroscience Solutions provides state of the art solutions for in-vivo electrophysiology research both in head-fixed and freely moving animals."
      />
      <main>
        <h1 className="text-5xl font-bold">Hi you are on the test homepage</h1>
        <div className="text-xl">
          <p>Here is a base text for the homepage to test changes</p>
        </div>
      </main>
    </>
  );
}
