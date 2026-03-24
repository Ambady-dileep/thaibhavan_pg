import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-primary-600 text-xs font-semibold tracking-widest uppercase mb-3 block">The Experience</span>
            <h2 className="text-3xl md:text-4xl font-medium font-heading text-neutral-900 mb-8 tracking-tight">A Sanctuary in Alappuzha</h2>
            
            <p className="text-base text-neutral-500 mb-6 leading-loose font-light">
              Thaibhavan PG was established with a singular vision: to offer female CA college students a secure, serene, and exquisitely clean living environment. We've stripped away the unnecessary to focus on what truly matters—your peace of mind and absolute comfort.
            </p>
            <p className="text-base text-neutral-500 leading-loose font-light">
              Situated in a quiet neighborhood ideal for studying, our property encourages both focused work and relaxed downtime, providing a premium alternative to traditional hosteling for CA students.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
