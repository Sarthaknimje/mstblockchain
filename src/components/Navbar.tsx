import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Build", href: "#foundation" },
  { label: "Learn", href: "#explorer" },
  { label: "Products", href: "#products" },
  { label: "Use Cases", href: "#usecases" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Build");

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      className="w-full top-0 z-50 sticky bg-background/95 backdrop-blur-sm border-b border-foreground/10 text-sm tracking-tight"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-12">
          <Link className="block font-black text-2xl tracking-tighter" to="/">
            MST<span className="text-primary">.</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  setActive(link.label);
                  scrollTo(link.href);
                }}
                className={`font-medium hover:text-primary transition-colors relative ${
                  active === link.label ? "text-primary font-bold" : "text-foreground"
                }`}
              >
                {link.label}
                {active === link.label && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="nav-underline"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <motion.button
            className="hidden md:block px-5 py-2 bg-primary text-primary-foreground hover:opacity-90 font-black uppercase text-[10px] tracking-[0.15em] transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#ecosystem")}
          >
            Join our ecosystem
          </motion.button>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden border-t border-foreground/10 px-8 py-6 flex flex-col gap-4 bg-background"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                className="font-medium text-foreground hover:text-primary text-left"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => {
                  setActive(link.label);
                  scrollTo(link.href);
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <button
              className="mt-2 px-5 py-2 bg-primary text-primary-foreground font-black uppercase text-[10px] tracking-[0.15em]"
              onClick={() => scrollTo("#ecosystem")}
            >
              Join our ecosystem
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
