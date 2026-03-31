import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Build", href: "#foundation" },
  { label: "Products", href: "#products" },
  { label: "Explorer", href: "#explorer" },
  { label: "Use Cases", href: "#usecases" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Build");

  const scrollTo = (id: string) => {
    // If on a sub-page, navigate home first
    if (window.location.pathname !== "/") {
      window.location.href = `/${id}`;
      return;
    }
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
      <div className="flex justify-between items-center px-8 py-3 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-10">
          <Link className="block font-black text-2xl tracking-tighter" to="/">
            MST<span className="text-primary">.</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  setActive(link.label);
                  scrollTo(link.href);
                }}
                className={`font-medium hover:text-primary transition-colors relative py-1 ${
                  active === link.label ? "text-primary font-bold" : "text-foreground"
                }`}
              >
                {link.label}
                {active === link.label && (
                  <motion.div
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary"
                    layoutId="nav-underline"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            className="hidden md:block px-4 py-2 primary-gradient text-primary-foreground hover:opacity-90 font-black uppercase text-[10px] tracking-[0.15em] transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#ecosystem")}
          >
            Join Ecosystem
          </motion.button>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden border-t border-foreground/10 px-8 py-5 flex flex-col gap-3 bg-background"
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
              className="mt-2 px-4 py-2 primary-gradient text-primary-foreground font-black uppercase text-[10px] tracking-[0.15em]"
              onClick={() => scrollTo("#ecosystem")}
            >
              Join Ecosystem
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
