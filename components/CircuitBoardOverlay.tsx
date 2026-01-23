'use client'

export default function CircuitBoardOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-10 z-0">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#32CD32"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Circuit paths */}
        <path
          d="M 100 100 L 300 100 L 300 200 L 500 200 L 500 100 L 700 100"
          fill="none"
          stroke="#32CD32"
          strokeWidth="2"
          opacity="0.3"
        />
        <path
          d="M 200 300 L 400 300 L 400 400 L 600 400 L 600 500 L 800 500"
          fill="none"
          stroke="#00D1FF"
          strokeWidth="2"
          opacity="0.3"
        />
        <path
          d="M 150 500 L 350 500 L 350 600 L 550 600 L 550 700 L 750 700"
          fill="none"
          stroke="#32CD32"
          strokeWidth="2"
          opacity="0.3"
        />
        
        {/* Circuit nodes */}
        <circle cx="300" cy="100" r="4" fill="#32CD32" opacity="0.5" />
        <circle cx="500" cy="200" r="4" fill="#32CD32" opacity="0.5" />
        <circle cx="400" cy="300" r="4" fill="#00D1FF" opacity="0.5" />
        <circle cx="600" cy="400" r="4" fill="#00D1FF" opacity="0.5" />
        <circle cx="350" cy="500" r="4" fill="#32CD32" opacity="0.5" />
        <circle cx="550" cy="600" r="4" fill="#32CD32" opacity="0.5" />
      </svg>
    </div>
  )
}

