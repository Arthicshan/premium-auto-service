
import { useState, useRef } from "react";
import { motion } from "motion/react";
import { ArrowLeftRight } from "lucide-react";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);

  const beforeImage = "/images/car-before.jpg";
  const afterImage = "/images/car-after.jpg";

  function updatePosition(clientX) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const percentage = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, percentage)));
  }

  return (
    <section
      id="gallery"
      className="bg-[#090a0d] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-sm font-bold tracking-[0.3em] text-red-500">
            OUR TRANSFORMATIONS
          </p>

          <h2 className="text-4xl font-black uppercase text-white md:text-6xl">
            BEFORE <span className="text-red-600">& AFTER.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Drag the slider to discover the difference
            professional automotive care can make.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            ref={containerRef}
            className="relative mx-auto aspect-[16/9] w-full max-w-5xl touch-pan-y select-none overflow-hidden border border-white/10 bg-[#17181b]"
            onPointerDown={(event) => {
              event.currentTarget.setPointerCapture(event.pointerId);
              updatePosition(event.clientX);
            }}
            onPointerMove={(event) => {
              if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                updatePosition(event.clientX);
              }
            }}
          >
            {/* AFTER image — full width */}
            <img
              src={afterImage}
              alt="Vehicle after professional detailing"
              draggable="false"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* BEFORE image — clipped */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - position}% 0 0)`,
              }}
            >
              <img
                src={beforeImage}
                alt="Vehicle before professional detailing"
                draggable="false"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <span className="absolute left-5 top-5 bg-black/70 px-4 py-2 text-xs font-bold tracking-widest text-white">
              BEFORE
            </span>

            <span className="absolute right-5 top-5 bg-red-600 px-4 py-2 text-xs font-bold tracking-widest text-white">
              AFTER
            </span>

            {/* Draggable divider */}
            <div
              className="pointer-events-none absolute bottom-0 top-0 w-[2px] bg-white"
              style={{ left: `${position}%` }}
            >
              <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-red-600 text-white shadow-xl">
                <ArrowLeftRight size={21} />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-5xl">
            <label
              htmlFor="comparison-slider"
              className="mb-2 block text-center text-sm text-gray-400"
            >
              Move slider to compare
            </label>

            <input
              id="comparison-slider"
              type="range"
              min="0"
              max="100"
              value={position}
              onChange={(event) => setPosition(Number(event.target.value))}
              aria-label="Before and after comparison"
              className="w-full accent-red-600"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
