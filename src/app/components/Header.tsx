"use client"
import Link from "next/link";
import Logo from "./Logo"
import {motion} from "motion/react"
import Image from "next/image"
import { usePathname } from "next/navigation";
import { useState } from "react";
const MotionImage = motion.create(Image);

export default function Header(){
  const currentPath = usePathname();
  
return (
  <header className=" @container py-3 border-2  border-border-header ">
    <article className=" flex justify-evenly place-items-center m-auto gap-8 ">
      <Logo />

      <button popoverTarget="popover" className="@3xl:hidden ">
        ≡
      </button>
      <div id="popover" popover="auto" className="   bg-(--black) opacity-70 w-screen h-screen open:grid grid-cols-1 text-center gap-1">
        <button popoverTarget="popover" popoverTargetAction="hide" className="">
          X
        </button>

        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Events</Link>
        <Link href={"/"}>Book Table</Link>
        <Link href={"/"}>Contact us</Link>
      </div>

      <nav className=" hidden @3xl:flex justify-evenly place-items-center gap-10 uppercase  ">
        <div className="relative">
          <RollingLink href="/" aria-current={currentPath === "/" ? "page" : undefined}>
            Home
          </RollingLink>
          {currentPath === "/" && <MotionImage src="/assets/bottom_line_slider/bottom_line2.png" width={48} height={2} alt="slider" className="absolute mx-auto -bottom-2  " />}
        </div>

        <RollingLink href="/events" aria-current={currentPath.startsWith("/events") ? "page" : undefined}>
          Events
        </RollingLink>
        <RollingLink href="/booktable" aria-current={currentPath.startsWith("/booktable") ? "page" : undefined}>
          Book table
        </RollingLink>
        <RollingLink href="/contact" aria-current={currentPath.startsWith("/contact") ? "page" : undefined}>
          Contact us
        </RollingLink>
      </nav>
    </article>
  </header>
);

};



const RollingLink = ({ children, href }: { children: string; href: string  }) => {
const duration = 0.25;
const stagger = 0.025;

  return (
    <>
      <motion.a initial="initial" whileHover="hovering" href={href} className="relative block overflow-hidden whitespace-nowrap">
        <div>
          {children.split("").map((letter, index) => {
            return (
              <motion.span
                variants={{
                  initial: { y: 0 },
                  hovering: { y: "-100%", color: "var(--pink)" },
                }}
                transition={{
                  duration: duration,
                  ease: "easeInOut",
                  delay: stagger * index,
                }}
                className="inline-block"
                key={index}
              >
                {letter}
              </motion.span>
            );
          })}
        </div>

        <div className="absolute inset-0 ">
          {children.split("").map((letter, index) => {
            return (
              <motion.span
                variants={{
                  initial: { y: "100%" },
                  hovering: { y: 0, color: "var(--pink)" },
                }}
                transition={{
                  duration: duration,
                  ease: "easeInOut",
                  delay: stagger * index,
                }}
                className="inline-block"
                key={index}
              >
                {letter}
              </motion.span>
            );
          })}
        </div>
       </motion.a>
    </>
  );
  
  
  
};