"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
const MotionImage = motion.create(Image);

const HeroContent = () => {
  return (
    <section className="absolute z-10 top-[35%] right-[20%]   ">
      <MotionImage src="/assets/icons/Logo.svg" width={770} height={120} alt="logo" initial={{ rotateX: 80, opacity: 0, transformPerspective: 1000 }} animate={{ rotateX: 0, opacity: 1 }} transition={{ duration: 1, type: "tween" }} />

      <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeIn", delay: 1.5 }}>
        <h2 className="text-center  tracking-[1.7rem] mt-2">HAVE A GOOD TIME</h2>
        <Image src="/assets/bottom_line_slider/bottom_line.png" width={840} height={70} alt="logo"></Image>
      </motion.div>

      <button className="absolute z-10 top-full right-[35%] flex gap-5    ">
        <Link href="/events/" className="border-2  border-[#030202] border-opacity-30  p-3">
          View Events
        </Link>
        <motion.a href="/booktable/" initial={{ backgroundPosition: "100% 100%" }} whileHover={{ backgroundPosition: "0% 0%" }} transition={{ duration: 0.5, ease: "easeOut" }} style={{ backgroundSize: "300% 300%" }} className="p-3  border-white border-t-2  bg-linear-135 from-[#B822B5] to-[#F72A78]  ">
          Book table
        </motion.a>
      </button>
    </section>
  );
};

export default HeroContent;
