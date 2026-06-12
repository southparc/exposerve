import { motion } from "framer-motion";
import { Settings2, Smartphone, Footprints, FileBarChart } from "lucide-react";

const steps = [
  {
    icon: Settings2,
    title: "Zet je beurs op",
    description:
      "Menu, prijzen, standen en rooster in één keer klaar. Volgende beurs? Kopieer de vorige en pas alleen aan wat anders is.",
  },
  {
    icon: Smartphone,
    title: "Neem bestellingen op aan de stand",
    description:
      "Gewoon op een telefoon, midden op de beursvloer. Gebouwd voor locaties waar het wifi het net niet doet.",
  },
  {
    icon: Footprints,
    title: "Runners zien wat waar heen moet",
    description:
      "Elke bestelling krijgt een stand en een status. Runners zien hun afroep realtime — geen dubbele loop, geen vergeten stand.",
  },
  {
    icon: FileBarChart,
    title: "Sluit de dag af met één overzicht",
    description:
      "Omzet per stand, per dag, per beurs. De rapportage staat klaar als de vloer dichtgaat — niemand hoeft 's nachts Excel in.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Hoe het werkt</h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Van voorbereiding tot eindrapportage in vier stappen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="relative p-6 rounded-2xl border border-border bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-4xl font-extrabold text-primary/20">{i + 1}</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-card-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
