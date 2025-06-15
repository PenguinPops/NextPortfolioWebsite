import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from a database or CMS
const projects = {
  "passapp": {
    title: "PassApp",
    description: "A secure password management application for personal use with encryption capabilities.",
    longDescription: `PassApp is an Electron-based desktop application designed to securely store and manage passwords using CryptoJS encryption. Developed as a personal project to explore secure credential storage solutions.

Key features include:
- AES-256 encryption for all stored passwords
- Local storage with no cloud dependencies
- Master password protection
- Password generator with customizable parameters
- Clean, intuitive user interface
- Cross-platform compatibility
- Offline functionality

The application was built with security as the primary focus, implementing best practices for password management and data encryption. The architecture ensures that even if the data store is compromised, the encrypted data remains protected.`,
    technologies: ["Electron", "CryptoJS", "JavaScript", "HTML/CSS"],
    images: [
      "/LOGO/Black_1024.png",
      "/Media/formatCprev.jpg", // Using a placeholder since no PassApp screenshot was provided
      "/LOGO/LogoMap_1024_3.png"
    ],
    liveUrl: undefined,
    githubUrl: "https://github.com/PenguinPops",
    date: "2024",
    client: "Personal Project",
    category: "Desktop Application",
  },
  "format-cpp": {
    title: "Format C++",
    description: "Desktop utility application for formatting C++ code with custom presets.",
    longDescription: `Format C++ is an Electron application developed to streamline my C++ development workflow by automating code formatting according to personal preferences and project requirements.

Features include:
- Custom formatting presets
- Batch processing of multiple files
- Integration with code editors
- Light/dark theme support
- Keyboard shortcuts for quick formatting
- Formatting history and undo functionality

The application saves significant time during code reviews and collaboration by maintaining consistent code style across projects. It's particularly useful for large codebases where manual formatting would be time-consuming.`,
    technologies: ["C++", "Electron", "JavaScript", "HTML/CSS"],
    images: [
      "/LOGO/PurpleW_1024.png",
      "/Media/formatCprev.jpg",
      "/LOGO/WhiteRed_1024.png"
    ],
    liveUrl: undefined,
    githubUrl: "https://github.com/PenguinPops/Format-C-UI-app",
    date: "2023",
    client: "Personal Project",
    category: "Developer Tools",
  },
  "pong-3d": {
    title: "Pong 3D",
    description: "A modern 3D reinterpretation of the classic Pong game with enhanced visuals.",
    longDescription: `This Unity-based project reimagines the classic Pong game with 3D graphics and modern gameplay elements while maintaining the simple, addictive nature of the original.

Game features:
- 3D rendering with dynamic lighting
- Customizable paddle and ball physics
- Multiple game modes (Classic, Timed, Endless)
- Particle effects for visual feedback
- Score tracking and high scores
- Responsive controls for both keyboard and gamepad

Developed as an exercise in Unity game development, this project demonstrates fundamental game programming concepts including collision detection, physics simulation, and game state management.`,
    technologies: ["C#", "Unity", "3D Modeling"],
    images: [
      "/LOGO/Black_1024.png",
      "/Media/pongprev.jpg",
      "/LOGO/WhiteRed_1024.png"
    ],
    liveUrl: "https://play.unity.com/mg/other/pong-3d-w",
    githubUrl: undefined,
    date: "2023",
    client: "Personal Project",
    category: "Game Development",
  },
  "perigord-media": {
    title: "Perigord Media",
    description: "Professional video editing services for short-form social media content.",
    longDescription: `Commissioned video editing work for Perigord Media, specializing in creating engaging short-form content for TikTok and other social platforms.

Services provided:
- Professional video editing and color grading
- Motion graphics and text animations
- Sound design and audio mixing
- Content optimization for platform algorithms
- Trend analysis and creative direction
- Brand-consistent content creation
- Rapid turnaround for time-sensitive content

This commercial work demonstrates expertise in DaVinci Resolve and understanding of social media content strategies, particularly for viral marketing and audience engagement.`,
    technologies: ["DaVinci Resolve", "Color Grading", "Motion Graphics", "Sound Design"],
    images: [
      "/Media/tiktok.png",
      "/Media/chem.gif",
      "/Media/podpis.png"
    ],
    liveUrl: "https://drive.google.com/drive/folders/1X9wXs7brJHFsO-k1zsy6P_AX0tW9cD00?usp=sharing",
    githubUrl: undefined,
    date: "2023",
    client: "Perigord Media",
    category: "Video Production",
  },
  "portfolio-website": {
    title: "Portfolio Website",
    description: "Custom-designed and coded personal portfolio website showcasing my work.",
    longDescription: `A fully custom portfolio website designed and developed from scratch to showcase my projects and skills. The site features modern animations and responsive design.

Technical highlights:
- Custom animated background using Canvas API
- Responsive layout for all device sizes
- Smooth scroll animations and transitions
- Interactive project showcases
- Optimized performance and SEO
- Contact form functionality
- Dark/light mode support

This project demonstrates comprehensive frontend development skills including HTML5, CSS3, JavaScript, and UI/UX design principles. The website serves as both a portfolio piece and a functional showcase for other work.`,
    technologies: ["HTML5", "CSS3", "JavaScript", "Canvas API", "UI/UX Design"],
    images: [
      "/LOGO/LogoMap_1024_3.png",
      "/Media/page.jpg",
      "/LOGO/WhiteRed_1024.png"
    ],
    liveUrl: "https://penguinpops.github.io/PortfolioWebsite/",
    githubUrl: "https://github.com/PenguinPops/PortfolioWebsite",
    date: "2023",
    client: "Personal Project",
    category: "Web Development",
  }
};

interface PageProps {
  params: {
    name: string
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const project = await projects[params.name as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <Link
            href="/#projects"
            className="inline-flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">{project.description}</p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Site
              </a>
            </Button>
            <Button variant="outline" asChild className="border-white/20 text-white hover:bg-white/10">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </Button>
          </div>

          {/* Project Meta */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-white">Date</span>
              </div>
              <span className="text-gray-300">{project.date}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="flex items-center space-x-2 mb-2">
                <User className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-white">Client</span>
              </div>
              <span className="text-gray-300">{project.client}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="flex items-center space-x-2 mb-2">
                <Tag className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-white">Category</span>
              </div>
              <span className="text-gray-300">{project.category}</span>
            </div>
          </div>
        </div>

        {/* Project Images */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="aspect-video overflow-hidden rounded-xl border border-white/20">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              {project.longDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4">Interested in Similar Work?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'd love to discuss your project and how we can work together to bring your ideas to life.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            <Link href="/#contact">Get In Touch</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
