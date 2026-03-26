import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Lock, Users } from "lucide-react";

const ReservationCTA = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }
    toast({
      title: "You're on the list! ✨",
      description: "We'll send you early access details and your exclusive offer soon.",
    });
    setEmail("");
  };

  return (
    <section id="reserve" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Decorative top */}
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold/40 mx-auto mb-10" />

        <p className="text-gold/70 tracking-[0.25em] uppercase text-xs font-sans mb-4">Limited Availability</p>
        <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
          Reserve Your Place<br />
          <span className="italic text-gold-gradient">Before Public Release</span>
        </h2>
        <p className="text-foreground/60 font-sans font-light max-w-lg mx-auto mb-8">
          Join the early-access list and unlock an exclusive offer. First release goes to registered guests only.
        </p>

        {/* Offer badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <span className="flex items-center gap-2 border border-gold/30 rounded-full px-4 py-2 bg-gold/5 text-sm font-sans text-cream/90">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            20% off first event
          </span>
          <span className="flex items-center gap-2 border border-gold/30 rounded-full px-4 py-2 bg-gold/5 text-sm font-sans text-cream/90">
            <Users className="w-3.5 h-3.5 text-gold" />
            3 tickets for price of 2
          </span>
          <span className="flex items-center gap-2 border border-gold/30 rounded-full px-4 py-2 bg-gold/5 text-sm font-sans text-cream/90">
            <Lock className="w-3.5 h-3.5 text-gold" />
            Early-access priority
          </span>
        </div>

        {/* Email form */}
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
            Join the List
          </Button>
        </form>

        <p className="text-muted-foreground text-xs font-sans">
          No spam. Only event updates & your exclusive offer.
        </p>
      </div>
    </section>
  );
};

export default ReservationCTA;
