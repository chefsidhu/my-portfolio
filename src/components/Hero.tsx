'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="relative w-48 h-48 mx-auto mb-8">
            <Image
              src="/profile.jpg"
              alt="Abhijeet Sidhu"
              fill
              className="rounded-full object-cover shadow-xl"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Abhijeet Sidhu
          </h1>
          <p className="text-xl md:text-2xl text-slate-400">
            Software Engineer
          </p>
          <div className="text-slate-300 space-y-2">
            <p>San Francisco, CA</p>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
            >
              View Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 