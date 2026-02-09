'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

type ProjectMedia = {
  type: 'image' | 'video'
  src: string
}

type Project = {
  title: string
  highlights: string[]
  media?: ProjectMedia
}

const projects: Project[] = [
  {
    title: 'Multi-Modal Hexapod',
    highlights: [
      'Inverse kinematics implementation for 3-DOF legs',
      'Closed-loop feedback control for uneven terrain navigation and self-balancing',
      '50ms response latency for real-time control',
      'Modular attachment system for dynamic utility integration',
      'Optimized multi-threading and memory allocation to avoid CPU interrupts'
    ],
    media: {
      type: 'video' as const,
      src: 'https://www.youtube.com/embed/_bQvNhBsuP8',
    },
  },
  {
    title: 'Atombots Research',
    highlights: [
      'FreeRTOS implementation for task scheduling and prioritization',
      'CAN bus bit-packing optimization for response time under 50ms',
      'Hardware abstraction layer for easy integration between different hardware',
    ],
    media: {
      type: 'image' as const,
      src: '/images/Atombots.jpg',
    },
  },
  {
    title: 'SPARK Isolation PCB',
    highlights: [
      '20% footprint reduction compared to previous design',
      '100ms safety cutoff response time',
      'I2C communication with motherboard',
    ],
    media: {
      type: 'image' as const,
      src: '/images/Isolation.png',
    },
  },
  {
    title: 'Niffenegger Lab',
    highlights: [
      'Expanded Python-to-CAD laser alignment library from 2D to 3D',
      'Tested setup and validated alignment accuracy with 3D printed parts',
      'Developped custom rendering pipeline in Blender'
    ],
    media: {
      type: 'image' as const,
      src: '/images/mot.png',
    },
  },
  {
    title: 'Volleyball Serving Machine',
    highlights: [
      'Unified power distribution system',
      'Custom motor hub to dampen resonant frequencies',
      'Real-time Arduino speed control',
    ],
    media: {
      type: 'video' as const,
      src: 'https://www.youtube.com/embed/wHKCj8P0450',
    },
  },
]

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-16 md:py-20 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-white uppercase tracking-tighter"
        >
          FEATURED PROJECTS
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              highlights={project.highlights}
              media={project.media}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

