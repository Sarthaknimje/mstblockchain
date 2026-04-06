import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, X, Search, Check } from "lucide-react";
import { useLanguage, LANGUAGES } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { lang, setLang } = useLanguage();
  const panelRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === lang);

  const filtered = LANGUAGES.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.native.toLowerCase().includes(search.toLowerCase()) ||
      l.code.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <>
      <motion.button
        className="fixed bottom-6 left-6 z-[100] h-12 px-4 flex items-center gap-2 border-2 border-foreground/20 bg-background/90 backdrop-blur-md shadow-2xl text-[10px] font-black uppercase tracking-[0.15em] hover:border-primary/50 transition-all group overflow-hidden"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
      >
        <div className="absolute inset-0 primary-gradient opacity-0 group-hover:opacity-10 transition-opacity" />
        <Globe size={16} className="text-primary" />
        <span className="hidden sm:inline">{currentLang?.native || "English"}</span>
        <span className="sm:hidden">{currentLang?.code.toUpperCase()}</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            className="fixed bottom-20 left-6 z-[100] w-80 max-h-[70vh] bg-background border-2 border-foreground shadow-2xl flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-foreground/10">
              <div>
                <p className="label-style text-primary mb-1">Language</p>
                <p className="text-[10px] font-medium text-on-surface-variant">{LANGUAGES.length} languages available</p>
              </div>
              <button onClick={() => setOpen(false)} className="hover:text-primary transition-colors">
                <X size={18} />
              </button>
            </div>

            <div className="h-1 primary-gradient" />

            {/* Search */}
            <div className="px-4 py-3 border-b border-foreground/10">
              <div className="flex items-center gap-2 border border-foreground/20 px-3 py-2">
                <Search size={14} className="text-on-surface-variant" />
                <input
                  className="flex-1 bg-transparent text-xs font-medium focus:outline-none placeholder:text-foreground/30"
                  placeholder="Search languages..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  autoFocus
                />
              </div>
            </div>

            {/* Language list */}
            <div className="flex-1 overflow-y-auto no-scrollbar">
              {filtered.map((l) => (
                <motion.button
                  key={l.code}
                  className={`w-full flex items-center gap-3 px-5 py-3 text-left hover:bg-primary/5 transition-all group/item border-b border-foreground/5 ${
                    lang === l.code ? "bg-primary/10" : ""
                  }`}
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                    setSearch("");
                  }}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-8 h-8 border border-foreground/10 flex items-center justify-center text-[10px] font-black uppercase bg-gradient-to-br from-primary/5 to-transparent group-hover/item:border-primary/30 transition-colors">
                    {l.code.slice(0, 2)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-black uppercase tracking-wider truncate">{l.name}</p>
                    <p className="text-[10px] text-on-surface-variant truncate">{l.native}</p>
                  </div>
                  {lang === l.code && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <Check size={16} className="text-primary" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
              {filtered.length === 0 && (
                <p className="px-5 py-8 text-center text-xs text-on-surface-variant">No languages found</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LanguageSwitcher;
