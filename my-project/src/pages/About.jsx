import { motion } from 'framer-motion';
import { fadeUp } from '/workspaces/personalPortfolio/my-project/src/components/animationsVariants.js';

export default function AboutSection() {
  return (

    <section id='about' className='relative min-h-screen bg-gradient-to-b from-[#1f0f3c] via-[#0d0d0d] to-black text-white px-6 py-24 sm:py-32'>
      <div className='mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>

        <motion.div
          variants={fadeUp}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
        >
          <h2 className='text-4xl sm:text-5xl font-extrabold mb-6 leading-tight'>
            intro change, needs something strong
          </h2>
          <p className='text-lg text-gray-300 mb-6'>
            testimonial replace
          </p>

          <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center'>
              <div className="border-l border-white/20 pl-4">
                <h3 className="text-2xl font-bold text-white">3+</h3>
                <p className="text-sm text-gray-400">Years Coding</p>
              </div>

              <div className="border-l border-white/20 pl-4">
                <h3 className="text-2xl font-bold text-white">12+</h3>
                <p className="text-sm text-gray-400">Projects Built</p>
              </div>

              <div className="border-l border-white/20 pl-4">
                <h3 className="text-2xl font-bold text-white">Replace</h3>
                <p className="text-sm text-gray-400">Replace</p>
              </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='flex justify-center md:justify-end'
        >
          <img
            src='/workspaces/personalPortfolio/my-project/src/assets/profile.jpg' // img
            alt='Kaiden'
            className='w-72 h-72 object-cover rounded-2xl shadow-lg border border-white/20'
          />
        </motion.div>
        

      </div>
    </section>
  );
}
