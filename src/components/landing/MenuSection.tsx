import menuCard from "@/assets/menu-card.jpg";

const MenuSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-section-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold/70 tracking-[0.25em] uppercase text-xs font-sans mb-4">The Menu</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
            A Culinary Journey<br />
            <span className="italic text-gold-gradient">Across Cultures</span>
          </h2>
          <p className="text-foreground/60 font-sans font-light max-w-xl mx-auto">
            Thai-inspired flavors meet European refinement in a multi-course evening curated for the senses.
          </p>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Menu card image */}
          <div className="flex justify-center">
            <div className="relative w-full">
              <div className="aspect-[3/4] rounded-xl overflow-hidden border border-gold/20 glow-gold">
                <img
                  src={menuCard}
                  alt="Loy Krathong Nights menu card with starters, mains, desserts, and cocktails"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={768}
                  height={1024}
                />
              </div>
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-gold/40 rounded-tl-sm" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-gold/40 rounded-br-sm" />
            </div>
          </div>

          {/* Menu description */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xl text-cream mb-2">Starters</h3>
              <p className="text-foreground/55 font-sans font-light text-sm leading-relaxed">
                Crispy Spring Rolls with Sweet Chili · Tom Yum Goong · Grilled Prawn Satay with Peanut Sauce
              </p>
            </div>
            <div className="w-full h-px bg-gold/10" />
            <div>
              <h3 className="font-serif text-xl text-cream mb-2">Mains</h3>
              <p className="text-foreground/55 font-sans font-light text-sm leading-relaxed">
                Pad Thai Goong Sod · Green Curry with Chicken · Massaman Beef Curry · Steamed Jasmine Rice
              </p>
            </div>
            <div className="w-full h-px bg-gold/10" />
            <div>
              <h3 className="font-serif text-xl text-cream mb-2">Desserts & Cocktails</h3>
              <p className="text-foreground/55 font-sans font-light text-sm leading-relaxed">
                Mango Sticky Rice with Coconut Cream · Thai Coconut Pudding · Siam Sunray · Mekong Mule
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
