import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Maximize2, Star } from 'lucide-react';

export default function Gallery() {
  const scrollRef = useRef(null);

  const galleryImages = [
    { id: 1, src: '/image1.jpg', title: 'Front View', tag: 'Exterior', rating: 5 },
    { id: 2, src: '/image2.jpg', title: 'Premium Room', tag: 'Interior', rating: 4.9 },
    { id: 3, src: '/image3.jpg', title: 'Dining Area', tag: 'Dining', rating: 5 },
    { id: 4, src: '/image4.jpg', title: 'Study Space', tag: 'Workspace', rating: 4.8 },
    { id: 5, src: '/image5.jpg', title: 'Washroom Facilities', tag: 'Modern', rating: 4.7 },
    { id: 6, src: '/image6.jpg', title: 'Lobby', tag: 'Reception', rating: 5 }
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
          className="flex overflow-x-auto snap-x snap-mandatory gap-8 px-6 md:px-12 pb-12 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing"
        >
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.21, 0.45, 0.32, 1] }}
              className="snap-center shrink-0 w-auto h-[45vh] min-h-[350px] md:h-[65vh] group relative rounded-[2.5rem] bg-white border border-neutral-100 shadow-2xl shadow-neutral-200/50 overflow-hidden"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="h-full w-auto object-contain block transition-transform duration-1000 group-hover:scale-105 select-none" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 md:p-10">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="bg-primary-500 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                        {img.tag}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                      <Star size={12} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-white text-xs font-bold">{img.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-white text-xl md:text-2xl font-medium tracking-wide mb-2">{img.title}</h3>
                  <div className="flex items-center gap-2 text-white/60 text-sm font-light">
                    <Maximize2 size={14} />
                    <span>View Detail</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="shrink-0 w-[10vw] md:w-[20vw] h-1" />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-4">
        <div className="flex items-center gap-4 text-neutral-400">
          <div className="h-[1px] flex-grow bg-neutral-200" />
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase whitespace-nowrap">
            Swipe to explore atmosphere
          </span>
          <div className="h-[1px] flex-grow bg-neutral-200" />
        </div>
      </div>
    </section>
  );
}