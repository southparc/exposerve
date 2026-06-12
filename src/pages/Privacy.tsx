import LegalPage from "./LegalPage";

const Privacy = () => (
  <LegalPage title="Privacyverklaring" updated="juni 2026">
    <section>
      <h2>Wie zijn wij</h2>
      <p>
        Exposerve is een product van southparc bv. {/* TODO: KvK-nummer en vestigingsadres toevoegen */}
        Voor vragen over deze privacyverklaring kun je mailen naar hello@exposerve.nl.
      </p>
    </section>
    <section>
      <h2>Welke gegevens we verzamelen via deze website</h2>
      <ul>
        <li>
          <strong>Contactformulier:</strong> naam, bedrijfsnaam, e-mailadres, het aantal beurzen per
          jaar en je bericht. We gebruiken deze gegevens uitsluitend om contact met je op te nemen
          over je aanvraag.
        </li>
        <li>
          <strong>Analytics:</strong> als je daarvoor toestemming geeft, gebruiken we Google
          Analytics om te zien hoe de site wordt gebruikt. Zonder toestemming worden er geen
          analytics-cookies geplaatst.
        </li>
      </ul>
    </section>
    <section>
      <h2>Gegevens in de Exposerve-app</h2>
      <p>
        Gebruik je de Exposerve-app als cateraar, dan verwerken wij gegevens namens jou (zoals
        bestellingen, menu's en medewerkergegevens). Voor die verwerking sluiten we een
        verwerkersovereenkomst. Jouw bedrijfsdata blijven van jou en worden nooit gedeeld met
        andere cateraars.
      </p>
    </section>
    <section>
      <h2>Bewaartermijnen</h2>
      <p>
        Gegevens uit het contactformulier bewaren we maximaal twaalf maanden na het laatste
        contact, tenzij er een klantrelatie ontstaat. Analytics-gegevens worden geanonimiseerd
        verwerkt.
      </p>
    </section>
    <section>
      <h2>Waar je data staat</h2>
      <p>
        Onze systemen draaien op servers binnen de Europese Unie. We delen je gegevens niet met
        derden, tenzij dat nodig is voor de dienstverlening (zoals hosting) of wettelijk verplicht
        is.
      </p>
    </section>
    <section>
      <h2>Jouw rechten</h2>
      <p>
        Je hebt het recht op inzage, correctie en verwijdering van je persoonsgegevens. Mail
        daarvoor naar hello@exposerve.nl. Je kunt ook een klacht indienen bij de Autoriteit
        Persoonsgegevens.
      </p>
    </section>
  </LegalPage>
);

export default Privacy;
