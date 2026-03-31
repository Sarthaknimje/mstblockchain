import { LayoutGrid, ArrowLeftRight } from "lucide-react";

const blocks = [
  { id: "#12,845,291", time: "0.4s ago" },
  { id: "#12,845,290", time: "0.8s ago" },
  { id: "#12,845,289", time: "1.2s ago" },
];

const txns = [
  { addr: "0x4f...91ae", amount: "24.5 MST" },
  { addr: "0x8a...22c1", amount: "1,200 MST" },
  { addr: "0x12...f9e0", amount: "0.1 MST" },
];

const ExplorerSection = () => (
  <section className="py-32 section-border">
    <div className="grid grid-cols-12 gap-x-[1.4rem]">
      <div className="col-span-12 mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">MST Network Explorer</h2>
      </div>
      {/* Left: Blocks */}
      <div className="col-span-12 md:col-span-6 border-2 border-foreground p-8">
        <div className="flex justify-between items-center mb-8 border-b-2 border-foreground pb-4">
          <h3 className="text-xl font-black uppercase">Latest Blocks</h3>
          <LayoutGrid size={20} />
        </div>
        <div className="space-y-4">
          {blocks.map((b) => (
            <div key={b.id} className="flex justify-between items-center p-4 border border-foreground hover:bg-foreground/5 transition-colors">
              <span className="text-sm font-black tracking-tighter">{b.id}</span>
              <span className="label-style opacity-40">{b.time}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Right: Transactions */}
      <div className="col-span-12 md:col-span-6 border-2 border-foreground p-8 mt-6 md:mt-0">
        <div className="flex justify-between items-center mb-8 border-b-2 border-foreground pb-4">
          <h3 className="text-xl font-black uppercase">Latest Transactions</h3>
          <ArrowLeftRight size={20} />
        </div>
        <div className="space-y-4">
          {txns.map((t) => (
            <div key={t.addr} className="flex justify-between items-center p-4 border border-foreground hover:bg-foreground/5 transition-colors">
              <span className="text-sm font-black tracking-tighter">{t.addr}</span>
              <span className="label-style opacity-40">{t.amount}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-12 mt-16 flex justify-center">
        <button className="px-10 py-3 border-2 border-foreground font-black text-xs uppercase tracking-[0.15em] hover:bg-secondary hover:text-secondary-foreground transition-all">
          Visit our explorer
        </button>
      </div>
    </div>
  </section>
);

export default ExplorerSection;
