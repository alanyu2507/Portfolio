# Personal Portfolio V3 - Alan Yu

A professional, responsive personal portfolio built with Next.js, Tailwind CSS, and Framer Motion, featuring an Electrical Engineering and Robotics theme.

## Features

- **Modern Design**: Deep Obsidian background with Cyber Lime and Voltage Blue accents
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations with staggered fade-in effects
- **Interactive Components**: Expandable project cards with technical specs
- **Typing Effect**: Animated typing effect in the hero section
- **Circuit Board Overlay**: Subtle SVG circuit board pattern background

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Google Fonts** - Inter (body) and JetBrains Mono (headings)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── CircuitBoardOverlay.tsx  # Background circuit board SVG
│   ├── Navbar.tsx           # Navigation bar component
│   ├── Hero.tsx             # Hero section with typing effect
│   ├── TechnicalSkills.tsx  # Three-column skill matrix
│   ├── ProjectCard.tsx      # Expandable project card component
│   ├── FeaturedProjects.tsx # Projects section container
│   └── Education.tsx        # Education section
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:
- `obsidian`: #0A0A0A
- `cyber-lime`: #32CD32
- `voltage-blue`: #00D1FF

### Projects
Edit the `projects` array in `components/FeaturedProjects.tsx` to add or modify projects.

### Skills
Edit the `skills` object in `components/TechnicalSkills.tsx` to update your skills.

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

