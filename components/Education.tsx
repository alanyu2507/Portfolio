'use client'

import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="relative py-16 md:py-20 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-white uppercase tracking-tighter"
        >
          EDUCATION
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto border border-white/10 bg-black/30 p-8 hover:border-white/20 transition-colors duration-200"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 uppercase tracking-tighter">
                UNIVERSITY OF MICHIGAN
              </h3>
              <p className="text-secondary font-display text-sm uppercase tracking-tight mb-2">
                BSE IN ELECTRICAL ENGINEERING & ROBOTICS
              </p>
              <p className="text-secondary font-display text-xs uppercase tracking-tight">
                GPA: 4.0
              </p>
            </div>
            <div className="flex items-center px-4 py-2 border border-white/20 bg-black/50">
              <span className="text-white font-display text-xs font-bold uppercase tracking-tight">
                EXCELLENCE
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

