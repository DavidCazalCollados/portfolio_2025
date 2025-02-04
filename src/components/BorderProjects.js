import React from 'react';
import { motion } from "motion/react";
import "../assets/border_projects.css";

export default function BorderProjects() {
  return (
    <div className='border-projects'>
      <svg width="100%" height="100%" viewBox="0 0 1355 824" fill="none" xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="none">
        <motion.path
          d="M1337 1.00006H17.5C13 1.00006 4.99998 6.00003 4.99998 15.0001V802.5C4.99998 809.5 14 815 18.5 815H1337.5C1343.5 815 1350 807 1350 801V16.0001C1350 8.5 1343.5 1.00006 1337 1.00006Z"
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
