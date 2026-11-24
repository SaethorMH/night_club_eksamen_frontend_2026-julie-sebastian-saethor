import Hero from "./components/Hero";
import Section1 from "./components/section1";
import Section2 from "./components/section2";

export default function Home() {
  await new Promise((r) => setTimeout(r, 1000));
   return (
     <>
       <Hero />
       <Section1 />
       <Section2 />
     </>
   );
   

}
