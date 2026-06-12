import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

// TODO: vervang door een echt formulier-endpoint (n8n-webhook of Supabase) zodra
// domein-mail en CRM staan. Tot die tijd opent het formulier een ingevulde e-mail.
const CONTACT_EMAIL = "hello@exposerve.nl";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    fairsPerYear: "",
    message: "",
  });

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demo-aanvraag — ${form.company || form.name}`);
    const body = encodeURIComponent(
      `Naam: ${form.name}\nBedrijf: ${form.company}\nE-mail: ${form.email}\nBeurzen per jaar: ${form.fairsPerYear}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    toast({
      title: "Je e-mailprogramma opent nu",
      description: "Verstuur het bericht en we nemen binnen één werkdag contact op.",
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Plan een demo
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-md">
            In een half uur laten we zien hoe Exposerve werkt voor jouw beurzen en standen, en
            rekenen we de prijs voor jouw situatie door. Geen verplichtingen.
          </p>
          <div className="flex items-center gap-3 text-foreground font-medium">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary transition-colors">
              {CONTACT_EMAIL}
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="p-8 rounded-2xl border border-border bg-card shadow-card space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name">Naam</Label>
              <Input id="name" required value={form.name} onChange={update("name")} placeholder="Je naam" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Bedrijf</Label>
              <Input id="company" required value={form.company} onChange={update("company")} placeholder="Bedrijfsnaam" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mailadres</Label>
            <Input id="email" type="email" required value={form.email} onChange={update("email")} placeholder="naam@bedrijf.nl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fairsPerYear">Hoeveel beurzen doen jullie per jaar?</Label>
            <select
              id="fairsPerYear"
              required
              value={form.fairsPerYear}
              onChange={update("fairsPerYear")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="" disabled>Maak een keuze</option>
              <option value="1-5">1 – 5</option>
              <option value="6-15">6 – 15</option>
              <option value="16-30">16 – 30</option>
              <option value="30+">Meer dan 30</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Bericht</Label>
            <Textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={update("message")}
              placeholder="Vertel kort iets over jullie operatie: aantal standen, locaties, waar het nu knelt."
            />
          </div>
          <Button type="submit" size="lg" className="w-full shadow-primary-glow">
            Verstuur aanvraag
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            We gebruiken je gegevens alleen om contact op te nemen. Zie de{" "}
            <a href="/privacy" className="underline hover:text-foreground">privacyverklaring</a>.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
