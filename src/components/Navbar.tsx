import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import mstLogo from "@/assets/mst-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Build");
  const { t } = useLanguage();

  const navLinks = [
    { label: t("nav.build"), key: "Build", href: "#foundation" },
    { label: t("nav.products"), key: "Products", href: "#products" },
    { label: t("nav.explorer"), key: "Explorer", href: "#explorer" },
    { label: t("nav.usecases"), key: "Use Cases", href: "#usecases" },
    { label: t("nav.grants"), key: "Grants", href: "/grants", isRoute: true },
    { label: t("nav.ambassador"), key: "Ambassador", href: "/ambassador", isRoute: true },
    { label: t("nav.academy"), key: "Academy", href: "/academy", isRoute: true },
  ];

  const scrollTo = (id: string) => {
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
      className="w-full top-0 z-50 sticky bg-background/80 backdrop-blur-md border-b border-foreground/10 text-sm tracking-tight"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="h-[2px] primary-gradient" />

      <div className="flex justify-between items-center px-8 py-2.5 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-10">
          <Link className="flex items-center gap-2.5" to="/">
            <motion.img
              src={mstLogo}
              alt="MST Blockchain"
              className="h-9 w-auto"
              whileHover={{ scale: 1.08, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <span className="font-black text-xl tracking-tighter hidden sm:block">
              MST<span className="text-primary">.</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.key}
                  to={link.href}
                  className="font-medium hover:text-primary transition-colors relative py-1"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.key}
                  onClick={() => {
                    setActive(link.key);
                    scrollTo(link.href);
                  }}
                  className={`font-medium hover:text-primary transition-colors relative py-1 ${
                    active === link.key ? "text-primary font-bold" : "text-foreground"
                  }`}
                >
                  {link.label}
                  {active === link.key && (
                    <motion.div
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary"
                      layoutId="nav-underline"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </button>
              )
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            className="hidden md:block px-4 py-2 primary-gradient text-primary-foreground hover:opacity-90 font-black uppercase text-[10px] tracking-[0.15em] transition-all primary-glow-shadow btn-gradient-hover"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#ecosystem")}
          >
            <span>{t("nav.join")}</span>
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
            {navLinks.map((link, i) =>
              link.isRoute ? (
                <Link
                  key={link.key}
                  to={link.href}
                  className="font-medium text-foreground hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <motion.button
                  key={link.key}
                  className="font-medium text-foreground hover:text-primary text-left"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => {
                    setActive(link.key);
                    scrollTo(link.href);
                  }}
                >
                  {link.label}
                </motion.button>
              )
            )}
            <button
              className="mt-2 px-4 py-2 primary-gradient text-primary-foreground font-black uppercase text-[10px] tracking-[0.15em] btn-gradient-hover"
              onClick={() => scrollTo("#ecosystem")}
            >
              <span>{t("nav.join")}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
