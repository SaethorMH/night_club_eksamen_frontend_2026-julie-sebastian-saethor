import Image from "next/image";
import HeroContent from "./HeroContent";
import Animation from "./HeroAnimation"
export function rNumber(rMax: number) {
  return Math.ceil(Math.random() * rMax);
}
const rImage = rNumber(2);
export default function Hero() {
  return (
    <>
      <article className="relative -order-1">
        <Animation>
          <Image src={`/assets/background_images/header_bg_` + rImage + `.jpg`} width={1920} height={900} alt="headerimage" />
        </Animation> 

        <HeroContent />
      </article>
    </>
  );
}
