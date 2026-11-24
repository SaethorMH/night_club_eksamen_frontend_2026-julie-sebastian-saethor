"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { PiCallBell } from "react-icons/pi";
import { ReactNode } from "react";
import { LiaGlassCheersSolid } from "react-icons/lia";
const CornerShapeLeftTop = {
  backgroundColor: "var(--pink)",
 borderTopLeftRadius: "4rem",
 cornerTopLeftShape: "bevel",
} 

const CornerShapeRightBottom = {
  backgroundColor: "var(--pink)",
  borderBottomRightRadius: "4rem",
  cornerBottomRightShape: "bevel",
} 


function Hover({text,alt,src,icons,intro,reactIcons}:{text:string, alt:string, src:string,icons:string[],intro:string, reactIcons:ReactNode[]}) {
  return (
    <motion.div initial="initial" whileHover="hovering" className="relative overflow-hidden cursor-pointer ">
      <Image src={src} width={459} height={573} alt={alt} />
      <motion.div
        variants={{
          initial: { opacity: 0, y: 30 },
          hovering: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-(--black) border-y-2 border-border-header"
      >
        <div style={CornerShapeLeftTop} className=" size-10 rotate-180 "></div>
        <div style={CornerShapeRightBottom} className=" size-10 absolute bottom-0 right-0 rotate-180 "></div>

        {icons.map((icon) => (
          <Image key={icon} src={icon} width={50} height={50} alt="icon" className="mx-auto mt-5 border-2 border-border-header p-2 " />
        ))}
        {reactIcons.map((icon, react) => (
          <div key={react} className="mx-auto grid place-items-center size-[50] border-2 border-border-header">
            {icon}
          </div>
        ))}

        <h3 className="text-center">{intro}</h3>
        <p className="max-inline-sm text-center mt-5">{text}</p>
      </motion.div>
    </motion.div>
  );
  
}  
 export default function section1Homepage(){
   
   return (
     <article className="bg-[url('/assets/background_images/pattern_bg.jpg')] ">
       <section className=" flex justify-between gap-10 m-20 ">
         <Hover
           src="/assets/content/thumb1.jpg"
           alt="dinnertable"
           intro="Night club"
           text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by 
injected humour, or randomised words which dont look even slightly believable. "
           icons={["/assets/icons/favicon.png"]}
           reactIcons={[]}
         />

         <Hover
           src="/assets/content/reastaurant_1.jpg"
           alt="dinerhands"
           intro="Restaurant"
           text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by 
injected humour, or randomised words which dont look even slightly believable."
           icons={[]}
           reactIcons={[<PiCallBell />]}
         />
         <Hover
           src="/assets/content/thumb2.jpg"
           alt="club"
           intro="Bar"
           text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by 
injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarassing hidden in the middle of the text."
           icons={[]}
           reactIcons={[<LiaGlassCheersSolid />]}
         />
       </section>
     </article>
   );
   
   
   
 



 }




      
   
  

  
  
  


