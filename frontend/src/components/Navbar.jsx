
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="/" className="text-xl font-black tracking-widest text-white">
          APEX<span className="text-red-600">AUTO.</span>
        </a>

        <div className="hidden items-center gap-9 text-sm font-medium text-gray-300 md:flex">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        <a
          href="#booking"
          className="hidden items-center gap-2 bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700 md:flex"
        >
          BOOK SERVICE <ArrowUpRight size={17} />
        </a>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-5 border-t border-white/10 bg-black px-6 py-6 text-white md:hidden">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="#booking" onClick={() => setOpen(false)}>
            Book Service
          </a>
        </div>
      )}
    </nav>
  );
}
