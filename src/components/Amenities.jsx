import { motion } from 'framer-motion';
import { Wifi, Utensils, Shield, Droplet, Armchair, Zap } from 'lucide-react';

export default function Amenities() {
  const items = [
    { 
      icon: <Wifi size={32} />, 
      title: 'Digital Eco-system', 
      desc: 'Seamless high-speed Wi-Fi paired with 24/7 power backup, ensuring your academic focus and family connections remain uninterrupted.',
      color: 'from-blue-600/20 to-indigo-600/20',
      textColor: 'text-indigo-700',
      // Productive study environment
      bgImg: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      icon: <Utensils size={32} />, 
      title: 'Gourmet & Wellness', 
      desc: 'Nutritious, home-style meals served in a warm atmosphere, complemented by a continuous supply of pure RO drinking water for your health.',
      color: 'from-blue-600/25 to-cyan-500/25',
      textColor: 'text-blue-700',
      // Kerala food / South Indian meal with water
      bgImg: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      icon: <Shield size={32} />, 
      title: 'Elite Security & Comfort', 
      desc: 'Advanced 24/7 security systems providing complete peace of mind within beautifully curated, aesthetic spaces designed for rest and productivity.',
      color: 'from-emerald-600/20 to-teal-600/20',
      textColor: 'text-emerald-700',
      // Elegant, secure living space
      bgImg: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800' 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section id="amenities" className="py-10 md:py-16 bg-neutral-50 relative overflow-hidden">
      {/* Premium Decorative Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Abstract Architecture"
          className="w-full h-full object-cover scale-110"
        />
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-600 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 md:mb-3 block">Premium Standard</span>
            <h2 className="text-3xl md:text-4xl font-medium font-heading text-neutral-900 mb-4 md:mb-6 tracking-tight">Designed for Excellence</h2>
            <div className="h-1 w-20 bg-primary-600 rounded-full mx-auto" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group h-full"
            >
              {/* Card Container */}
              <div className={`h-full p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-br ${item.color} border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden`}>
                {/* Background Image with better visibility */}
                <div 
                  className="absolute inset-0 z-0 opacity-[0.08] group-hover:opacity-[0.12] group-hover:scale-110 transition-all duration-700 pointer-events-none"
                  style={{ 
                    backgroundImage: `url(${item.bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    mixBlendMode: 'multiply'
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`mb-5 md:mb-6 w-12 md:w-14 h-12 md:h-14 rounded-2xl bg-white flex items-center justify-center ${item.textColor} shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-3 md:mb-4 tracking-tight group-hover:text-primary-950">{item.title}</h3>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
