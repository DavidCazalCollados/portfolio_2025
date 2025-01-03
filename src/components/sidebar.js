import React from "react";
import '../assets/sidebar.css'
import { motion } from "motion/react"


class Sidebar extends React.Component {
  render() {
    const info = [
      { label: 'GitHub', url: 'https://github.com/DavidCazalCollados' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/david-cazal' },
      { label: 'Email', url: 'mailto:da.cazal95@gmail.com' },
      { label: 'Téléphone', url: 'tel:+14388892467' }
    ];
    return (
      <div className="leftnav">
        <ul>
          {info.map((item, index) => (
            <li>
              <a className="scroll-item" key={index} href={item.url} target="_blank" rel="noopener noreferrer">{item.label}</a>
            </li>
          ))}
        </ul>
        <ul aria-hidden="true">
          {info.map((item, index) => (
            <li>
              <a className="scroll-item" key={index} href={item.url} target="_blank" rel="noopener noreferrer">{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Sidebar;
