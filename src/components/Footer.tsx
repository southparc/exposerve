import { Link } from "react-router-dom";
import logo from "@/assets/exposerve-logo.png";

// TODO: KvK, btw en adres invullen — verplicht vóór er campagne-verkeer naar de site gaat.
const COMPANY = {
  name: "southparc bv",
  kvk: "",
  btw: "",
  address: "",
  email: "hello@exposerve.nl",
};

const productLinks = [
  { label: "Features", href: "/#features" },
  { label: "Hoe het werkt", href: "/#how-it-works" },
  { label: "Prijzen", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

const legalLinks = [
  { label: "Privacyverklaring", to: "/privacy" },
  { label: "Algemene voorwaarden", to: "/voorwaarden" },
  { label: "Cookies", to: "/cookies" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="Exposerve logo" className="w-7 h-7 object-contain" />
              <span className="font-semibold text-foreground">Exposerve</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              De catering-app die meegaat naar de beurs — niet achterblijft aan de bar.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://app.exposerve.nl/auth"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Inloggen
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Juridisch</h3>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-foreground transition-colors">
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-foreground transition-colors">
                  Plan een demo
                </a>
              </li>
              {COMPANY.address && <li>{COMPANY.address}</li>}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {COMPANY.name}. Alle rechten voorbehouden.
          </p>
          {(COMPANY.kvk || COMPANY.btw) && (
            <p className="text-sm text-muted-foreground">
              {COMPANY.kvk && `KvK ${COMPANY.kvk}`}
              {COMPANY.kvk && COMPANY.btw && " · "}
              {COMPANY.btw && `btw ${COMPANY.btw}`}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
