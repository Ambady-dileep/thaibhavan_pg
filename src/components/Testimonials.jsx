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
    },
    {
      id: 6,
      name: "Lakshmi V.",
      role: "CA Student, Malappuram",
      content: "Finding good accommodation with proper dietary options was tough until I found Thaibhavan PG. Deepa is very accommodating regarding food preferences. Loved it!",
      rating: 5
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
    <section id="testimonials" className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-50/50 rounded-full blur-3xl -mr-64 -mt-64 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-100/30 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary-600 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Voices of Experience</span>
          <h2 className="text-4xl md:text-5xl font-medium font-heading tracking-tight text-primary-600 mb-6">
            Voices of Trust
          </h2>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-1.5 p-2 bg-white rounded-full shadow-sm border border-neutral-100">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-neutral-500 text-sm font-light tracking-wide">
              Average <span className="text-neutral-900 font-semibold">4.9/5</span> from our verified residents.
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {reviews.map((review) => (
            <motion.div 
              key={review.id}
              variants={itemVariants}
              className="group bg-white p-10 rounded-[2.5rem] border border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-500 flex flex-col items-start relative overflow-hidden"
            >
              {/* Clean Quote Accent */}
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                <Quote size={80} />
              </div>

              <div className="mb-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < Math.round(review.rating) ? "fill-yellow-400 text-yellow-400" : "fill-neutral-100 text-neutral-100"} />
                  ))}
                </div>
                <p className="text-neutral-700 font-light text-base leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>
              
              <div className="mt-auto w-full pt-8 border-t border-neutral-50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-lg select-none">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-neutral-900 text-sm tracking-tight">{review.name}</h4>
                      <CheckCircle2 size={14} className="text-primary-500 fill-primary-50" />
                    </div>
                    <p className="text-[10px] text-primary-600/70 font-bold tracking-widest uppercase mt-0.5">{review.role}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-neutral-300 pointer-events-none select-none">#{review.id}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
