import React from 'react'
import { motion } from "framer-motion";
import "../../assets/draw.css"

export default function DessinComplet() {

  const svgData = [
    {
      className: "boucle-gauche",
      path: "M15 7.9998V0.999797C6.5 -2.5 -1.49998 16.9999 1.99999 28.9999C5.49997 40.9999 19 40.4999 22 25.4998L17.5 23.9998C7.49998 46.4999 2.65159 10.4694 15 7.9998Z",
      width: "23",
      height: "38",
      viewBox: "0 0 23 38",
    },
    {
      className: "lunette-deux",
      path: "M65.0001 21C57.0001 21 0.500122 41.5 0.500122 41.5V44.5C0.500122 44.5 59.0001 25.5 65.0001 25.5C71.0001 25.5 85.0001 28.5 85.0001 28.5C85.0001 28.5 69.0001 120 144.5 120C203.5 120 209.5 56.5 209.5 56.5C224 50.5 247.5 57.0597 257 66C250.5 77 247 151 310.5 154.5C374 158 378 82.5 378 82.5C378 82.5 379 48.4999 324.5 38.5C270 28.5 258 63.5 258 63.5C242 51 221.5 49.5 209.5 54C209.5 54 212.5 17.9999 160 4.49997C107.5 -9 88.0001 22.5 88.0001 22.5C88.0001 22.5 73.0001 21 65.0001 21Z",
      width: "379",
      height: "156",
      viewBox: "0 0 379 156",
    },
    {
      className: "boucle-droite",
      path: "M19.4999 1L16.4999 5.5C29 15 16.4999 50 4.49988 28C3.34669 29.9635 1.49988 33 1.49988 33C21 58.5 36.5 14.5 19.4999 1Z",
      width: "28",
      height: "42",
      viewBox: "0 0 28 42",
    }
  ]

  return (
    <div className='draw-container'>
      {svgData.map((item, index) => (
        <motion.svg
          key={index}
          className={item.className}
          width={item.width}
          height={item.height}
          viewBox={item.viewBox}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            exit={{ opacity: 0, pathLength: 0 }}
            d={item.path}
            stroke="var(--font-color)"
            strokeWidth="1"
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />

        </motion.svg>
      ))}
      <svg>

      </svg>
    </div>
  )
}
