import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sneha Rajesh",
      role: "CA Student, Ernakulam",
      content: "The most serene PG I have ever lived in. The home-cooked food is fantastic, the accommodation is spotless, and the management's behavior is extremely caring.",
      rating: 5
    },
    {
      id: 2,
      name: "Safna fathima",
      role: "CA Student, Trivandrum",
      content: "Perfect environment for studying. Quiet, safe, and premium accommodation. Deepa aunty treats us like her own daughters and the food is just like home.",
      rating: 5
    },
    {
      id: 3,
      name: "Anjali Thomas",
      role: "CA Student, Kozhikode",
      content: "Safe, clean, and top-tier food. The peaceful atmosphere helps my exam preparation tremendously. Best ladies' stay and behavior in Alappuzha by far.",
      rating: 5
    },
    {
      id: 4,
      name: "Priya Manoj",
      role: "CA Student, Thrissur",
      content: "Excellent Wi-Fi and well-furnished study tables make it the ideal place for CA aspirants. The minimal design keeps distractions away. The food is simply superb.",
      rating: 4.9
    },
    {
      id: 5,
      name: "Navya S.",
      role: "CA Student, Kollam",
      content: "Very secure environment with great amenities. The 24/7 security gave my parents complete peace of mind. Highly recommended for students prioritizing safety.",
      rating: 4.8
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <section id="testimonials" className="py-10 md:py-16 bg-neutral-50 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-50/50 rounded-full blur-3xl -mr-64 -mt-64 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-100/30 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-600 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 md:mb-3 block">Voices of Trust</span>
            <h2 className="text-3xl md:text-4xl font-medium font-heading text-neutral-900 mb-4 md:mb-6 tracking-tight">Student Experiences</h2>
            <div className="h-1 w-20 bg-primary-600 rounded-full mx-auto" />
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {reviews.map((review) => (
            <motion.div 
              key={review.id}
              variants={itemVariants}
              className="group bg-white p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-500 flex flex-col items-start relative overflow-hidden h-full"
            >
              {/* Clean Quote Accent */}
              <div className="absolute top-0 right-0 p-6 md:p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                <Quote size={window.innerWidth < 768 ? 60 : 80} />
              </div>

              <div className="mb-6 md:mb-8">
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={i < Math.round(review.rating) ? 14 : 12} className={i < Math.round(review.rating) ? "fill-yellow-400 text-yellow-400" : "fill-neutral-100 text-neutral-100"} />
                  ))}
                </div>
                <p className="text-neutral-700 font-light text-sm md:text-base leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>
              
              <div className="mt-auto w-full pt-6 md:pt-8 border-t border-neutral-50 flex items-center justify-between">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-base md:text-lg select-none">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-neutral-900 text-xs md:text-sm tracking-tight">{review.name}</h4>
                      <CheckCircle2 size={12} className="text-primary-500 fill-primary-50" />
                    </div>
                    <p className="text-[8px] md:text-[10px] text-primary-600/70 font-bold tracking-widest uppercase mt-0.1 md:mt-0.5">{review.role}</p>
                  </div>
                </div>
                <span className="text-[10px] md:text-xs font-bold text-neutral-300 pointer-events-none select-none">#{review.id}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
