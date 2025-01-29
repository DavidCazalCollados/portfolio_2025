import React from 'react'
import { motion } from "framer-motion";
import "../../assets/draw.css"

export default function DessinComplet() {

  const pathData = [
    // {
    //   className: "boucle-gauche",
    //   path: "M15 7.9998V0.999797C6.5 -2.5 -1.49998 16.9999 1.99999 28.9999C5.49997 40.9999 19 40.4999 22 25.4998L17.5 23.9998C7.49998 46.4999 2.65159 10.4694 15 7.9998Z",
    //   width: "23",
    //   height: "38",
    //   viewBox: "0 0 23 38",
    // },
    // {
    //   className: "lunette-deux",
    //   path: "M65.0001 21C57.0001 21 0.500122 41.5 0.500122 41.5V44.5C0.500122 44.5 59.0001 25.5 65.0001 25.5C71.0001 25.5 85.0001 28.5 85.0001 28.5C85.0001 28.5 69.0001 120 144.5 120C203.5 120 209.5 56.5 209.5 56.5C224 50.5 247.5 57.0597 257 66C250.5 77 247 151 310.5 154.5C374 158 378 82.5 378 82.5C378 82.5 379 48.4999 324.5 38.5C270 28.5 258 63.5 258 63.5C242 51 221.5 49.5 209.5 54C209.5 54 212.5 17.9999 160 4.49997C107.5 -9 88.0001 22.5 88.0001 22.5C88.0001 22.5 73.0001 21 65.0001 21Z",
    //   width: "379",
    //   height: "156",
    //   viewBox: "0 0 379 156",
    // },
    // {
    //   className: "boucle-droite",
    //   path: "M19.4999 1L16.4999 5.5C29 15 16.4999 50 4.49988 28C3.34669 29.9635 1.49988 33 1.49988 33C21 58.5 36.5 14.5 19.4999 1Z",
    //   width: "28",
    //   height: "42",
    //   viewBox: "0 0 28 42",
    // }
    {
      className: "boucle-gauche",
      path: "M15 186V179C6.5 175.5 -1.49998 195 1.99999 207C5.49997 219 19 218.5 22 203.5L17.5 202C7.49998 224.5 2.65159 188.469 15 186Z",
    },
    {
      className: "lunette-deux",
      path: "M91.0001 21C83.0001 21 26.5001 41.5 26.5001 41.5V44.5C26.5001 44.5 85.0001 25.5 91.0001 25.5C97.0001 25.5 111 28.5 111 28.5C111 28.5 95.0001 120 170.5 120C229.5 120 235.5 56.5 235.5 56.5C250 50.5 273.5 57.0597 283 66C276.5 77 273 151 336.5 154.5C400 158 404 82.5 404 82.5C404 82.5 405 48.4999 350.5 38.5C296 28.5 284 63.5 284 63.5C268 51 247.5 49.5 235.5 54C235.5 54 238.5 17.9999 186 4.49997C133.5 -9 114 22.5 114 22.5C114 22.5 99.0001 21 91.0001 21Z",
    },
    {
      className: "boucle-droite",
      path: "M367.5 251L364.5 255.5C377 265 364.5 300 352.5 278C351.347 279.964 349.5 283 349.5 283C369 308.5 384.5 264.5 367.5 251Z",
    }
  ]

  return (
    <div>
      <svg
      className='draw-container'
        width="405"
        height="292"
        viewBox="0 0 405 292"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {pathData.map((item, index) => (
          <motion.path
            className={item.className}
            key={index}
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
        ))}
      </svg>
    </div>
  )
}
