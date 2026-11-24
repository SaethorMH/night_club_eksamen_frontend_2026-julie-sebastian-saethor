"use client"
import {motion} from "motion/react"
import { ReactNode } from "react";

const Hoverbackground = ({children}:{children:ReactNode}) =>{
  return (
    <motion.div initial="initial" whileHover="hovering" className="relative">
      {children}
      <motion.div
        variants={{
          initial: { opacity: 0, y: 30 },
          hovering: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-(--black)/50"
      ></motion.div>
    </motion.div>
  );
};
export default Hoverbackground;



