import { motion } from "framer-motion"

export default function Overlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="absolute top-8 left-0 right-0 flex flex-col items-center gap-2">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="font-serif text-3xl md:text-5xl font-light text-white tracking-[0.2em] uppercase"
        >
          Юлия Усанина
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="font-sans text-xs md:text-sm font-light text-white/60 tracking-[0.35em] uppercase"
        >
          Фотограф · Портфолио
        </motion.p>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="font-sans text-[10px] md:text-xs font-light text-white/40 tracking-[0.3em] uppercase"
        >
          Двигайте мышью · перетаскивайте · стрелки ←→
        </motion.p>
      </div>
    </div>
  )
}