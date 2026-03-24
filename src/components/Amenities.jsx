import { motion } from 'framer-motion';
import { Wifi, Utensils, Shield, Droplet, Armchair, Zap } from 'lucide-react';

export default function Amenities() {
  const items = [
    { 
      icon: <Wifi size={28} />, 
      title: 'High-speed Wi-Fi', 
      desc: 'Seamless connectivity for academic research and staying connected with family.',
      color: 'from-blue-500/20 to-indigo-500/20',
      textColor: 'text-blue-700',
      // Young female student studying happily
      bgImg: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      icon: <Utensils size={28} />, 
      title: 'Premium Dining', 
      desc: 'Nutritious, home-style meals enjoyed together in a warm, friendly atmosphere.',
      color: 'from-orange-500/20 to-red-500/20',
      textColor: 'text-orange-700',
      // Female-only dining/laughing group
      bgImg: 'https://images.unsplash.com/photo-1540331547168-8b63109225b7?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      icon: <Shield size={28} />, 
      title: '24/7 Security', 
      desc: 'Advanced security systems ensuring complete safety and peace of mind for every resident.',
      color: 'from-emerald-500/20 to-teal-500/20',
      textColor: 'text-emerald-700',
      // Safe, happy student entering a secure environment
      bgImg: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      icon: <Droplet size={28} />, 
      title: 'Purified Water', 
      desc: 'Continuous supply of pure, clean RO water for health and hydration.',
      color: 'from-cyan-500/20 to-blue-500/20',
      textColor: 'text-cyan-700',
      // Woman drinking pure water (Clear & Happy)
      bgImg: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=800'
    },
    { 
      icon: <Armchair size={28} />, 
      title: 'Curated Spaces', 
      desc: 'Comfortable, aesthetic rooms designed for both focus and relaxation.',
      color: 'from-rose-500/20 to-pink-500/20',
      textColor: 'text-rose-700',
      // Aesthetic room with a happy female student
      bgImg: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800'
    },
    { 
      icon: <Zap size={28} />, 
      title: 'Power Backup', 
      desc: 'Reliable power support to ensure no interruptions during your critical study hours.',
      color: 'from-amber-500/20 to-yellow-500/20',
      textColor: 'text-amber-700',
      // Female student studying happily in a bright, powered room
      bgImg: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800' 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section id="amenities" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary-600 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Designed for Excellence</span>
          <h2 className="text-4xl md:text-5xl font-medium font-heading text-neutral-900 tracking-tight mb-8">Thoughtful Amenities</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-base font-light leading-relaxed">
            Every feature is crafted to create a safe, supportive, and joyful community for our students.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {items.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants} 
              className="group relative h-[380px] rounded-[3rem] bg-white border border-neutral-100 shadow-sm hover:shadow-2xl hover:shadow-primary-100/50 transition-all duration-700 overflow-hidden cursor-default"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.bgImg} 
                  alt="" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-[0.14] group-hover:opacity-[0.22] saturate-[1.3] blur-[2px] group-hover:blur-[1px]"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40 group-hover:opacity-60 transition-opacity`}></div>
              </div>

              <div className="absolute inset-0 z-10 p-12 flex flex-col items-start transition-all duration-500">
                <div className={`w-14 h-14 rounded-2xl bg-white/95 shadow-sm border border-white flex items-center justify-center mb-10 ${item.textColor} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-5 tracking-tight group-hover:text-primary-700 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-neutral-700 font-light text-sm leading-relaxed max-w-[95%]">
                  {item.desc}
                </p>

                <div className="mt-auto">
                  <div className={`h-1 w-12 rounded-full bg-current ${item.textColor} opacity-20 group-hover:w-full transition-all duration-700`}></div>
                  <span className={`mt-4 block text-[10px] font-bold tracking-[0.3em] uppercase ${item.textColor} opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0`}>
                    Premium Homestay Standard
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
