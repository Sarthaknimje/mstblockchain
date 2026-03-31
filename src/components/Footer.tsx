import { Share2, AtSign, Terminal, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="w-full border-t-4 border-foreground bg-background">
    <div className="h-1 primary-gradient" />

    <div className="max-w-[1440px] mx-auto px-8 py-14 md:py-20 grid grid-cols-12 gap-8 md:gap-12">
      <div className="col-span-12 md:col-span-4">
        <Link className="block mb-5 font-black text-3xl tracking-tighter" to="/">
          MST<span className="text-primary">.</span>
        </Link>
        <p className="text-sm font-medium text-on-surface-variant mb-6 max-w-xs uppercase leading-snug">
          Next-gen EVM Compatible Layer-1 blockchain. SARAL infrastructure for real-world Web3 adoption.
        </p>
        <div className="flex gap-3">
          {[Share2, AtSign, Terminal, Globe].map((Icon, i) => (
            <motion.a
              key={i}
              className="w-9 h-9 border border-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 grid grid-cols-2 gap-8">
        <div className="space-y-3">
          <p className="label-style text-primary">Ecosystem</p>
          <ul className="space-y-2 text-xs font-black uppercase tracking-[0.15em]">
            {["BridgeKey Wallet", "MSTScan", "MST Bridge", "Validators", "Grants"].map((l) => (
              <li key={l}><a className="hover:text-primary transition-colors story-link" href="#">{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <p className="label-style text-primary">Resources</p>
          <ul className="space-y-2 text-xs font-black uppercase tracking-[0.15em]">
            {["Documentation", "Whitepaper", "GitHub", "Testnet", "Support"].map((l) => (
              <li key={l}><a className="hover:text-primary transition-colors story-link" href="#">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 flex flex-col gap-6 md:gap-8">
        <div>
          <p className="label-style text-primary mb-3">Contact</p>
          <p className="text-sm font-black uppercase tracking-tighter">foundation@mst-protocol.net</p>
        </div>
        <div>
          <p className="label-style text-primary mb-3">Newsletter</p>
          <form className="flex border-2 border-foreground" onSubmit={(e) => e.preventDefault()}>
            <input
              className="flex-grow bg-background px-4 py-3 text-[10px] font-black uppercase tracking-[0.15em] focus:outline-none border-none placeholder:text-foreground/30"
              placeholder="YOUR EMAIL"
              type="email"
            />
            <motion.button
              className="bg-secondary text-secondary-foreground px-5 py-3 text-[10px] font-black uppercase tracking-[0.15em] hover:bg-primary transition-colors"
              type="submit"
              whileTap={{ scale: 0.97 }}
            >
              Submit
            </motion.button>
          </form>
        </div>
      </div>
    </div>
    <div className="border-t border-foreground/10 py-5 px-8 text-center">
      <p className="text-[9px] font-black text-foreground/40 uppercase tracking-[0.2em]">
        © 2025 MST Blockchain. ALL RIGHTS RESERVED. SARAL — SIMPLE, ACCESSIBLE, RELIABLE, AFFORDABLE, LIMITLESS.
      </p>
    </div>
  </footer>
);

export default Footer;
