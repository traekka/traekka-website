import { Metadata } from "@/layouts/Metadata";
import { AppConfig } from "@/utils/AppConfig";

export default function Home() {
  return (
    <>
      <Metadata title={`${AppConfig.title} Presentation`} description={AppConfig.description} />
      <main>
        <h1 className="text-5xl font-bold">Hi you are on the test homepage</h1>
        <div className="text-xl">
          <p>Here is a base text for the homepage to test changes</p>
        </div>
      </main>
    </>
  );
}
