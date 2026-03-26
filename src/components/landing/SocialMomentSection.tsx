import heroShip from "@/assets/hero-ship.jpg";
import shipWide from "@/assets/ship-wide.jpg";
import shipCelebration from "@/assets/ship-celebration.jpg";
import coupleShip from "@/assets/couple-ship.jpg";
import floatingLights from "@/assets/floating-lights.jpg";
import romanticSetting from "@/assets/romantic-setting.jpg";

const images = [
  { src: shipCelebration, span: "col-span-2 md:col-span-1 md:row-span-2", aspect: "aspect-[3/4]", alt: "Ship celebration with floating lights on river" },
  { src: floatingLights, span: "", aspect: "aspect-square", alt: "Floral floating lights on water" },
  { src: romanticSetting, span: "", aspect: "aspect-square", alt: "Intimate dining moments on ship" },
  { src: coupleShip, span: "", aspect: "aspect-[4/3]", alt: "Romantic couple on ship deck" },
  { src: shipWide, span: "col-span-2 md:col-span-1", aspect: "aspect-[4/3]", alt: "Ship deck ambiance at night" },
  { src: heroShip, span: "", aspect: "aspect-[4/3]", alt: "Festive ship with lights and guests" },
];

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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((item, i) => (
            <div key={i} className={`${item.span} ${item.aspect} rounded-lg overflow-hidden border border-gold/10 group hover:border-gold/25 transition-all duration-300`}>
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={1024}
                height={768}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMomentSection;
