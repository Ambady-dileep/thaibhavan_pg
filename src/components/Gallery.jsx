import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Gallery() {
  const scrollRef = useRef(null);

  // Strictly image paths only - no titles, tags, or ratings to ensure zero hover text
  const images = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
    '/image5.jpg',
    '/image6.jpg'
  ];

  return (
    <section id="gallery" className="py-24 bg-neutral-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-600 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Property Tour</span>
            <h2 className="text-4xl md:text-5xl font-medium font-heading text-neutral-900 tracking-tight">Curated Gallery</h2>
            <p className="text-neutral-500 mt-4 max-w-xl mx-auto text-base font-light leading-relaxed">
              Explore our premium living spaces. Each image shows the actual high-standard accommodation we provide for CA aspirants.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 pb-20 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing"
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20,
                delay: idx * 0.05 
              }}
              className="snap-center shrink-0 w-auto h-auto group relative rounded-[2rem] bg-white border border-neutral-200 shadow-2xl shadow-neutral-200/60 overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={src} 
                  alt="" // Empty alt to prevent browser tooltips
                  className="max-h-[60vh] max-w-[85vw] md:max-h-[70vh] md:max-w-[70vw] w-auto h-auto block transition-transform duration-700 group-hover:scale-[1.03] select-none pointer-events-none" 
                />
                
                {/* Minimal Overlay (Removed all text and rating elements) */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
          <div className="shrink-0 w-[5vw] md:w-[15vw] h-1" />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 text-neutral-300">
          <div className="h-[1px] flex-grow bg-neutral-200" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-medium tracking-[0.4em] uppercase whitespace-nowrap text-neutral-400">
              One Swipe to Explore
            </span>
            <div className="flex gap-1">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-1 h-1 rounded-full bg-neutral-200" />
              ))}
            </div>
          </div>
          <div className="h-[1px] flex-grow bg-neutral-200" />
        </div>
      </div>
    </section>
  );
}