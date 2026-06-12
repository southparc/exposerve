import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="cta" className="py-24 px-6">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
          Klaar om de chaos van de standen te halen?
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
          Plan een demo van een half uur. We laten Exposerve zien met jouw soort beurzen en
          rekenen direct de prijs voor jouw situatie door.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button size="lg" className="shadow-primary-glow text-base px-8" asChild>
            <a href="#contact">Plan een demo</a>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8" asChild>
            <a href="#faq">Bekijk de FAQ</a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
