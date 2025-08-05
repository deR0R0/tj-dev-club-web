import { Github, GraduationCap, Hammer, Trophy, Users } from 'lucide-react';
import './App.css'
import confetti from 'canvas-confetti'

const officers = [
  {
    name: 'Eric Guo',
    role: 'Team Lead',
    imageUrl: 'officers/eric.jpg',
    githubUrl: 'https://github.com/BaconErie',
  },
  {
    name: 'Aarush Chaurasis',
    role: 'Frontend Lead',
    imageUrl: 'officers/aarush.jpg',
    githubUrl: 'https://github.com/aarushtools',
  },
  {
    name: 'Bryce Conrad',
    role: 'Backend Lead',
    imageUrl: 'officers/bryce.jpg',
    githubUrl: 'https://github.com/' + 'makors',
  },
  {
    name: 'Sroshsafa Shirzay',
    role: 'Standalone Apps Lead',
    imageUrl: 'officers/srosh.jpg',
    githubUrl: 'https://github.com/sroshc',
  },
  {
    name: 'Hridhaan Banerjee',
    role: 'Treasurer and Event Coordinator',
    imageUrl: 'officers/hridhaan.jpg',
    githubUrl: 'https://github.com/HridhaanB',
  },
  {
    name: 'Shaun Saladi',
    role: 'Low-Level Programming Specialist',
    imageUrl: 'https://avatars.githubusercontent.com/u/1024025',
    githubUrl: 'https://github.com/shaun208',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-white font-['Inter']" id="root">
      <header className="z-50 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <img src="logo.svg" alt="logo" className="h-12 w-auto transition-transform hover:scale-105" />
            <h1 className="text-2xl font-bold pl-2">TJHSST Dev Club</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="relative text-white/80 hover:text-white transition-colors duration-200 font-medium group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white/60 group-hover:w-full transition-all duration-200 ease-out"></span>
            </a>
            <a
              href="#officers"
              className="relative text-white/80 hover:text-white transition-colors duration-200 font-medium group"
            >
              Officers
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white/60 group-hover:w-full transition-all duration-200 ease-out"></span>
            </a>
            <a
              href="https://discord.gg/j4A8pDje"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-white/80 hover:text-white transition-colors duration-200 font-medium group flex items-center gap-1"
            >
              Discord
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white/60 group-hover:w-full transition-all duration-200 ease-out"></span>
            </a>
            <a
              href="https://ion.tjhsst.edu/eighth/activity/12"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-white hover:text-white transition-colors duration-200 font-bold group flex items-center gap-1"
            >
              Sign up
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white/60 group-hover:w-full transition-all duration-200 ease-out"></span>
            </a>
          </nav>
        </div>
      </header>
      <main>
        {/* hero content */}
        <div className="flex items-center h-[80vh] max-w-screen-xl mx-auto px-8 gap-x-12 mb-12 md:mb-0">
          <div className="flex-1">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Code. Create. Collaborate.
              </h1>
              <p className="text-xl text-white/70 max-w-lg">
                Join TJHSST's premier web development community where students learn, build, and innovate together.
              </p>
              <div>
                <a
                  href="https://ion.tjhsst.edu/eighth/activity/12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 hover:border-white/30 transition-all duration-200 backdrop-blur-sm"
                >
                  Join Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-white/10 text-white/80 hover:text-white font-medium rounded-lg border border-white/20 hover:border-white/30 transition-all duration-200 backdrop-blur-sm ml-4"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* right side of hero content, the interactive console */}
          <div className="flex-1 hidden lg:flex justify-end items-center">
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-2xl border border-white/10 w-96 max-w-full">
              <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 rounded-t-lg border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-white/60 text-sm font-medium">welcome.js</div>
                <div className="w-12"></div>
              </div>

              <div className="p-4 font-mono text-sm">
                <div className="text-purple-400">function <span className="text-blue-400">joinDevClub</span>() {"{"}</div>
                <div className="ml-4 text-white/80">console.log(<span className="text-green-400">welcomeMessage</span>);</div>
                <div className="ml-4 text-white/80">surprise();</div>
                <div className="text-purple-400">{"}"}</div>
              </div>

              {/* interactive console, which really should only be available on computer */}
              <div className="p-4 font-mono text-sm bg-black/30">
                <div className="text-green-400 mb-2">$ node welcome.js</div>
                <div className="text-white/80 mb-1">Dev Club Interactive Console v1.0.0</div>
                <hr className="mb-2 border-white/10" />
                <div className="text-white/80 mb-1 hidden" id="welcome-message">
                  <div className="font-semibold">Welcome to Dev Club! 🎉</div>
                  <div>
                    - <a href="https://discord.gg/j4A8pDje" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Join the Discord!</a>
                  </div>
                  <div>
                    - <a href="https://ion.tjhsst.edu/eighth/activity/12" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Sign up on Wednesday 8B!</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">&gt;</span>
                  <input
                    type="text"
                    className="bg-transparent text-white outline-none flex-1 font-mono"
                    placeholder="Type joinDevClub() and press Enter..."
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && e.currentTarget.value.trim() === 'joinDevClub()') {
                        confetti({
                          particleCount: 150,
                          spread: 70,
                          origin: { y: 0.6 }
                        });
                        document.getElementById('welcome-message')?.classList.remove('hidden');
                        e.currentTarget.value = '';
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about content */}
        <div id="about" className="py-12 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-400">About Our Club</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Learn, build, and connect
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                We're a web development club at TJ that meets Wednesdays 8B to learn and build together. Whether you're a beginner or experienced developer, our supportive community will help you grow your skills.
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-2xl lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    Learn from peers
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-400">Master modern web technologies like React, Node.js, and TypeScript. We cover everything from the fundamentals of web development to advanced topics.</dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                      <Hammer className="h-6 w-6 text-white" />
                    </div>
                    Build impressive projects
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-400">Apply your skills to create real-world applications. Participate in hackathons, contribute to open-source, and build a portfolio that stands out.</dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                      <Trophy className="h-6 w-6 text-white" />
                    </div>
                    Friendly Competitions
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-400">We regularly host fun competitions like Kahoots and design contests where you can test your skills and win prizes.</dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    Vibrant Community
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-400">Join a vibrant network of student developers. Collaborate on projects, share your knowledge, and grow together with peers who share your passion.</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        {/* officers content */}
        <div id="officers" className="py-12 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-400">Our Team</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Meet The Officers</p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Dev Club is led by a dedicated team of student developers who are passionate about sharing their knowledge and fostering a vibrant community.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              {officers.map((officer) => (
                <li key={officer.name} className="flex flex-col items-center text-center">
                  <img className="size-40 rounded-lg object-cover" src={officer.imageUrl} alt={`Profile of ${officer.name}`} />
                  <h3 className="mt-4 text-lg font-semibold leading-7 tracking-tight text-white">
                    {officer.name}
                  </h3>
                  <p className="text-sm leading-6 text-blue-400">{officer.role}</p>
                  <a
                    href={officer.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-4 inline-flex items-center gap-x-2 text-sm font-medium text-gray-400 hover:text-white"
                  >
                    <Github className="h-5 w-5 text-gray-500 group-hover:text-white" />
                    GitHub
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900/40 border-t border-white/10">
        <div className="max-w-screen-xl mx-auto px-6 py-8 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <img src="logo.svg" alt="TJHSST Dev Club" className="h-10 w-auto" />
                <span className="ml-3 text-xl font-semibold text-white">TJHSST Dev Club</span>
              </div>
              <p className="text-sm text-gray-400">
                TJHSST's premier web development community where students learn, build, and innovate together.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-semibold leading-6 text-white">Navigate</h3>
                  <ul role="list" className="mt-3 space-y-2">
                    <li>
                      <a href="#about" className="text-sm leading-6 text-gray-300 hover:text-white">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#officers" className="text-sm leading-6 text-gray-300 hover:text-white">
                        Officers
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-base font-semibold leading-6 text-white">Get Involved</h3>
                  <ul role="list" className="mt-3 space-y-2">
                    <li>
                      <a href="https://ion.tjhsst.edu/eighth/activity/12" target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-gray-300 hover:text-white">
                        Sign up
                      </a>
                    </li>
                    <li>
                      <a href="https://discord.gg/j4A8pDje" target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-gray-300 hover:text-white">
                        Discord
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-1 md:gap-8">
                <div>
                  <h3 className="text-base font-semibold leading-6 text-white">Resources</h3>
                  <ul role="list" className="mt-3 space-y-2">
                    <li>
                      <a href="https://github.com/tjdevclub" target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-gray-300 hover:text-white">
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 sm:mt-16">
            <p className="text-sm leading-5 text-gray-400">&copy; {new Date().getFullYear()} TJHSST Dev Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App