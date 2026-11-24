import Hero from "./components/Hero/Hero";
import Section1 from "./components/Section1/section1";
export default async function Home() {
  await new Promise((r) => setTimeout(r, 1000));
  return (
    <>
      <Hero />
      <Section1 />
    </>
  );
}
