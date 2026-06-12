import { motion } from "framer-motion";
import { Zap, CheckCircle2 } from "lucide-react";
import appMockup2 from "@/assets/app-mockup-2.png";

const highlights = [
  "Slimme suggesties op basis van beursdata",
  "Automatische voorraadupdates",
  "Realtime inzichten per stand",
];

const AISection = () => {
  return (
    <section id="smart" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl" />
            <img
              src={appMockup2}
              alt="ExpoServe menu beheer"
              className="relative w-[280px] sm:w-[320px] rounded-[2rem] shadow-card-hover"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex-1 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
            <Zap className="w-3.5 h-3.5" />
            Slim beheer
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
            Jouw slimme{" "}
            <span className="text-gradient">catering assistent</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Exposerve analyseert je beursdata en geeft slimme aanbevelingen
            voor je menu, voorraad en personeelsinzet. Zo ben je altijd voorbereid.
          </p>

          <div className="space-y-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AISection;
