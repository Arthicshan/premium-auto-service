
import { motion } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#08090b]"
    >
      {/* Car background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-red-500"
        >
          Precision. Performance. Perfection.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl text-5xl font-black uppercase leading-tight text-white md:text-7xl"
        >
          ENGINEERED FOR
          <br />
          <span className="text-red-600">EXCELLENCE.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-7 max-w-lg text-lg leading-8 text-gray-300"
        >
          Experience premium automotive care.
          From expert diagnostics to complete vehicle repair,
          we deliver precision, performance, and reliability.
        </motion.p>

        <motion.a
          href="#booking"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-9 inline-flex items-center gap-3 bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700"
        >
          BOOK YOUR SERVICE
          <ArrowUpRight size={19} />
        </motion.a>
      </div>

      <motion.a
        href="#services"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-8 z-10 flex items-center gap-3 text-sm text-gray-300"
      >
        <ArrowDown size={18} />
        SCROLL TO EXPLORE
      </motion.a>
    </section>
  );
}
