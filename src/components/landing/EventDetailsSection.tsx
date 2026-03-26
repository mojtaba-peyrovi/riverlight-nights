import { Calendar, Clock, Anchor, Users, Euro, UtensilsCrossed, Cloud, ShieldCheck } from "lucide-react";

const details = [
  { icon: Calendar, label: "Date", value: "Summer 2026 · Exact date TBA" },
  { icon: Clock, label: "Time", value: "18:30 – 23:00" },
  { icon: Anchor, label: "Boarding", value: "18:00 · Rhine River Dock" },
  { icon: Users, label: "Capacity", value: "Limited to 60 guests" },
  { icon: Euro, label: "Pricing", value: "From €89 per person" },
  { icon: UtensilsCrossed, label: "Menu", value: "5-course Thai-inspired dinner included" },
  { icon: Cloud, label: "Weather", value: "Covered deck · Rain-protected" },
  { icon: ShieldCheck, label: "Reservation", value: "Pre-booked only · Non-transferable" },
];

const EventDetailsSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold/70 tracking-[0.25em] uppercase text-xs font-sans mb-4">Event Details</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
            Everything You <span className="italic text-gold-gradient">Need to Know</span>
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {details.map((item) => (
            <div key={item.label} className="p-5 rounded-xl border border-gold/10 bg-card/60 text-center">
              <item.icon className="w-5 h-5 text-gold mx-auto mb-3" />
              <p className="text-gold/80 text-xs tracking-wider uppercase font-sans mb-1">{item.label}</p>
              <p className="text-cream/90 font-sans text-sm font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
