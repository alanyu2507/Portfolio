'use client'

import BrowserWindow from '@/components/BrowserWindow'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TechnicalSkills from '@/components/TechnicalSkills'
import FeaturedProjects from '@/components/FeaturedProjects'
import Education from '@/components/Education'

export default function Home() {
  return (
    <BrowserWindow>
      <div className="min-h-full">
        <Navbar />
        <Hero />
        <TechnicalSkills />
        <FeaturedProjects />
        <Education />
        
        {/* Footer */}
        <footer className="relative py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-secondary font-mono text-xs uppercase tracking-tight">
              © 2024 ALAN YU. BUILT WITH NEXT.JS & FRAMER MOTION.
            </p>
          </div>
        </footer>
      </div>
    </BrowserWindow>
  )
}

