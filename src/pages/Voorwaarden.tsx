import LegalPage from "./LegalPage";

const Voorwaarden = () => (
  <LegalPage title="Algemene voorwaarden" updated="juni 2026">
    <section>
      <h2>1. Definities</h2>
      <p>
        Exposerve: de software voor beurscatering-management, aangeboden door southparc bv.
        {/* TODO: KvK-nummer en vestigingsadres toevoegen */} Klant: de partij die een
        overeenkomst aangaat voor het gebruik van Exposerve.
      </p>
    </section>
    <section>
      <h2>2. Toepasselijkheid</h2>
      <p>
        Deze voorwaarden zijn van toepassing op alle aanbiedingen, overeenkomsten en het gebruik
        van Exposerve, tenzij schriftelijk anders overeengekomen.
      </p>
    </section>
    <section>
      <h2>3. Dienstverlening</h2>
      <p>
        Exposerve wordt geleverd als online dienst (SaaS). We spannen ons in voor een zo hoog
        mogelijke beschikbaarheid, maar garanderen geen ononderbroken werking. Gepland onderhoud
        kondigen we waar mogelijk vooraf aan.
      </p>
    </section>
    <section>
      <h2>4. Prijzen en betaling</h2>
      <p>
        Prijzen worden vooraf overeengekomen op basis van het aantal beurzen en standen. Facturen
        worden binnen 30 dagen voldaan, tenzij anders afgesproken.
      </p>
    </section>
    <section>
      <h2>5. Data en eigendom</h2>
      <p>
        Alle data die de klant in Exposerve invoert, blijft eigendom van de klant. Bij beëindiging
        van de overeenkomst kan de klant zijn data exporteren. Voor de verwerking van
        persoonsgegevens sluiten partijen een verwerkersovereenkomst.
      </p>
    </section>
    <section>
      <h2>6. Aansprakelijkheid</h2>
      <p>
        De aansprakelijkheid van southparc bv is beperkt tot het bedrag dat de klant in de twaalf
        maanden voorafgaand aan de schadeveroorzakende gebeurtenis heeft betaald voor het gebruik
        van Exposerve. Aansprakelijkheid voor indirecte schade is uitgesloten.
      </p>
    </section>
    <section>
      <h2>7. Looptijd en opzegging</h2>
      <p>
        Overeenkomsten per beurs eindigen na afloop van de betreffende beurs. Doorlopende
        overeenkomsten zijn maandelijks opzegbaar, tenzij anders overeengekomen.
      </p>
    </section>
    <section>
      <h2>8. Toepasselijk recht</h2>
      <p>
        Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd aan
        de bevoegde rechter in Nederland.
      </p>
    </section>
  </LegalPage>
);

export default Voorwaarden;
