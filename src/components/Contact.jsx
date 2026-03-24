import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const whatsappUrl = `https://wa.me/919947237049?text=${encodeURIComponent("Hi, I'm interested in Thaibhavan PG.")}`;

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-neutral-50 rounded-[2.5rem] border border-neutral-100 overflow-hidden flex flex-col md:flex-row">
          
          <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-600 text-xs font-semibold tracking-widest uppercase mb-3 block">Get in Touch</span>
              <h2 className="text-3xl font-medium font-heading mb-6 tracking-tight text-neutral-900">Let's Connect</h2>
              <p className="text-neutral-500 text-sm font-light mb-10 leading-relaxed">
                Secure your stay or inquire about availability. We're here to answer any questions you might have about Thaibhavan PG.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow cursor-default">
                  <div className="w-12 h-12 flex-shrink-0 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 tracking-tight">Location</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed font-light mt-1">
                      THAI BHAVAN, Mundakapparambu, <br />
                      Pazhaveeedu P.O, Alappuzha, 688009
                    </p>
                  </div>
                </div>
                
                <a href="tel:+919947237049" className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all group">
                  <div className="w-12 h-12 flex-shrink-0 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Phone size={22} />
                  </div>
                  <div className="flex flex-col justify-center h-12 text-left">
                    <h4 className="text-sm font-semibold text-neutral-900 tracking-tight">Direct Call</h4>
                    <span className="text-sm text-neutral-500 group-hover:text-blue-600 transition-colors font-light">
                      +91 99472 37049
                    </span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 bg-white p-10 md:p-16 flex flex-col justify-center border-l border-neutral-100">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-medium font-heading mb-8 text-neutral-900">Quick Actions</h3>
              
              <div className="space-y-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full p-4 bg-white border border-neutral-100 hover:border-[#25D366]/30 hover:shadow-lg hover:shadow-[#25D366]/5 rounded-2xl transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageCircle size={24} />
                  </div>
                  <div className="text-left flex-grow">
                    <span className="block text-sm font-semibold text-neutral-900">WhatsApp Chat</span>
                    <span className="block text-xs text-neutral-500 mt-0.5">Quickest response</span>
                  </div>
                  <span className="text-xs font-bold text-neutral-300 group-hover:text-[#25D366] transition-colors pr-2">→</span>
                </a>

                <a 
                  href="mailto:thaibhavanpg@gmail.com"
                  className="flex items-center gap-4 w-full p-4 bg-white border border-neutral-100 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5 rounded-2xl transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-500 flex items-center justify-center group-hover:bg-violet-500 group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div className="text-left flex-grow">
                    <span className="block text-sm font-semibold text-neutral-900">Send an Email</span>
                    <span className="block text-xs text-neutral-500 mt-0.5">For formal inquiries</span>
                  </div>
                  <span className="text-xs font-bold text-neutral-300 group-hover:text-violet-500 transition-colors pr-2">→</span>
                </a>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
