"use client"
import { motion } from "motion/react";
import { ReactNode } from "react";

const animation= ({children}:{children: ReactNode}) =>{
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.5 }}>
      {children}
    </motion.div>
  );

}

export default animation;