const useCases = [
  "Supply Chain Logistics", "Real Estate Tokenization", "DeFi Liquidity", "Secure Healthcare",
  "Metaverse Gaming", "Digital Identity", "IP Rights Management", "Energy Trading",
  "Vote Verification", "Yield Aggregators", "Carbon Credits", "Cross-Border Pay",
  "Asset Management", "Oracle Networks", "DAO Governance", "Derivatives Market",
  "AI Compute Market", "Insurance Claims", "Privacy Layers", "Escrow Services",
];

const heights = [
  "h-40", "h-56", "h-48", "h-64", "h-44",
  "h-60", "h-48", "h-64", "h-40", "h-52",
  "h-44", "h-64", "h-48", "h-56", "h-40",
  "h-52", "h-64", "h-44", "h-60", "h-48",
];

const UseCasesSection = () => (
  <section className="py-32 section-border">
    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-20">Use Cases</h2>
    <div className="masonry-grid">
      {useCases.map((uc, i) => (
        <div
          key={uc}
          className={`masonry-item border border-foreground p-6 flex flex-col justify-between hover:border-primary transition-colors group ${heights[i]} ${
            i === 7 ? "border-2 border-primary bg-primary/5" : ""
          }`}
        >
          <p className="text-[8px] font-black uppercase tracking-[0.15em] text-primary">
            {String(i + 1).padStart(2, "0")}
          </p>
          <h4 className="text-[10px] font-black uppercase leading-tight">{uc}</h4>
        </div>
      ))}
    </div>
  </section>
);

export default UseCasesSection;
