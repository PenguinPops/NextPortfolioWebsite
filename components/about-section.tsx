export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that
                make a difference. I specialize in modern web technologies and love turning complex problems into
                simple, beautiful designs.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community. I believe in writing clean, maintainable code and
                creating user experiences that delight.
              </p>
              <p>
                I'm always excited to work on challenging projects and collaborate with teams that share my passion for
                innovation and excellence.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-purple-300">50+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-purple-300">5+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl">
                <img src="/placeholder.svg?height=320&width=320" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
