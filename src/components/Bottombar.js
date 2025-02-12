import React from 'react'
import { motion } from "framer-motion";
import "../assets/bottom_bar.css"

export default function Bottombar() {
  return (
    <motion.div
      className='bottom-bar'
      initial={{ opacity: 0}}
      animate={{ opacity: 1  }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1.5 }}
    >

    </motion.div>
  )
}
