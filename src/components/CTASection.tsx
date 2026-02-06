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
          Klaar om je beurscatering te stroomlijnen?
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
          Start vandaag nog met ExpoServe en ontdek hoe bestellingen, menu's
          en teamcommunicatie samenkomen in één overzichtelijk platform.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button size="lg" className="shadow-primary-glow text-base px-8">
            Start gratis
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8">
            Plan een demo
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
