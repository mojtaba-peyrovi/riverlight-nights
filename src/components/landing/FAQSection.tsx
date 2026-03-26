import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is this an authentic Loy Krathong festival event?",
    a: "No — this is a premium evening inspired by the spirit and aesthetics of Loy Krathong. The floating lights, floral elements, and warm atmosphere draw from the tradition, but the event is adapted tastefully for a German riverside setting. Think of it as a cultural homage, not a replica.",
  },
  {
    q: "Is dinner included in the ticket?",
    a: "Yes. Every ticket includes a carefully curated 5-course Thai-inspired dinner, along with a welcome drink. Additional beverages are available at the onboard bar.",
  },
  {
    q: "What kind of atmosphere should I expect?",
    a: "Intimate, romantic, and unhurried. Soft music, candlelight, and the gentle movement of the river set the tone. This is not a party — it is a shared moment of beauty and connection.",
  },
  {
    q: "Is there a dress code?",
    a: "We encourage smart elegant attire. Think date-night refined — nothing formal required, but the atmosphere rewards dressing with intention.",
  },
  {
    q: "Can I come with a group?",
    a: "Absolutely. While the evening is perfect for couples, groups of friends celebrating a special occasion are very welcome. Group seating can be arranged upon request.",
  },
  {
    q: "What happens in case of bad weather?",
    a: "The ship features a fully covered deck area, so the event runs rain or shine. In the rare case of severe weather requiring cancellation, all guests will be notified and offered a full refund or rescheduled date.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold/70 tracking-[0.25em] uppercase text-xs font-sans mb-4">Questions</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
            Frequently <span className="italic text-gold-gradient">Asked</span>
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto" />
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-gold/10 rounded-xl px-6 bg-card/40 data-[state=open]:border-gold/25 transition-colors">
              <AccordionTrigger className="text-cream/90 font-sans text-left text-sm md:text-base font-medium hover:no-underline hover:text-cream py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/60 font-sans font-light text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
