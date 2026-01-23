'use client'

import { ReactNode } from 'react'

interface BrowserWindowProps {
  children: ReactNode
  title?: string
  url?: string
}

export default function BrowserWindow({ 
  children, 
  title = 'ALAN YU',
  url = 'alan-yu.dev'
}: BrowserWindowProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4 md:p-8 bg-black">
      <div className="w-full max-w-[1600px] h-[95vh] sm:h-[90vh] max-h-[1000px] window-frame flex flex-col">
        {/* Title Bar */}
        <div className="flex items-center justify-between px-3 sm:px-4 h-7 sm:h-8 border-b border-white/20 bg-black/80 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            {/* Window Controls */}
            <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/60 border border-red-400/40"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/60 border border-yellow-400/40"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/60 border border-green-400/40"></div>
            </div>
            
            {/* URL Bar */}
            <div className="flex-1 flex items-center justify-center px-2 sm:px-4 min-w-0">
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-display text-secondary uppercase tracking-tight">
                <span className="opacity-50">●</span>
                <span className="truncate">{url}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Window Content with Grid Overlay */}
        <div className="flex-1 relative overflow-y-auto grid-overlay scanline">
          <div className="relative z-10 min-h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
