import React from "react";
import '../assets/sidebar.css'
import { motion } from "motion/react"


class Sidebar extends React.Component {
  render() {
    const info = [
      { label: 'GitHub', url: 'https://github.com/DavidCazalCollados' },
      { label: 'LinkedIn', url: 'www.linkedin.com/in/david-cazal' },
      { label: 'Email', url: 'mailto:da.cazal95@gmail.com' },
      { label: 'Téléphone', url: 'tel:+14388892467' }
    ];
    return (
      <div className="leftnav">
        <motion.div
        className="scrolling-wrapper"
        animate={{ y: ['-100%', '200%'] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        >
          <div className="scrolling-text">
            {info.map((item, index) => (
                <a className="scroll-item" key={index} href={item.url} target="_blank" rel="noopener noreferrer">{item.label}</a>
            ))}
          </div>
        </motion.div>

        <motion.div
        className="scrolling-wrapper"
        animate={{ y: ['-100%', '200%'] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
          delay: 4,
        }}
        >
          <div className="scrolling-text">
            {info.map((item, index) => (
                <a className="scroll-item" key={index} href={item.url} target="_blank" rel="noopener noreferrer">{item.label}</a>
            ))}
          </div>
        </motion.div>
        {/* <motion.div
          className="scrolling-wrapper"
          animate={{ y: ['-100%', '100%'] }}
          transition={{
            duration: info.length,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="scrolling-text">
          {info.map((item, index) => (
            <span key={index} className="scroll-item">
              <a href={item.url} target="_blank" rel="noopener noreferrer">{item.label}</a>
            </span>
          ))}
          </div>

          <div className="scrolling-text">
          {info.map((item, index) => (
            <span key={index} className="scroll-item">
              <a href={item.url} target="_blank" rel="noopener noreferrer">{item.label}</a>
            </span>
          ))}
          </div>
        </motion.div> */}
      </div>
    )
  }
}

export default Sidebar;
