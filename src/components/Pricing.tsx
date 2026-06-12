import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// TODO: prijzen invullen zodra het pricing-model is vastgesteld (per stand / per beurs / per maand).
const plans = [
  {
    name: "Pilot",
    audience: "Eerste keer Exposerve",
    description: "Eén beurs, samen met ons live. Alles inbegrepen, geen verplichtingen daarna.",
    features: [
      "Eén beurs, onbeperkt aantal standen",
      "Persoonlijke onboarding",
      "Hulp bij menu- en voorraadopzet",
      "Evaluatie en rapportage na afloop",
    ],
    highlighted: false,
  },
  {
    name: "Per beurs",
    audience: "Voor cateraars die meereizen",
    description: "Betaal per beurs die je draait. Kopieer je opzet van beurs naar beurs.",
    features: [
      "Onbeperkt aantal standen per beurs",
      "Meerdere beurzen tegelijk",
      "Runner-planning en afroep",
      "Rapportage per beurs",
    ],
    highlighted: true,
  },
  {
    name: "Jaarrond",
    audience: "Voor locatie-gebonden cateraars",
    description: "Vast tarief voor cateraars met een volle beurskalender op eigen locatie.",
    features: [
      "Alles uit Per beurs",
      "Onbeperkt aantal beurzen",
      "Jaaroverzichten en trends",
      "Prioriteit bij support",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Prijzen</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            De prijs hangt af van het aantal beurzen en standen dat je draait. In een demo van een
            half uur rekenen we het voor jouw situatie door.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`p-8 rounded-2xl border bg-card flex flex-col ${
                plan.highlighted ? "border-primary shadow-primary-glow" : "border-border shadow-card"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="mb-6">
                <h3 className="font-bold text-xl text-card-foreground">{plan.name}</h3>
                <p className="text-sm text-primary font-medium mt-1">{plan.audience}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant={plan.highlighted ? "default" : "outline"} className="w-full" asChild>
                <a href="#contact">Plan een demo</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
