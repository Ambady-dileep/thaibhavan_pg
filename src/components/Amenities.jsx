import { motion } from 'framer-motion';
import { Wifi, Utensils, Shield, Droplet, Armchair, Zap } from 'lucide-react';

export default function Amenities() {
  const items = [
    { icon: <Wifi size={24} className="text-blue-500" />, title: 'High-speed Wi-Fi', desc: 'Seamless connectivity for work.' },
    { icon: <Utensils size={24} className="text-orange-500" />, title: 'Premium Dining', desc: 'Nutritious chef-crafted meals.' },
    { icon: <Shield size={24} className="text-emerald-500" />, title: '24/7 Security', desc: 'Comprehensive CCTV coverage.' },
    { icon: <Droplet size={24} className="text-cyan-500" />, title: 'Purified Water', desc: 'Continuous RO water supply.' },
    { icon: <Armchair size={24} className="text-rose-500" />, title: 'Curated Spaces', desc: 'Ergonomic & minimal furnishings.' },
    { icon: <Zap size={24} className="text-amber-500" />, title: 'Power Backup', desc: 'Uninterrupted power systems.' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section id="amenities" className="py-24 bg-white border-t border-neutral-100">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-medium font-heading text-neutral-900 tracking-tight">Thoughtful Amenities</h2>
          <p className="text-neutral-500 mt-4 text-sm font-light">Crafted for maximum comfort and minimum friction.</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-5xl mx-auto"
        >
          {items.map((item, idx) => (
            <motion.div key={idx} variants={itemAnim} className="flex gap-5 group cursor-default p-2 -m-2 rounded-2xl hover:bg-neutral-50 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-neutral-100 shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-neutral-900 mb-1 tracking-tight">{item.title}</h3>
                <p className="text-sm font-light text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
