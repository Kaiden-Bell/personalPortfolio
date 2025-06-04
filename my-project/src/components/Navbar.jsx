import { motion } from 'framer-motion';


export default function Navbar() {
  return (
  <header className='absolute top-6 left-1/2 z-50 -translate-x-1/2 w-full max-w-5xl px-6'>
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
      className='your-navbar-classes'
    >
      {/* Navbar content */}
        <nav
          className='backdrop-blur-md bg-white/10 rounded-full border border-white/20 px-8 py-3 flex justify-between items-center shadow-md'
          >
          {/* Logo */}
          <div className='flex items-center gap-2'>
            <a href="/"><img src='' alt='Logo' className='h-6 w-6'/></a>
            <span className='text-white font-bold tracking-wide'></span>
          </div>

          {/* Centered Navigation */}
          <div className='flex gap-6 text-sm text-white font-medium'>
            <a href='/about' className='hover:text-indigo-400 transition'>About</a>
            <a href='/projects' className='hover:text-indigo-400 transition'>Projects</a>
            <a href='/contact' className='hover:text-indigo-400 transition'>Contact</a>
          </div>
        </nav>
      </motion.nav>
    </header>
  );
}
