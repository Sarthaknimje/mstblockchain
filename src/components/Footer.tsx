import { Share2, AtSign, Terminal, Globe } from "lucide-react";

const Footer = () => (
  <footer className="w-full border-t-4 border-foreground bg-background">
    <div className="max-w-[1440px] mx-auto px-8 py-20 grid grid-cols-12 gap-12">
      {/* Left: Logo & Socials */}
      <div className="col-span-12 md:col-span-4">
        <a className="block mb-6 font-black text-3xl tracking-tighter" href="/">
          MST<span className="text-primary">.</span>
        </a>
        <p className="text-sm font-medium text-on-surface-variant mb-8 max-w-xs uppercase leading-snug">
          Structural purity in decentralized architecture. Built for the high-performance internet.
        </p>
        <div className="flex gap-4">
          {[Share2, AtSign, Terminal, Globe].map((Icon, i) => (
            <a key={i} className="w-10 h-10 border border-foreground flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all" href="#">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      {/* Center: Links */}
      <div className="col-span-12 md:col-span-4 grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="label-style text-primary">Ecosystem</p>
          <ul className="space-y-2 text-xs font-black uppercase tracking-[0.15em]">
            {["Build", "Validators", "Governance", "Grants"].map((l) => (
              <li key={l}><a className="hover:text-primary" href="#">{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <p className="label-style text-primary">Resources</p>
          <ul className="space-y-2 text-xs font-black uppercase tracking-[0.15em]">
            {["Whitepaper", "Docs", "GitHub", "Support"].map((l) => (
              <li key={l}><a className="hover:text-primary" href="#">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>
      {/* Right: Contact & Newsletter */}
      <div className="col-span-12 md:col-span-4 flex flex-col gap-10">
        <div>
          <p className="label-style text-primary mb-4">Contact</p>
          <p className="text-sm font-black uppercase tracking-tighter">foundation@mst-protocol.net</p>
        </div>
        <div>
          <p className="label-style text-primary mb-4">Newsletter</p>
          <form className="flex border-2 border-foreground" onSubmit={(e) => e.preventDefault()}>
            <input
              className="flex-grow bg-background px-4 py-3 text-[10px] font-black uppercase tracking-[0.15em] focus:outline-none border-none"
              placeholder="YOUR EMAIL"
              type="email"
            />
            <button className="bg-secondary text-secondary-foreground px-6 py-3 text-[10px] font-black uppercase tracking-[0.15em] hover:bg-primary transition-colors" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="border-t border-foreground/10 py-8 px-8 text-center">
      <p className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em]">
        © 2024 MST Protocol. ALL RIGHTS RESERVED. STRUCTURAL PURITY IS THE STANDARD.
      </p>
    </div>
  </footer>
);

export default Footer;
