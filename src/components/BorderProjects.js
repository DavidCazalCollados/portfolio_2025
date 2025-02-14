import React from 'react';
import { motion } from "motion/react";
import "../assets/border_projects.css";

export default function BorderProjects() {
  return (
    <div className='border-projects'>
      <svg width="100%" height="100%" viewBox="0 0 1355 824" fill="none" xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="none">
        <motion.path
          d="M1350 1.00006H4.99998V815H1350V1.00006Z"
          stroke="#1E1E1E"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
              duration: 1.5,
              ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  )
}
