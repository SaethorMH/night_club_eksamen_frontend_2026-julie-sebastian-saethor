"use client"
import Image from "next/image"
import Link from "next/link";
import {motion} from "motion/react"
const MotionImage = motion.create(Image);
export default function Hero(){
    return (
      <>
        <article className="relative z-20">
          <Image src="/assets/background_images/header_bg_1.jpg" width={1920} height={900} alt="headerimage" className="object-cover "></Image>
          <section className="absolute z-10 top-[35%] right-[20%]   ">
            <MotionImage src="/assets/icons/Logo.svg" width={770} height={120} alt="logo" initial={{ rotateX: 80, opacity: 0, transformPerspective: 1000 }} animate={{ rotateX: 0, opacity: 1 }} transition={{ duration: 1, type: "tween" }} />

            <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeIn", delay: 1.5 }}>
              <h2 className="text-center tracking-[1.9rem] mt-2">HAVE A GOOD TIME</h2>
              <Image src="/assets/bottom_line_slider/bottom_line.png" width={840} height={70} alt="logo"></Image>
            </motion.div>

            <button className="absolute z-10 top-full right-[35%] flex gap-5  ">
              <Link href="/" className="border-2 p-2">
                View Events
              </Link>
              <Link href="/" className="border-2 p-2">
                Book table
              </Link>
            </button>
          </section>
        </article>
      </>
    );
}