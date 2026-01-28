'use client'

import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  highlights: string[]
  media?: {
    type: 'image' | 'video'
    src: string
  }
  index: number
}

export default function ProjectCard({
  title,
  highlights,
  media,
  index,
}: ProjectCardProps) {
  // Get basePath for GitHub Pages deployment
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  
  // Helper function to get the correct image path
  const getImageSrc = (src: string) => {
    // If it's already a full URL (http/https), return as is
    if (src.startsWith('http://') || src.startsWith('https://')) {
      return src
    }
    // Otherwise, prepend basePath for production
    return basePath + src
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="border border-white/10 bg-black/30 p-6 hover:border-white/20 transition-all duration-200 overflow-hidden"
    >
      <h3 className="font-display text-lg md:text-xl font-bold text-white mb-4 uppercase tracking-tighter">
        {title.toUpperCase()}
      </h3>
      
      {media && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.1, duration: 0.5 }}
          className="mb-6"
        >
          {media.type === 'image' ? (
            <img
              src={getImageSrc(media.src)}
              alt={title}
              className="w-full h-auto rounded border border-white/10"
            />
          ) : (
            <div className="w-full aspect-video rounded border border-white/10 overflow-hidden">
              <iframe
                src={media.src}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
              />
            </div>
          )}
        </motion.div>
      )}
      
      <div className="space-y-3">
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
    </motion.div>
  )
}

