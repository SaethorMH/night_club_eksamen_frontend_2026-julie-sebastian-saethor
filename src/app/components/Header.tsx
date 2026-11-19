"use client"
import Link from "next/link";
import Logo from "./Logo"
import {motion,useReducedMotion} from "motion/react"
const MotionLink = motion.create(Link)
export default function Header(){
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
        <MotionLink href={"/"} whileHover={{ color: "var(--pink)", y:-2 }}   >
          Home
        </MotionLink>
        <MotionLink href={"/"} whileHover={{ color: "var(--pink)" }}>
          Events
        </MotionLink>
        <MotionLink href={"/"} whileHover={{ color: "var(--pink)" }}>
          Book Table
        </MotionLink>
        <MotionLink href={"/"} whileHover={{ color: "var(--pink)" }}>
          Contact us
        </MotionLink>
      </nav>
    </article>
  </header>
);

}