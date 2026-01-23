'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Multi-Modal Hexapod',
    highlights: [
      'Inverse kinematics implementation for 3-DOF legs',
      'Closed-loop feedback control for uneven terrain navigation and self-balancing',
      '50ms response latency for real-time control',
    ],
    bom: [
      'RPI 4',
      'RP2040 Servo Controller',
      'MG996R Servo Motors',
      'PS4 Controller'
    ],
    schematicLink: 'https://github.com/hans-vador/SpiderBot',
    cadLink: 'https://www.youtube.com/watch?v=_bQvNhBsuP8',
    schematicLabel: 'VIEW CODE',
    cadLabel: 'VIEW DEMO',
  },
  {
    title: 'Atombots Research',
    highlights: [
      '1kHz telemetry loop for real-time data acquisition',
      'CAN bus bit-packing optimization for Wheeled Quarduped',
    ],
    bom: [
      'GIM6010-8 Motor',
      'RPI 4',
      'RS485 CAN HAT',
      'NVIDIA Jetson',
    ],
    schematicLink: '#',
    cadLink: '#',
  },
  {
    title: 'SPARK Isolation PCB',
    highlights: [
      '20% footprint reduction compared to previous design',
      '100ms safety cutoff response time',
      'Advanced isolation circuitry for high-voltage applications',
    ],
    bom: [
    ],
    schematicLink: '#',
    cadLink: '#',
  },
  {
    title: 'Volleyball Serving Machine',
    highlights: [
      'Unified power distribution system',
      'Custom motor hub to dampen resonant frequencies',
      'Real-time Arduino speed control',
    ],
    bom: [
      '20,000 RPM DC Motors',
      'Arduino Uno',
      '12V Adapter',
      '30A Dual-Channel H-Bridge',
      'T Slot Aluminum Extrusion',
    ],
    schematicLink: 'https://youtu.be/wHKCj8P0450',
    schematicLabel: 'VIEW DEMO',
  },
  {
    title: 'Niffenegger Lab',
    highlights: [
      'Contributed to Python-to-CAD 3D laser alignment library',
      'Developped custom rendering pipelin in Blender'
    ],
    bom: [
    ],
    schematicLink: '#',
    cadLink: '#',
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
              bom={project.bom}
              schematicLink={project.schematicLink}
              cadLink={project.cadLink}
              schematicLabel={project.schematicLabel}
              cadLabel={project.cadLabel}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

