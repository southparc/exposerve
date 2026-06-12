import LegalPage from "./LegalPage";
import { Button } from "@/components/ui/button";

const Cookies = () => {
  const resetConsent = () => {
    localStorage.removeItem("exposerve-cookie-consent");
    window.location.reload();
  };

  return (
    <LegalPage title="Cookiebeleid" updated="juni 2026">
      <section>
        <h2>Welke cookies gebruiken we</h2>
        <ul>
          <li>
            <strong>Functionele opslag:</strong> we onthouden je cookievoorkeur in je browser.
            Hiervoor is geen toestemming nodig.
          </li>
          <li>
            <strong>Analytics (Google Analytics):</strong> alleen na jouw toestemming. Hiermee zien
            we hoe de site wordt gebruikt, zodat we hem kunnen verbeteren.
          </li>
        </ul>
      </section>
      <section>
        <h2>Geen toestemming gegeven?</h2>
        <p>
          Dan worden er geen analytics-cookies geplaatst en werkt de site gewoon volledig.
        </p>
      </section>
      <section>
        <h2>Je keuze aanpassen</h2>
        <p>
          Je kunt je voorkeur op elk moment opnieuw instellen. De cookiebanner verschijnt dan
          opnieuw.
        </p>
        <Button variant="outline" onClick={resetConsent} className="mt-2">
          Cookievoorkeur opnieuw instellen
        </Button>
      </section>
    </LegalPage>
  );
};

export default Cookies;
