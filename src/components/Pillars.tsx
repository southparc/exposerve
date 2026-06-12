import { motion } from "framer-motion";
import { Radio, CalendarCheck, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Radio,
    title: "Grip op de vloer",
    description:
      "Realtime orderstatus per stand. Runners zien direct wat waar heen moet — niemand loopt meer rond met een briefje.",
  },
  {
    icon: CalendarCheck,
    title: "Klaar vóór de beurs",
    description:
      "Menu, prijzen, voorraad en roosters staan centraal. Kopieer een eerdere beurs en pas alleen aan wat anders is.",
  },
  {
    icon: TrendingUp,
    title: "Inzicht ná de beurs",
    description:
      "Rapportage per stand, per dag, per beurs. Zie welke items lopen en waar de marge lekt — zonder nachtelijke Excel-sessies.",
  },
];

const Pillars = () => {
  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Eén app voor de hele beursoperatie
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Geen horeca-kassa die vastzit aan één bar, geen Excel die omvalt bij drie parallelle
            beursdagen. Exposerve gaat mee naar de beurs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="p-8 rounded-2xl border border-border bg-card shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-card-foreground">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
