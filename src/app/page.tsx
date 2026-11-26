import Hero from "./components/Hero/Hero";
import Section1 from "./components/Section1/section1";
import Section2 from "./components/Section2/section2";
import Section6 from "./components/Section6/Section6";
import NewsLetter from "./components/Newsletter/newsletter";
export default async function Home() {
  await new Promise((r) => setTimeout(r, 1000));
  return (
    <>
      <Hero />
      <Section1 />
      <Section2 />

      <Section6 />
      <NewsLetter />
    </>
  );
}
