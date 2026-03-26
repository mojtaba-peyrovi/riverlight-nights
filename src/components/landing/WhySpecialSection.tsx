import { Sparkles, Heart, Camera, Users, Star, Clock } from "lucide-react";

const reasons = [
  { icon: Sparkles, title: "One-of-a-Kind Venue", text: "A floating ship transformed into a candlelit sanctuary. No other venue offers this." },
  { icon: Heart, title: "Ideal for Special Occasions", text: "Anniversaries, proposals, birthdays — a night that becomes the story you keep telling." },
  { icon: Camera, title: "Shareable & Memorable", text: "Every detail is designed to be visually stunning. Take home moments, not just memories." },
  { icon: Users, title: "Intimate, Not Crowded", text: "Limited capacity means personal attention, space to breathe, and genuine connection." },
  { icon: Star, title: "Curated & Pre-Booked", text: "This is not walk-in dining. It is a reserved, themed experience for a select audience." },
  { icon: Clock, title: "A Rare Evening", text: "Held only once. When it's gone, it's gone. Exclusivity is not a marketing word here — it's a fact." },
];

const WhySpecialSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-section-gradient">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold/70 tracking-[0.25em] uppercase text-xs font-sans mb-4">Why This Night</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
            More Than <span className="italic text-gold-gradient">a Dinner</span>
          </h2>
          <p className="text-foreground/60 font-sans font-light max-w-xl mx-auto">
            This is not a restaurant booking. It is an invitation to something rare, beautiful, and unrepeatable.
          </p>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item) => (
            <div key={item.title} className="p-6 rounded-xl border border-gold/10 bg-card/50 hover:border-gold/25 transition-all duration-300">
              <item.icon className="w-6 h-6 text-gold mb-4" />
              <h3 className="font-serif text-lg text-cream mb-2">{item.title}</h3>
              <p className="text-foreground/55 font-sans font-light text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySpecialSection;
