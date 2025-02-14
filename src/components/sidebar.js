import React from "react";
import '../assets/sidebar.css'
import { motion } from "motion/react"


class Sidebar extends React.Component {
  render() {
    const info = [
      { label: 'GITHUB', url: 'https://github.com/DavidCazalCollados' },
      { label: 'LINKEDIN', url: 'https://linkedin.com/in/david-cazal' },
      { label: 'EMAIL', url: 'mailto:da.cazal95@gmail.com' },
      { label: 'PHONE', url: 'tel:+14388892467' }
    ];
    return (
      <motion.div
        className="leftnav"
        initial={{ opacity: 0}}
        animate={{ opacity: 1  }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
      >
        <ul>
          {info.map((item, index) => (
            <li key={`first-list-${index}`}>
              <motion.a
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => console.log('hover started!')}
                className="scroll-item"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </motion.a>
            </li>
          ))}
        </ul>
        <ul aria-hidden="true">
          {info.map((item, index) => (
            <li key={`second-list-${index}`}>
              <motion.a
                whileHover={{ scale: 1.3  }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => console.log('hover started!')}
                className="scroll-item"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </motion.a>
            </li>
          ))}
        </ul>
      </motion.div>
    )
  }
}

export default Sidebar;
