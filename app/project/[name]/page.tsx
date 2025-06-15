import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from a database or CMS
const projects = {
  "ecommerce-platform": {
    title: "E-commerce Platform",
    description:
      "A comprehensive full-stack e-commerce solution built with modern technologies. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and admin dashboard.",
    longDescription: `This e-commerce platform represents a complete solution for online retail businesses. Built with Next.js and TypeScript for type safety and performance, it leverages PostgreSQL for robust data management and Stripe for secure payment processing.

Key features include:
- User authentication and authorization
- Product catalog with search and filtering
- Shopping cart and wishlist functionality
- Secure payment processing with Stripe
- Order tracking and management
- Admin dashboard for inventory management
- Responsive design for all devices
- SEO optimization for better visibility

The platform is designed with scalability in mind, using modern React patterns and optimized database queries to handle high traffic loads.`,
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Prisma"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
    date: "March 2024",
    client: "Personal Project",
    category: "Full-Stack Development",
  },
  "task-management-app": {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and intuitive project organization.",
    longDescription: `This task management application was designed to streamline team collaboration and project organization. Built with React and Node.js, it features real-time updates using Socket.io and a flexible MongoDB database structure.

The application includes:
- Real-time collaboration with live updates
- Project and task organization with drag-and-drop
- Team member management and permissions
- File attachments and comments
- Time tracking and reporting
- Mobile-responsive design
- Dark/light theme support
- Integration with popular tools

The real-time functionality ensures that team members always see the latest updates, making collaboration seamless and efficient.`,
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express.js", "JWT"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/task-management",
    date: "January 2024",
    client: "Startup Company",
    category: "Web Application",
  },
  // Add more projects as needed
}

interface PageProps {
  params: {
    name: string
  }
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects[params.name as keyof typeof projects]

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
