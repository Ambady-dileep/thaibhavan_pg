import { motion } from 'framer-motion';

export default function BackgroundLayer() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#fafafa]">
      <motion.div 
        animate={{ 
          x: [0, 80, -30, 0], 
          y: [0, 40, 80, 0], 
          scale: [1, 1.05, 0.95, 1] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-15%] xl:top-[-10%] right-[-10%] w-[60vw] h-[60vh] bg-primary-100/70 rounded-full mix-blend-multiply blur-[100px] xl:blur-[140px]"
      />
      <motion.div 
        animate={{ 
          x: [0, -60, 40, 0], 
          y: [0, -40, -80, 0], 
          scale: [1, 1.1, 0.9, 1] 
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[-15%] w-[50vw] h-[50vh] bg-blue-100/60 rounded-full mix-blend-multiply blur-[100px] xl:blur-[120px]"
      />
      <motion.div 
        animate={{ 
          x: [0, 40, -40, 0], 
          y: [0, -40, -60, 0] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[30%] w-[40vw] h-[40vh] bg-emerald-50/80 rounded-full mix-blend-multiply blur-[100px] xl:blur-[120px]"
      />
      {/* Premium minimal dotted pattern overlay to give slight texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      ></div>
    </div>
  );
}
