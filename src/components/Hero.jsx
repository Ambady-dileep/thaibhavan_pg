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
    <section id="home" className="relative min-h-[75vh] md:min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-neutral-50">
      {/* Dynamic Animated Background Elements */}
      <motion.div 
        animate={{ 
          x: [0, 30, 0], 
          y: [0, -40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary-100 rounded-full mix-blend-multiply opacity-20 filter blur-3xl pointer-events-none"
      />
      
      <motion.div 
        animate={{ 
          x: [0, -40, 0], 
          y: [0, 30, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-[-10%] left-[-5%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-primary-50 rounded-full mix-blend-multiply opacity-40 filter blur-3xl pointer-events-none"
      />

      {/* Floating Decorative Circles (Limited on mobile) */}
      {[...Array(window.innerWidth < 768 ? 3 : 5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            scale: 0,
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200
          }}
          animate={{ 
            opacity: 0.3,
            scale: 1,
            x: [null, Math.random() * 60 - 30, Math.random() * -60 + 30],
            y: [null, Math.random() * 80 - 40, Math.random() * -80 + 40],
          }}
          transition={{
            opacity: { duration: 1, delay: i * 0.2 },
            scale: { duration: 1, delay: i * 0.2 },
            x: { duration: 12 + i * 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            y: { duration: 14 + i * 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
          }}
          className={`absolute w-${i % 2 === 0 ? '12 md:16' : '8 md:10'} h-${i % 2 === 0 ? '12 md:16' : '8 md:10'} rounded-full blur-xl pointer-events-none ${
            i % 3 === 0 ? 'bg-primary-200' : i % 3 === 1 ? 'bg-indigo-100' : 'bg-neutral-200'
          } z-0`}
          style={{
            top: `${25 + i * 20}%`,
            left: `${15 + i * 25}%`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 md:px-12 relative z-10 w-full flex flex-col md:flex-row items-center gap-10 md:gap-12">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full md:w-[55%] flex flex-col items-start text-left"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4 md:mb-6">
            <span className="inline-flex items-center py-1 px-3 rounded-full bg-primary-50 text-primary-900 border border-primary-100 text-[10px] md:text-xs font-medium tracking-wide">
              Ladies Homestay for CA College Students
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-3xl md:text-[4rem] font-medium font-heading text-neutral-900 mb-6 md:mb-8 leading-[1.1] tracking-tight">
            Elevated living for women at <span className="text-primary-600 block mt-1 md:mt-2 relative">
              Thaibhavan PG Homestay
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-1 md:-bottom-2 left-0 h-0.5 md:h-1 bg-primary-100 rounded-full"
              />
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base md:text-xl text-neutral-500 mb-8 md:mb-12 max-w-lg leading-relaxed font-light">
            Experience a secure, thoughtfully designed space that feels just like home. Minimalist aesthetics combined with premium comfort in Alappuzha.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 md:gap-6">
            <a
              href="#contact"
              className="px-6 md:px-8 py-3.5 md:py-4 bg-neutral-900 hover:bg-black text-white text-xs md:text-sm font-semibold rounded-full transition-all flex items-center gap-2 transform hover:scale-105 shadow-xl shadow-neutral-900/10"
            >
              Book a Visit <ChevronRight size={16} className="md:w-[18px]" />
            </a>
            <a
              href="#gallery"
              className="px-6 md:px-8 py-3.5 md:py-4 bg-white border border-neutral-200 hover:border-neutral-300 text-neutral-800 text-xs md:text-sm font-semibold rounded-full transition-all hover:bg-neutral-50 shadow-sm"
            >
              View Gallery
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -10, 0] 
          }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.3 },
            scale: { duration: 0.8, delay: 0.3 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-full md:w-[45%] relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] group border border-white/50"
        >
          <img 
            src="/hero.jpg" 
            alt="Thaibhavan PG" 
            className="w-full h-auto block transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </motion.div>

      </div>
    </section>
  );
}
