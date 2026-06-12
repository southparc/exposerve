import { motion } from "framer-motion";
import { ClipboardList, UtensilsCrossed, MapPin, MessageCircle, BarChart3, ShieldCheck, QrCode } from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "QR-login voor je krachten",
    description: "Standhouders en runners scannen een QR-code en draaien direct mee. Geen accounts, geen wachtwoorden, geen onboarding.",
  },
  {
    icon: ClipboardList,
    title: "Bestellen op de stand",
    description: "Neem bestellingen op waar je staat, gewoon op een telefoon — ook als het wifi traag is.",
  },
  {
    icon: UtensilsCrossed,
    title: "Menu & voorraad",
    description: "Beheer menu, prijzen en voorraad centraal. Kopieer de opzet van een eerdere beurs in een paar minuten.",
  },
  {
    icon: MessageCircle,
    title: "Realtime orderstatus",
    description: "Zie per stand wat er openstaat, onderweg is en afgeleverd. Iedereen kijkt naar hetzelfde overzicht.",
  },
  {
    icon: MapPin,
    title: "Multi-stand, multi-beurs",
    description: "Twintig standen op drie beurzen tegelijk? Elke beurs heeft een eigen omgeving met eigen standen en menu.",
  },
  {
    icon: BarChart3,
    title: "Rapportages per beurs",
    description: "Omzet per stand, per dag, per beurs. Zie welke items lopen en waar de marge lekt.",
  },
  {
    icon: ShieldCheck,
    title: "Runner-planning",
    description: "Rooster runners en standen in en regel de afroep in dezelfde app — geen losse planningstool meer nodig.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Alles wat je nodig hebt</h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Van bestelling tot aflevering, Exposerve stroomlijnt elk aspect van je beurscatering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group p-6 rounded-2xl border border-border bg-card hover:shadow-card-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
