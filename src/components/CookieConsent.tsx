import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "exposerve-cookie-consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const updateConsent = (granted: boolean) => {
  window.gtag?.("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
  });
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === null) {
      setVisible(true);
    } else {
      updateConsent(stored === "granted");
    }
  }, []);

  const choose = (granted: boolean) => {
    localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
    updateConsent(granted);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:max-w-md z-50 p-5 rounded-2xl border border-border bg-card shadow-card-hover">
      <p className="text-sm text-card-foreground leading-relaxed mb-4">
        We gebruiken cookies om te zien hoe de site wordt gebruikt. Je kunt dit weigeren — de site
        werkt dan gewoon. Lees meer in ons{" "}
        <Link to="/cookies" className="underline hover:text-primary">cookiebeleid</Link>.
      </p>
      <div className="flex gap-3">
        <Button size="sm" onClick={() => choose(true)}>Accepteren</Button>
        <Button size="sm" variant="outline" onClick={() => choose(false)}>Weigeren</Button>
      </div>
    </div>
  );
};

export default CookieConsent;
