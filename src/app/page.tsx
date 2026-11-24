import Hero from "./components/Hero";
import NightClubTrackSection from "./components/Section4";
export default async function Home() {
  await new Promise((r) => setTimeout(r, 1000));

  return (
    <>
      <Hero />
      <NightClubTrackSection />
    </>
  );
}
