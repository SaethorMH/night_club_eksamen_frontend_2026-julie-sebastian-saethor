import Hero from "./components/Hero/Hero";
import Section1 from "./components/Section1/section1";
import Section2 from "./components/Section2/section2";
export default async function Home() {
  await new Promise((r) => setTimeout(r, 1000));
  return (
    <>
      <Hero />
      <Section1 />
      <Section2 />
    </>
  );
}
