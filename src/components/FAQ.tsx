import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Werkt Exposerve als het wifi op de beursvloer slecht is?",
    answer:
      "Daar is Exposerve voor gebouwd. De app draait op een gewone telefoon en is gemaakt voor locaties waar de verbinding traag of wisselend is. Tijdens de demo laten we zien hoe dat zich gedraagt op een drukke beursvloer.",
  },
  {
    question: "Hoe snel kunnen we live?",
    answer:
      "Een eerste beurs zetten we samen met je op — menu, prijzen, standen en rooster. Reken op een dagdeel voorbereiding. Daarna kopieer je elke volgende beurs zelf in een paar minuten.",
  },
  {
    question: "Kunnen we ons bestaande menu en onze prijzen overnemen?",
    answer:
      "Ja. Bij de onboarding zetten we je huidige menu en prijslijst samen over, ook als die nu in Excel staan. Je hoeft niet alles opnieuw in te kloppen.",
  },
  {
    question: "Werkt het op meerdere beurzen tegelijk?",
    answer:
      "Ja, dat is precies waarvoor Exposerve gemaakt is. Elke beurs heeft een eigen omgeving met eigen standen, menu en rooster. Je schakelt in de app tussen beurzen en ziet per beurs wat er loopt.",
  },
  {
    question: "Wat kost Exposerve?",
    answer:
      "De prijs hangt af van het aantal beurzen en standen dat je draait. We rekenen het in een demo van een half uur voor jouw situatie door — zonder verplichtingen.",
  },
  {
    question: "Ondersteunen jullie bonprinters?",
    answer:
      "Bonprinter-integratie staat hoog op de roadmap. Werk je nu met bonprinters? Vertel het ons in het contactformulier — we nemen je situatie mee in de planning.",
  },
  {
    question: "Zitten we ergens aan vast?",
    answer:
      "Nee. Je kunt starten met één beurs als pilot. Bevalt het niet, dan stopt het daar — je data kun je altijd exporteren.",
  },
  {
    question: "Wat gebeurt er met onze data?",
    answer:
      "Jouw verkoop- en beursdata blijven van jou en worden nooit gedeeld met andere cateraars. We werken met een verwerkersovereenkomst en hosting binnen de EU. Zie ook onze privacyverklaring.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-muted-foreground text-lg">
            Staat je vraag er niet bij? <a href="#contact" className="text-primary font-medium hover:underline">Stel hem direct</a>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
