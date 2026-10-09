
import { motion } from "motion/react";
import {
  ShieldCheck,
  Wrench,
  Clock3,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Service",
    description:
      "Transparent service recommendations and careful attention to every vehicle.",
  },
  {
    icon: Wrench,
    title: "Precision Workmanship",
    description:
      "A detail-focused approach to diagnostics, maintenance and repair.",
  },
  {
    icon: Clock3,
    title: "Convenient Booking",
    description:
      "Request a service appointment quickly with a simple booking process.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Focused",
    description:
      "Professional standards and a commitment to reliable automotive care.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#101115] py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=85"
            alt="Professional automotive workshop"
            className="h-[480px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute bottom-8 left-8 border-l-4 border-red-600 pl-5">
            <p className="text-2xl font-black uppercase text-white">
              Built on Precision.
            </p>
            <p className="mt-1 text-sm text-gray-300">
              Driven by Excellence.
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-red-500"
          >
            WHY CHOOSE APEX AUTO
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-black uppercase leading-tight text-white md:text-6xl"
          >
            YOUR VEHICLE.
            <br />
            <span className="text-red-600">OUR PRIORITY.</span>
          </motion.h2>

          <p className="mt-7 leading-8 text-gray-400">
            We believe automotive care should combine precision,
            clear communication and convenience. Explore a better
            service experience designed around your vehicle.
          </p>

          <div className="mt-10 grid gap-7 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group"
                >
                  <Icon
                    size={30}
                    className="mb-4 text-red-500 transition-transform duration-300 group-hover:scale-110"
                  />

                  <h3 className="mb-2 text-lg font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <a
            href="#booking"
            className="mt-10 inline-flex items-center gap-3 border-b border-red-500 pb-2 font-bold uppercase text-white transition hover:text-red-500"
          >
            Book Your Service
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
