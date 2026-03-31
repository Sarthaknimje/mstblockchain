import { Shield, Megaphone, Landmark } from "lucide-react";

const roles = [
  { icon: Shield, title: "Validator", desc: "Secure the network and earn rewards by running a high-performance node." },
  { icon: Megaphone, title: "Ambassador", desc: "Grow the community and represent the MST brand across the globe." },
  { icon: Landmark, title: "Grants", desc: "Funding for developers building the future of structural web3 purity." },
];

const EcosystemSection = () => (
  <section className="py-32 section-border">
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Join our ecosystem</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[1.4rem] gap-y-6 mb-16">
      {roles.map((role) => (
        <div
          key={role.title}
          className="border-2 border-foreground p-12 text-center hover:bg-secondary hover:text-secondary-foreground transition-colors group"
        >
          <role.icon className="w-12 h-12 mx-auto mb-6 text-primary" strokeWidth={1.5} />
          <h3 className="text-2xl font-black mb-4 uppercase">{role.title}</h3>
          <p className="text-sm font-medium opacity-70">{role.desc}</p>
        </div>
      ))}
    </div>
    <div className="flex flex-col items-center gap-4">
      <button className="px-12 py-4 bg-primary text-primary-foreground font-black text-sm uppercase tracking-[0.15em] hover:bg-secondary transition-colors">
        Become a Partner
      </button>
    </div>
  </section>
);

export default EcosystemSection;
