'use client'

import { motion } from 'framer-motion'

const skills = {
  hardware: [
    'Altium Designer',
    'KiCad',
    'PCB Design',
    'I2C/SPI/CAN Bus',
    'SoC Integration',
  ],
  firmware: [
    'C/C++',
    'Python',
    'ROS',
    'Verilog',
    'RTOS',
    'Code Composer Studio',
  ],
  tools: [
    'SolidWorks',
    'Fusion 360',
    'Git',
    'MATLAB',
    'Linux',
  ],
}

export default function TechnicalSkills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="relative py-16 md:py-20 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-white uppercase tracking-tighter"
        >
          TECHNICAL SKILL MATRIX
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {/* Hardware Column */}
          <motion.div
            variants={itemVariants}
            className="border border-white/10 bg-black/30 p-6 hover:border-white/20 transition-colors duration-200"
          >
            <h3 className="font-display text-sm font-bold text-white mb-6 uppercase tracking-tight">
              HARDWARE
            </h3>
            <ul className="space-y-3">
              {skills.hardware.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="text-secondary font-display text-xs uppercase tracking-tight flex items-center gap-2"
                >
                  <span className="text-white">—</span>
                  {skill.toUpperCase()}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Firmware/Software Column */}
          <motion.div
            variants={itemVariants}
            className="border border-white/10 bg-black/30 p-6 hover:border-white/20 transition-colors duration-200"
          >
            <h3 className="font-display text-sm font-bold text-white mb-6 uppercase tracking-tight">
              FIRMWARE/SOFTWARE
            </h3>
            <ul className="space-y-3">
              {skills.firmware.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="text-secondary font-display text-xs uppercase tracking-tight flex items-center gap-2"
                >
                  <span className="text-white">—</span>
                  {skill.toUpperCase()}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Tools Column */}
          <motion.div
            variants={itemVariants}
            className="border border-white/10 bg-black/30 p-6 hover:border-white/20 transition-colors duration-200"
          >
            <h3 className="font-display text-sm font-bold text-white mb-6 uppercase tracking-tight">
              TOOLS
            </h3>
            <ul className="space-y-3">
              {skills.tools.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="text-secondary font-display text-xs uppercase tracking-tight flex items-center gap-2"
                >
                  <span className="text-white">—</span>
                  {skill.toUpperCase()}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

