import floatingLights from "@/assets/floating-lights.jpg";
import menuDining from "@/assets/menu-dining.jpg";
import romanticSetting from "@/assets/romantic-setting.jpg";
import premiumSeating from "@/assets/premium-seating.jpg";

const highlights = [
  {
    image: floatingLights,
    title: "Floating Candlelight Atmosphere",
    alt: "Floating lotus candles on calm river water",
    description:
      "Hundreds of candles and floating floral lights transform the ship into a glowing sanctuary on the water. Every corner radiates warmth.",
  },
  {
    image: menuDining,
    title: "Thai-Inspired Culinary Journey",
    alt: "Thai-inspired dinner spread on ship deck with candlelight",
    description:
      "A multi-course menu blending authentic Thai flavors with modern European presentation. Each dish is a conversation between cultures.",
  },
  {
    image: romanticSetting,
    title: "Romantic Riverfront Setting",
    alt: "Elegant candlelit dinner table on ship with river view",
    description:
      "Dine on a ship anchored in the heart of the river. The city lights, the gentle current, the open sky — an atmosphere money cannot replicate.",
  },
  {
    image: premiumSeating,
    title: "Limited Premium Seating",
    alt: "Premium velvet seating with golden lanterns on ship deck",
    description:
      "Capacity is deliberately restricted. This is not a mass event — it is an intimate gathering for those who value rarity and beauty.",
  },
];

const HighlightsSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold/70 tracking-[0.25em] uppercase text-xs font-sans mb-4">Visual Highlights</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
            Four Reasons to <span className="italic text-gold-gradient">Be There</span>
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-xl border border-gold/10 bg-card/80 backdrop-blur-sm overflow-hidden hover:border-gold/30 transition-all duration-500"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={1024}
                  height={768}
                />
              </div>

              <div className="p-8 md:p-10">
                <h3 className="font-serif text-xl md:text-2xl text-cream mb-3">{item.title}</h3>
                <p className="text-foreground/60 font-sans font-light leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>

              <div className="absolute inset-0 rounded-xl bg-gold/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
