import { Button } from "@/components/ui/button";
import { MapPin, Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt="Illuminated ship on river surrounded by floating lights at night"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      {/* Decorative floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-gold/40 animate-float" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-gold/30 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-gold/50 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 rounded-full bg-gold-light/20 animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-gold/80 tracking-[0.3em] uppercase text-xs md:text-sm font-sans font-medium mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          An Evening Inspired by Loy Krathong
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <span className="text-gold-gradient">A Night of</span>
          <br />
          <span className="text-cream italic">Floating Lights</span>
        </h1>

        <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans font-light leading-relaxed animate-fade-up" style={{ animationDelay: "0.6s" }}>
          A candlelit riverside celebration with Thai-inspired atmosphere, floating floral lights, 
          and a ship transformed into a place of memory.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <div className="flex items-center gap-2 border border-gold/30 rounded-full px-5 py-2.5 bg-background/40 backdrop-blur-sm">
            <Calendar className="w-4 h-4 text-gold" />
            <span className="text-cream/90 text-sm font-sans">Summer 2026 · Date TBA</span>
          </div>
          <div className="flex items-center gap-2 border border-gold/30 rounded-full px-5 py-2.5 bg-background/40 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-cream/90 text-sm font-sans">Freiheit 15, 12555 Berlin</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "1s" }}>
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-dark text-primary-foreground font-sans font-semibold px-8 py-6 text-base rounded-full glow-gold transition-all duration-300"
            onClick={() => document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" })}
          >
            Reserve Your Place
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gold/40 text-cream hover:bg-gold/10 font-sans px-8 py-6 text-base rounded-full transition-all duration-300"
            onClick={() => document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" })}
          >
            Join Early Access
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
