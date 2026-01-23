'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'ROBOTICS ENGINEER | EMBEDDED SYSTEMS | PCB DESIGNER'
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Dark background with heavy overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-0"></div>
      
      <div className="relative z-10 text-center px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Main Title */}
          <motion.h1
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white uppercase tracking-tighter leading-none"
          >
            ALAN YU
          </motion.h1>
          
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-sm md:text-base lg:text-lg text-secondary uppercase tracking-tight min-h-[1.5rem]"
          >
            {displayedText}
            {isTyping && (
              <span className="text-white animate-pulse">|</span>
            )}
          </motion.div>
          
          {/* Pill Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center pt-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ opacity: 0.8 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-6 py-3 border border-white/30 bg-black/50 font-display text-xs uppercase tracking-tight text-white hover:border-white/50 transition-all duration-200"
            >
              PROJECTS 項目
            </motion.a>
          </motion.div>
          
          {/* System Info Blocks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center pt-12 pb-8"
          >
            <div className="px-3 py-2 border border-white/10 bg-black/30 font-display text-[10px] uppercase tracking-tight text-secondary">
              <span className="status-flash">STATUS: ACTIVE</span>
            </div>
            <div className="px-3 py-2 border border-white/10 bg-black/30 font-display text-[10px] uppercase tracking-tight text-secondary">
              LOCATION: ATombots Lab
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

