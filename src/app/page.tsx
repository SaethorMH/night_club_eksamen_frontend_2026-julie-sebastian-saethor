import Hero from "./components/Hero";
import Section1 from "./components/section1";
export default function Home() {
  await new Promise((r) => setTimeout(r, 1000));
   return (
     <>
       <Hero />
       <Section1 />
     </>
   );
   

}
