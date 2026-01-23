'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectCardProps {
  title: string
  highlights: string[]
  bom: string[]
  schematicLink?: string
  cadLink?: string
  schematicLabel?: string
  cadLabel?: string
  index: number
}

export default function ProjectCard({
  title,
  highlights,
  bom,
  schematicLink,
  cadLink,
  schematicLabel = 'VIEW SCHEMATIC',
  cadLabel = 'VIEW CAD',
  index,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="border border-white/10 bg-black/30 p-6 hover:border-white/20 transition-all duration-200 overflow-hidden"
    >
      <h3 className="font-display text-lg md:text-xl font-bold text-white mb-6 uppercase tracking-tighter">
        {title.toUpperCase()}
      </h3>
      
      <div className="space-y-3 mb-6">
        {highlights.map((highlight, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + idx * 0.05 }}
            className="text-secondary font-display text-xs uppercase tracking-tight flex items-start gap-2"
          >
            <span className="text-white mt-1">—</span>
            <span>{highlight.toUpperCase()}</span>
          </motion.div>
        ))}
      </div>
      
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-3 px-4 border border-white/20 bg-black/50 font-display text-xs uppercase tracking-tight text-white hover:border-white/30 hover:bg-black/70 transition-all duration-200 flex items-center justify-between"
        whileHover={{ opacity: 0.9 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>TECHNICAL SPECS</span>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-xs"
        >
          ▼
        </motion.span>
      </motion.button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="font-display text-xs font-bold text-white mb-4 uppercase tracking-tight">
                BILL OF MATERIALS
              </h4>
              <ul className="space-y-2 mb-6">
                {bom.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-secondary font-display text-[10px] uppercase tracking-tight flex items-center gap-2"
                  >
                    <span className="text-white">•</span>
                    {item.toUpperCase()}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-3">
                {schematicLink && (
                  <a
                    href={schematicLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 border border-white/20 bg-black/50 font-display text-[10px] uppercase tracking-tight text-white hover:border-white/30 hover:bg-black/70 transition-all duration-200"
                  >
                    {schematicLabel}
                  </a>
                )}
                {cadLink && (
                  <a
                    href={cadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 border border-white/20 bg-black/50 font-display text-[10px] uppercase tracking-tight text-white hover:border-white/30 hover:bg-black/70 transition-all duration-200"
                  >
                    {cadLabel}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

