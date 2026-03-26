import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import shipCelebration from "@/assets/ship-celebration.jpg";

const FinalCTAFooter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }
    toast({
      title: "Welcome aboard ✨",
      description: "You'll be among the first to know when reservations open.",
    });
    setEmail("");
  };

  return (
    <footer className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background image */}
      <img
        src={shipCelebration}
        alt="Ship celebration at night"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1024}
        height={1024}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Decorative orbs */}
      <div className="absolute top-1/3 left-1/5 w-2 h-2 rounded-full bg-gold/30 animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-gold/20 animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-6 leading-tight">
          Some Nights Stay<br />
          <span className="italic text-gold-gradient">With You Forever</span>
        </h2>
        <p className="text-foreground/60 font-sans font-light max-w-lg mx-auto mb-10">
          Limited places. One evening. An experience you will carry long after the lights fade on the water.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-secondary/60 border-gold/20 text-cream placeholder:text-muted-foreground rounded-full px-5 h-12 font-sans focus-visible:ring-gold/40"
          />
          <Button
            type="submit"
            className="bg-gold hover:bg-gold-dark text-primary-foreground font-sans font-semibold rounded-full h-12 px-8 glow-gold transition-all duration-300 whitespace-nowrap"
          >
            Reserve Interest
          </Button>
        </form>

        <p className="text-muted-foreground text-xs font-sans mb-16">
          Only 60 places available · Early-access guests are notified first
        </p>

        <div className="border-t border-gold/10 pt-8">
          <p className="text-muted-foreground text-xs font-sans">
            © 2026 · Restaurantschiff arsVivendi · Freiheit 15, 12555 Berlin
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FinalCTAFooter;
