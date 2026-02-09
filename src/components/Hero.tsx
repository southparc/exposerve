import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import appMockup from "@/assets/app-mockup.png";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          className="flex-1 max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-muted-foreground">ExpoServe — Trade Fair Catering</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            ExpoServe. <span className="text-gradient">De makkelijke catering app.</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
            Beheer al je catering op alle beurzen vanuit één app. Bestellingen, menu's, standlocaties en voorraad.
            Ontwikkeld voor professionals die gemak en efficiëntie zoeken.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="shadow-primary-glow text-base px-8">
              Hoe het werkt
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8">
              Neem contact op
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl" />
            <img
              src={appMockup}
              alt="ExpoServe app dashboard"
              className="relative w-[280px] sm:w-[320px] rounded-[2rem] shadow-card-hover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
