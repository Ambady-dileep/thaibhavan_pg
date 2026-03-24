import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sneha R.",
      role: "CA Student, Ernakulam",
      content: "The most serene PG I have ever lived in. The home-cooked food is fantastic, the accommodation is spotless, and the management's behavior is extremely caring.",
      rating: 5
    },
    {
      id: 2,
      name: "Meera K.",
      role: "CA Student, Trivandrum",
      content: "Perfect environment for studying. Quiet, safe, and premium accommodation. Deepa aunty treats us like her own daughters and the food is just like home.",
      rating: 5
    },
    {
      id: 3,
      name: "Anjali T.",
      role: "CA Student, Kozhikode",
      content: "Safe, clean, and top-tier food. The peaceful atmosphere helps my exam preparation tremendously. Best ladies' stay and behavior in Alappuzha by far.",
      rating: 5
    },
    {
      id: 4,
      name: "Priya M.",
      role: "CA Student, Thrissur",
      content: "Excellent Wi-Fi and well-furnished study tables make it the ideal place for CA aspirants. The minimal design keeps distractions away. The food is simply superb.",
      rating: 4.9
    },
    {
      id: 5,
      name: "Kavya S.",
      role: "CA Student, Kollam",
      content: "Very secure environment with great amenities. The 24/7 security gave my parents complete peace of mind. Highly recommended for students prioritizing safety.",
      rating: 4.7
    },
    {
      id: 6,
      name: "Lakshmi V.",
      role: "CA Student, Malappuram",
      content: "Finding good accommodation with proper dietary options was tough until I found Thaibhavan PG. Deepa is very accommodating regarding food preferences. Loved it!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neutral-800 rounded-bl-[150px] opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 text-xs font-semibold tracking-widest uppercase mb-3 block">Guest Experiences</span>
          <h2 className="text-3xl font-medium font-heading tracking-tight">Voices of Trust</h2>
          <div className="flex justify-center items-center gap-2 mt-6">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="text-sm text-neutral-400">4.9/5 from Verified Residents</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, idx) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.15, duration: 0.6 }}
              className="bg-neutral-800/50 backdrop-blur-md p-8 rounded-[2rem] border border-neutral-700/50 hover:bg-neutral-800 transition-colors flex flex-col justify-between"
            >
              <div>
                <Quote className="text-neutral-600 mb-6" size={24} />
                <p className="text-neutral-300 font-light text-sm leading-relaxed mb-8">"{review.content}"</p>
              </div>
              
              <div className="flex items-center justify-between border-t border-neutral-700/50 pt-6 mt-auto">
                <div>
                  <h4 className="font-medium text-white text-sm">{review.name}</h4>
                  <p className="text-xs text-neutral-500 mt-1">{review.role}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className={i < Math.round(review.rating) ? "fill-yellow-400 text-yellow-400" : "fill-neutral-600 text-neutral-600"} />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-yellow-400">{review.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
