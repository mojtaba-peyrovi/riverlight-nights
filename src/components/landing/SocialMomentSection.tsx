const SocialMomentSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-section-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold/70 tracking-[0.25em] uppercase text-xs font-sans mb-4">Moments Worth Keeping</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
            An Evening That<br />
            <span className="italic text-gold-gradient">Stays With You</span>
          </h2>
          <p className="text-foreground/60 font-sans font-light max-w-xl mx-auto">
            Every detail of this night is designed to be visually stunning, emotionally rich, and deeply personal.
            This is not just an event — it's a story you'll want to tell.
          </p>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        {/* Image mosaic placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {[
            { span: "col-span-2 md:col-span-1 md:row-span-2", aspect: "aspect-[3/4]", label: "Candlelight on the river" },
            { span: "", aspect: "aspect-square", label: "Floral floating lights" },
            { span: "", aspect: "aspect-square", label: "Intimate dining moments" },
            { span: "", aspect: "aspect-[4/3]", label: "Premium event atmosphere" },
            { span: "col-span-2 md:col-span-1", aspect: "aspect-[4/3]", label: "Ship deck ambiance" },
            { span: "", aspect: "aspect-[4/3]", label: "Memories worth sharing" },
          ].map((item, i) => (
            <div key={i} className={`${item.span} ${item.aspect} rounded-lg bg-secondary/60 border border-gold/10 flex items-center justify-center overflow-hidden group hover:border-gold/25 transition-all duration-300`}>
              <p className="text-muted-foreground text-xs font-sans text-center px-4 group-hover:text-cream/60 transition-colors">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMomentSection;
