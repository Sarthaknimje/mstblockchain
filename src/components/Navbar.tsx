import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Build", "Learn", "Products", "Use Cases"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full top-0 z-50 sticky bg-background border-b border-foreground/10 text-sm tracking-tight">
      <div className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-12">
          <a className="block font-black text-2xl tracking-tighter" href="/">
            MST<span className="text-primary">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link}
                className={`font-medium hover:text-primary transition-colors ${
                  i === 0 ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-foreground"
                }`}
                href="#"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-5 py-2 bg-primary text-primary-foreground hover:opacity-90 active:scale-95 duration-150 ease-in-out font-black uppercase text-[10px] tracking-[0.15em] transition-all">
            Join our ecosystem
          </button>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-foreground/10 px-8 py-6 flex flex-col gap-4 bg-background">
          {navLinks.map((link) => (
            <a key={link} className="font-medium text-foreground hover:text-primary" href="#">{link}</a>
          ))}
          <button className="mt-2 px-5 py-2 bg-primary text-primary-foreground font-black uppercase text-[10px] tracking-[0.15em]">
            Join our ecosystem
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
