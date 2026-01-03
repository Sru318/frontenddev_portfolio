import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="relative w-full bg-black border-t border-white/10 py-6 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Left */}
          <p className="text-sm text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} Sruthy N.S. All rights reserved.
          </p>

          {/* Right */}
          <div className="flex gap-6">
            <a
              href="#hero"
              className="text-gray-400 hover:text-violet-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-violet-400 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-violet-400 transition-colors"
            >
              Contact
            </a>
          </div>

        </div>
      </footer>

    </div>
  )
}

export default Footer