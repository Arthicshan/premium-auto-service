
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Wrench,
  Gauge,
  Disc3,
  Droplets,
  Settings,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Engine Repair",
    description: "Precision maintenance and complete engine solutions.",
    icon: Wrench,
  },
  {
    number: "02",
    title: "Brake Services",
    description: "Professional brake inspection, repair and replacement.",
    icon: Disc3,
  },
  {
    number: "03",
    title: "Car Diagnostics",
    description: "Advanced vehicle diagnostics and fault detection.",
    icon: Gauge,
  },
  {
    number: "04",
    title: "Oil & Maintenance",
    description: "Quality oil changes and preventive maintenance.",
    icon: Droplets,
  },
  {
    number: "05",
    title: "Transmission",
    description: "Expert transmission inspection and servicing.",
    icon: Settings,
  },
  {
    number: "06",
    title: "Car Detailing",
    description: "Premium interior and exterior vehicle care.",
    icon: Sparkles,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0b0c0f] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-5 text-sm font-bold tracking-[0.3em] text-red-500">
            WHAT WE DO
          </p>

          <h2 className="text-4xl font-black uppercase text-white md:text-6xl">
            PREMIUM AUTO
            <br />
            <span className="text-red-600">SERVICES.</span>
          </h2>

          <p className="mt-6 max-w-xl text-gray-400">
            Exceptional automotive care backed by precision,
            expertise and dedication to performance.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden border border-white/10 bg-[#141519] p-8 transition-colors duration-300 hover:border-red-600/60"
              >
                <div className="mb-12 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center bg-red-600/10 text-red-500 transition-colors group-hover:bg-red-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <span className="text-sm text-gray-600">
                    {service.number}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mb-8 leading-7 text-gray-400">
                  {service.description}
                </p>

                <a
                  href="#booking"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-red-500"
                >
                  Book Service
                  <ArrowUpRight size={17} />
                </a>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
