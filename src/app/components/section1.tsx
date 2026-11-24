"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { PiCallBell } from "react-icons/pi";
import { ReactNode } from "react";
import { LiaGlassCheersSolid } from "react-icons/lia";
const CornerShapeLeftTop = {
  backgroundColor: "var(--pink)",
 borderTopLeftRadius: "5rem",
 cornerTopLeftShape: "bevel",
} 

const CornerShapeRightBottom = {
  backgroundColor: "var(--pink)",
  borderBottomRightRadius: "5rem",
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
        <motion.div
          variants={{
            initial: { x: -20, opacity: 0 },
            hovering: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.2 }}
        >
          <div style={CornerShapeLeftTop} className=" size-20 rotate-180 "></div>
        </motion.div>
        <motion.div
          className="absolute bottom-0 right-0"
          variants={{
            initial: { x: 20, opacity: 0 },
            hovering: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.2 }}
        >
          <div style={CornerShapeRightBottom} className=" size-20  rotate-180 "></div>
        </motion.div>
        <motion.div
          variants={{
            initial: { opacity: 0, scale: 0 },
            hovering: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {icons.map((icon) => (
            <Image key={icon} src={icon} width={70} height={70} alt="icon" className=" mx-auto mt-5 border-2 border-border-header p-5 " />
          ))}
        </motion.div>
        <motion.div
          variants={{
            initial: { opacity: 0, scale: 0 },
            hovering: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {reactIcons.map((icon, react) => (
            <div key={react}>{icon}</div>
          ))}
        </motion.div>
        <motion.div
          variants={{
            initial: { opacity: 0 },
            hovering: { opacity: 1 },
          }}
          transition={{ duration: 0.8, ease: "easeIn" }}
        >
          <h2 className="max-inline-sm text-center  mt-5">{intro}</h2>
        </motion.div>
        <motion.div
          variants={{
            initial: { x: 50, opacity: 0 },
            hovering: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.8, ease: "easeIn" }}
        >
          <p className="max-inline-lg text-center leading-9 mt-5">{text}</p>
        </motion.div>
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
        
         <Hover src="/assets/content/reastaurant_1.jpg" alt="dinerhands" intro="Restaurant" text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution." icons={[]} reactIcons={[<PiCallBell className="mx-auto border-2 border-border-header size-fit p-5 " />]} />
         <Hover src="/assets/content/thumb2.jpg" alt="club" intro="Bar" text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin." icons={[]} reactIcons={[<LiaGlassCheersSolid className="mx-auto border-2 border-border-header size-[70] p-5" />]} />
       </section>
     </article>
   );
   
   
   
 



 }




      
   
  

  
  
  


