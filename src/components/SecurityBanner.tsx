const SecurityBanner = () => (
  <section className="pb-32">
    <div className="bg-background border-2 border-foreground p-12 flex flex-col justify-center min-h-[300px] relative overflow-hidden text-center">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-5 transform translate-x-16 -translate-y-16 rotate-45"></div>
      <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter">
        Secured by <span className="text-primary">Structural Purity.</span>
      </h3>
      <p className="text-foreground font-medium max-w-xl mx-auto mb-8">
        Our consensus mechanism is mathematically proven to withstand adversarial conditions while maintaining zero-lag performance.
      </p>
      <button className="mx-auto w-fit label-style border-b-2 border-primary pb-1 hover:text-primary transition-colors">
        Read the Whitepaper
      </button>
    </div>
  </section>
);

export default SecurityBanner;
