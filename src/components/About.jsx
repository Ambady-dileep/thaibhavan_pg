import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-primary-600 text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-2 md:mb-3 block">The Experience</span>
            <h2 className="text-2xl md:text-4xl font-medium font-heading text-neutral-900 mb-6 md:mb-8 tracking-tight">A Sanctuary in Alappuzha</h2>
            
            <p className="text-sm md:text-base text-neutral-500 mb-5 md:mb-6 leading-relaxed font-light">
              Thaibhavan PG was established with a singular vision: to offer female CA college students a secure, serene, and exquisitely clean living environment. We've stripped away the unnecessary to focus on what truly matters—your peace of mind and absolute comfort.
            </p>
            <p className="text-sm md:text-base text-neutral-500 leading-relaxed font-light">
              Situated in a quiet neighborhood ideal for studying, our property encourages both focused work and relaxed downtime, providing a premium alternative to traditional hosteling for CA students.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
