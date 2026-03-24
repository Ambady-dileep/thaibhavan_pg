import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-neutral-50">
      {/* Premium Minimal Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary-100 rounded-full mix-blend-multiply opacity-30 filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary-50 rounded-full mix-blend-multiply opacity-50 filter blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col md:flex-row items-center gap-12">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full md:w-[55%] flex flex-col items-start text-left"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center py-1 px-3 rounded-full bg-primary-50 text-primary-900 border border-primary-100 text-xs font-medium tracking-wide">
              Ladies Homestay for CA College Students
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-[3.5rem] font-medium font-heading text-neutral-900 mb-6 leading-[1.15] tracking-tight">
            Elevated living for women at <span className="text-primary-600 block mt-2">Thaibhavan PG.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base md:text-lg text-neutral-500 mb-10 max-w-lg leading-relaxed font-light">
            Experience a secure, thoughtfully designed space that feels just like home. Minimalist aesthetics combined with premium comfort in Alappuzha.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center gap-5">
            <a
              href="#contact"
              className="px-7 py-3.5 bg-neutral-900 hover:bg-black text-white text-sm font-medium rounded-full transition-all flex items-center gap-2 transform hover:scale-105 shadow-md shadow-neutral-900/10"
            >
              Book a Visit <ChevronRight size={16} />
            </a>
            <a
              href="#gallery"
              className="px-7 py-3.5 bg-white border border-neutral-200 hover:border-neutral-300 text-neutral-800 text-sm font-medium rounded-full transition-all hover:bg-neutral-50"
            >
              View Gallery
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full md:w-[45%] relative rounded-[2rem] overflow-hidden shadow-2xl shadow-neutral-200/50 group"
        >
          <img 
            src="/hero.jpg" 
            alt="Thaibhavan PG" 
            className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

      </div>
    </section>
  );
}
