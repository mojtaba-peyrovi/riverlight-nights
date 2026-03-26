const ExperienceSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-section-gradient">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold/70 tracking-[0.25em] uppercase text-xs font-sans mb-4">The Experience</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
            Where Candlelight<br />
            <span className="italic text-gold-gradient">Meets the River</span>
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto" />
        </div>

        {/* Staggered storytelling */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          {/* Image placeholder */}
          <div className="aspect-[4/5] rounded-lg bg-secondary/60 border border-gold/10 flex items-center justify-center overflow-hidden">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-gold/10 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🕯️</span>
              </div>
              <p className="text-muted-foreground text-sm font-sans">Cinematic event imagery</p>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-foreground/80 text-lg md:text-xl font-sans font-light leading-relaxed">
              Imagine stepping aboard a ship where every corner glows with the warmth of candlelight. 
              The river beneath you reflects hundreds of floating floral lights, each one carrying 
              a quiet wish into the night.
            </p>
            <p className="text-foreground/60 text-base md:text-lg font-sans font-light leading-relaxed">
              The evening draws from the spirit of Loy Krathong — a celebration of gratitude, beauty, 
              and letting go. Here, adapted tastefully for a German riverside setting, the tradition 
              becomes something entirely new: intimate, refined, and deeply memorable.
            </p>
            <div className="border-l-2 border-gold/40 pl-6">
              <p className="text-cream/90 italic font-serif text-lg">
                "One evening. Limited seats. A rare experience on the water."
              </p>
            </div>
          </div>
        </div>

        {/* Second staggered block - reversed */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-8 md:order-2">
            <p className="text-foreground/80 text-lg md:text-xl font-sans font-light leading-relaxed">
              Soft Thai-inspired melodies drift across the deck as you settle into a carefully curated 
              evening of flavors, sights, and shared silence. The menu weaves Thai culinary elements 
              into a multi-course experience — delicate, surprising, beautiful.
            </p>
            <p className="text-foreground/60 text-base md:text-lg font-sans font-light leading-relaxed">
              This is not a busy restaurant night. Capacity is intentionally limited. Every seat 
              offers an unobstructed view of the water. Every moment is designed to feel unhurried, 
              personal, and worth remembering.
            </p>
          </div>

          <div className="aspect-[4/5] rounded-lg bg-secondary/60 border border-gold/10 flex items-center justify-center md:order-1 overflow-hidden">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-gold/10 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌸</span>
              </div>
              <p className="text-muted-foreground text-sm font-sans">Thai-inspired atmosphere</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
