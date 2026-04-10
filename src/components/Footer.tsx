import { Share2, AtSign, Terminal, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import mstLogo from "@/assets/mst-logo.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t-4 border-foreground bg-background relative overflow-hidden">
      <div className="h-1 primary-gradient" />
      <div className="absolute inset-0 pointer-events-none gradient-mesh opacity-40" />

      <div className="max-w-[1440px] mx-auto px-8 py-14 md:py-20 grid grid-cols-12 gap-8 md:gap-12 relative z-10">
        <div className="col-span-12 md:col-span-4">
          <Link className="flex items-center gap-3 mb-5" to="/">
            <motion.img src={mstLogo} alt="MST Blockchain" className="h-12 w-auto" whileHover={{ scale: 1.1, rotate: 5 }} />
            <span className="font-black text-2xl tracking-tighter">MST<span className="text-primary">.</span></span>
          </Link>
          <p className="text-sm font-medium text-on-surface-variant mb-6 max-w-xs uppercase leading-snug">
            {t("footer.desc")}
          </p>
          <div className="flex gap-3">
            {[Share2, AtSign, Terminal, Globe].map((Icon, i) => (
              <motion.a key={i} className="w-9 h-9 border border-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 grid grid-cols-2 gap-8">
          <div className="space-y-3">
            <p className="label-style text-primary">{t("footer.ecosystem")}</p>
            <ul className="space-y-2 text-xs font-black uppercase tracking-[0.15em]">
              {["BridgeKey Wallet", "MSTScan", "MST Bridge", "Validators", t("nav.grants")].map((l) => (
                <li key={l}><a className="hover:text-primary transition-colors story-link" href="#">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <p className="label-style text-primary">{t("footer.resources")}</p>
            <ul className="space-y-2 text-xs font-black uppercase tracking-[0.15em]">
              {["Documentation", "Whitepaper", "GitHub", "Testnet", "Support"].map((l) => (
                <li key={l}><a className="hover:text-primary transition-colors story-link" href="#">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col gap-6 md:gap-8">
          <div>
            <p className="label-style text-primary mb-3">{t("footer.contact")}</p>
            <p className="text-sm font-black uppercase tracking-tighter">foundation@mst-protocol.net</p>
          </div>
          <div>
            <p className="label-style text-primary mb-3">{t("footer.newsletter")}</p>
            <form className="flex border-2 border-foreground" onSubmit={(e) => e.preventDefault()}>
              <input className="flex-grow bg-background px-4 py-3 text-[10px] font-black uppercase tracking-[0.15em] focus:outline-none border-none placeholder:text-foreground/30" placeholder={t("footer.emailPlaceholder")} type="email" />
              <motion.button className="bg-secondary text-secondary-foreground px-5 py-3 text-[10px] font-black uppercase tracking-[0.15em] hover:bg-primary transition-colors" type="submit" whileTap={{ scale: 0.97 }}>
                {t("footer.submit")}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-foreground/10 py-5 px-8 text-center relative z-10">
        <p className="text-[9px] font-black text-foreground/40 uppercase tracking-[0.2em]">
          {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
