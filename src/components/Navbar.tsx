import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/exposerve-logo.png";

const DEMO_URL = "https://hs.southparc.nl/meetings/diederik-klaassen";

const navItems = [
  { label: "Features", href: "/#features" },
  { label: "Hoe het werkt", href: "/#how-it-works" },
  { label: "Prijzen", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Exposerve logo" className="w-9 h-9 object-contain" />
          <span className="font-bold text-lg text-foreground">Exposerve</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://app.exposerve.nl/auth"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Inloggen
          </a>
          <Button size="sm" className="shadow-primary-glow" asChild>
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Plan een demo</a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Menu sluiten" : "Menu openen"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://app.exposerve.nl/auth"
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Inloggen
              </a>
              <Button size="sm" className="w-full shadow-primary-glow" asChild>
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  Plan een demo
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
