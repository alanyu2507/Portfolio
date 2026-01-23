'use client'

import { motion } from 'framer-motion'

export default function Navbar() {
  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EDUCATION', href: '#education' },
  ]

  return (
    <nav className="relative border-b border-white/10 py-6 px-8 md:px-12">
      <div className="flex items-center justify-between">
        <motion.div
          className="font-display text-sm font-bold text-white uppercase tracking-tighter"
          whileHover={{ opacity: 0.7 }}
          transition={{ duration: 0.2 }}
        >
          ALAN YU
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8 lg:gap-12 xl:gap-16">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="relative text-secondary hover:text-white font-display text-xs uppercase tracking-tight transition-colors duration-200"
              whileHover={{ opacity: 1 }}
            >
              {item.name}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-px bg-white"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white font-display text-xs uppercase tracking-tight hover:opacity-70 transition-opacity">
            MENU
          </button>
        </div>
      </div>
    </nav>
  )
}

