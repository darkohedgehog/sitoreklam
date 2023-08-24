import React from 'react';
import { Link } from "react-router-dom"; 
import Logo from '../assets/logo.png';
import {Footer} from '../components';
import {useEffect, useState } from 'react';
import { styles } from "../styles";


const Terms = () => {
  const [setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (

    <>
     <nav  className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}>
     <Link to="/" className="inline-flex items-center"
           onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}            
          >
              <img src={Logo} alt="Naslovna strana" 
              className="w-8 ml-20 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"           
           />
          
          <span className="ml-3 text-xl font-bold text-white tracking-wider uppercase">
            Sitoreklam
          </span>
        </Link>
        </nav>
     <div className='relative z-0 bg-primary bg-hero-pattern bg-cover bg-no-repeat bg-center mt-20'>
      
     <h1 className='flex justify-center text-xl font-bold text-white tracking-wider p-10'>Pravila privatnosti i uvjeti korištenja</h1>
    
      <h3 className='flex justify-center text-xl font-bold text-white tracking-wider p-10'>Pravila privatnosti</h3>
      <article className='mr-10 ml-10'>
      <p className="text-sm text-white">
      Grafički obrt "SITOREKLAM", Vukovar poštuje privatnost svojih korisnika i posjetitelja web stranica. Podatke registriranih korisnika, te ostale podatke o korisniku Grafički obrt "SITOREKLAM", Vukovar  neće davati na uvid trećoj strani. Podaci o korisniku neće biti dostupni trećoj strani osim u slučaju kada je takva obaveza regulirana zakonom.
      </p>
      <p className="text-sm text-white">
      Grafički obrt "SITOREKLAM", Vukovar se obavezuje da će čuvati privatnost korisnika web stranica, osim u slučaju teškog kršenja pravila ili nezakonitih aktivnosti korisnika.
      </p>
     
      <p className="text-sm text-white">
      Grafički obrt "SITOREKLAM", Vukovar ne može se držati odgovornim za neovlašteno korištenje korisničkog računa, niti eventualnu štetu nastalu na taj način.
      Grafički obrt "SITOREKLAM", Vukovar zadržava pravo ukinuti ili uskratiti mogućnost korištenja korisničkog računa bez prethodne najave ili/i objašnjenja.
      Grafički obrt "SITOREKLAM", Vukovar ne snosi odgovornost za štetu nastalu ukidanjem korisničkog računa.
      </p>
      <h5 className='flex justify-center text-md font-bold text-white tracking-wider p-10'>Izjava o zaštiti i prikupljanju osobnih podataka i njihovom korištenju te “kolačića”</h5>
      <p className="text-sm text-white mt-2">
      Osobni podaci su svi podaci koji se odnose na pojedinca čiji je identitet utvrđen ili se može utvrditi. Pojedinac čiji se identitet može utvrditi jest osoba koja se može identificirati izravno ili neizravno, osobito uz pomoć identifikatora kao što su ime, identifikacijski broj, podaci o lokaciji, mrežni identifikator ili uz pomoć jednog ili više čimbenika svojstvenih za fizički, fiziološki, genetski, mentalni, ekonomski, kulturni ili socijalni identitet tog pojedinca.
      </p>
      <p className="text-sm text-white mt-2">
      Grafički obrt "SITOREKLAM" obvezuje se pružati zaštitu osobnim podacima kupaca i korisnika usluga na način da prikuplja samo nužne, osnovne podatke o kupcima/korisnicima, a koji su nužni za ispunjenje naših obveza (podaci o ispunjenju narudžbe); informira kupce o načinu korištenja prikupljenih podataka, redovito daje kupcima mogućnost izbora o upotrebi njihovih podataka, uključujući mogućnost odluke žele li ili ne da se njihovo ime ukloni s lista koje se koriste za marketinške kampanje. Svi se podaci o korisnicima strogo čuvaju i dostupni su samo djelatnicima kojima su ti podaci nužni za obavljanje posla. Svi djelatnici Grafički obrt "SITOREKLAM" i poslovni partneri odgovorni su za poštivanje načela zaštite privatnosti.
      </p>
      <p className="text-sm text-white mt-2">
      Kad komunicirate s nama putem e-pošte, telefona ili osobno, možemo prikupiti osobne podatke kao što su Vaše ime, adresa, broj telefona, adresa e-pošte i preferencije za kontaktiranje. Također možemo izraditi zapisnike događaja korisne za dijagnosticiranje problema u radu portala te spremati informacije u vezi sa nastalim problemom ili problemom podrške. Te podatke koristimo kako bismo Vam pružili bolju podršku.
      </p>
      <p className="text-sm text-white mt-2">Vašem računu možemo pristupiti kako bi nam pomogao da vam pružimo potrebnu pomoć.
      </p>
      <p className="text-sm text-white mt-2">
      Vaše osobne podatke možemo upotrebljavati kako bismo komunicirali s Vama, uključujući komunikaciju o Vašem računu ili transakcijama prema nama, kako bismo Vam osigurali važne informacije o proizvodima , slali obavijesti o pretplati te za marketinšku korespondenciju. Možemo upotrebljavati Vaše osobne podatke kako bismo Vam slali marketinšku korespondenciju (uključujući poruke e-pošte) povezanu s proizvodima ili uslugama u skladu mogućim s Vašim preferencijama za e-poštu u „Moj račun“. Osobne podatke ne dijelimo s trećim stranama za marketinške potrebe trećih strana, a ako ne želite primati marketinšku korespondenciju kliknite na poveznicu “Odjava s newsletter-a” u bilo kojoj marketinškoj poruci e-pošte koju primite od naše tvrtke.
      </p>
      <p className="text-sm text-white mt-2">
      Možemo upotrebljavati osobne podatke za interne statističke, marketinške ili operacijske svrhe, uključujući stvaranje izvještaja o prodaji, interesa korisnika, sklonosti kupnji i drugih trendova koji se odnose na naše kupce.
      </p>
      <p className="text-sm text-white mt-2">
      Vaše Osobne podatke ne dijelimo drugim tvrtkama ili osobama. Vaši se osobni podaci mogu razotkriti drugim stranama samo uz Vaše dopuštenje u obliku koji može biti obavezan sukladno važećem zakonu. Sukladno važećim zakonima Vaše Osobne podatke možemo razotkriti ako vjerujemo da je to nužno sukladno primjenjivom zakonu ili propisu, u sklopu suradnje s pravnim procesom, na zahtjev predstavnika zakona. Prikupljeni osobni podaci se ne dostavljaju trećim osobama niti komercijalno eksploatiraju od trećih strana i izvan Republike Hrvatske, međutim zadržavamo pravo prijenosa osobnih podataka podružnici, ogranku ili trećoj strani u slučaju reorganizacije, udruživanja ili ustupanja poslova.
      </p>
      <p className="text-sm text-white mt-2">
      Naše web-mjesto nije namijenjeno pojedincima mlađim od 16 godina te zahtijevamo da nam pojedinci mlađi od 16 godina ne dostavljaju svoje osobne podatke. Ako doznamo da smo prikupili osobne podatke djeteta mlađeg od 16 godina, poduzet ćemo korake da te informacije izbrišemo što je prije moguće, a ako znate za korisnika mlađeg od 16 godina koji se služi našim web-mjestom, obratite nam se u rubrici kontakt.
      </p>
      <p className="text-sm text-white mt-2">
      Možda ćemo s vremena na vrijeme mijenjati ovu Izjavu ili uvjete korištenja kako dodajemo nove proizvode, usluge i aplikacije ili poboljšavamo našu trenutačnu ponudu te kako se tehnologija i zakoni mijenjaju. Datum posljednjeg ažuriranja možete pronaći na dnu ove stranice. Sve će promjene postati važeće nakon što objavimo promjenu na našem web-mjestu. Ako je riječ o materijalnim izmjenama, obavijestit ćemo vas o tome i ako je to potrebno sukladno primjenjivom zakonu, zatražiti vaše dopuštenje. Sukladno važećim zakonima, tu obavijest možete primiti porukom e-pošte ili objavom izmjene na našim zahvaćenim web-mjestima ili proizvodima/aplikacijama.
      </p>
      <p className="text-sm text-white mt-2">
      Vaše osobne podatke čuvat ćemo tijekom razdoblja potrebnog da se ispuni njihova svrha, osim ako je duže čuvanje propisano zakonom.
      </p>
      <p className="text-sm text-white mt-2">
      Za pregled, ispravak, ažuriranje svojih osobnih podataka, svojim osobnim podacima možete pristupiti u „Moj račun“ na glavnom izborniku nakon prijave te ih izmijeniti. Također možete zatražiti brisanje ili ažuriranje Vaših Osobnih podataka i računa putem rubrike „Kontakt“ ili dopisom na službenom papirom poštom.
      Sukladno važećem zakonu brzo ćemo odgovoriti na Vaše zahtjeve, zbog Vaše zaštite, možemo provesti samo zahtjeve koji se odnose na osobne podatke, a povezani su s određenom adresom e-pošte koju ste uporabili za slanje zahtjeva, možda ćemo morati provjeriti Vaš identitet prije provođenja zahtjeva. Možemo odbiti provođenje zahtjeva koji ugrožavaju privatnost drugih strana, iznimno su nepraktični ili bismo u njihovom ispunjavanju učinili nešto što nije dopušteno primjenjivim zakonima. Uz to, u mjeri u kojoj je to dopušteno važećim zakonima, možda ćemo trebati neke osobne podatke čuvati tijekom dužeg vremena za potrebe arhiviranja, poput čuvanja zapisnika o vašim kupnjama za potrebe jamstva ili računovodstva.
    </p>
    <p className="text-sm text-white mt-2">
    Osobni podaci su zaštićeni i čuvaju se dostupnim tehnologijama i procesima.
    Zahtjeve za pristup, ispravljanje ili brisanje osobnih podataka možete uputiti na našoj stranici za kontakt.
    </p>
    <p className="text-sm text-white mt-2">
    Internet stranicawww.sitreklam.com koristi kolačiće (eng. ‘cookies’) kako bi korisniku pružili uslugu s potpunim funkcionalnostima. Kolačići su skup podataka koje generira poslužitelj web stranica i koje web preglednik sprema na disk korisnika u obliku male tekstualne datoteke.
    Sesijski kolačić se postavlja na računalo posjetitelja Internet stranice www.sitoreklam.com samo za vrijeme trajanja posjeta našoj Internet stranici kako bi se korisniku na omogućila učinkovitija uporaba www.sitoreklam.com i automatski istječe kada se zatvori svoj preglednik.
    www.sitoreklam.com prate statističku posjećenost radi dobivanja nužne informacije o privlačnosti i uspješnosti svojih stranica na tržištu. Za to se koristi usluga treće strane pod nazivom Google Analytics. Više o tome te regulaciji kolačića koji su za to nužni, može se vidjeti na: http://www.google.com/intl/en/analytics/privacyoverview.html
    Internet stranica www.sitoreklam.com može koristiti kolačiće u svrhu oglašavanja vlastitih usluga ili usluga i proizvoda svojih partnera. To se prikazivanje oglasa omogućuje putem kolačića.
    Svi korisnici Internet stranice www.sitoreklam.com u svakom trenutku mogu samostalno urediti primanje kolačića putem postavki svojeg Internet-preglednika. www.sitoreklam.com isključuje svaku odgovornost za bilo kakav gubitak funkcionalnosti i/ili kvalitete sadržaja na www.sitoreklam.com u svim slučajevima odabira regulacije primanja kolačića od strane korisnika. Korištenjem Internet stranice www.sitoreklam.com smatra se da su korisnici u svakom trenutku upoznati i suglasni s ovim uvjetima korištenja, uključujući s odredbama o obradi podataka i mogućnostima u vezi s kolačićima.
    www.sitoreklam.com može prikupljti određene podatke o Korisnicima tijekom pristupanja / korištenja www.sitoreklam.com (IP adresa, session-cookie, ključne riječi korištene kod pretraživanja i sl.), koje koristi za analizu ponašanja Korisnika i rada sustava, kako bi poboljšao rad i funkcionalnost www.sitoreklam.com i njegove sadržaje dodatno usmjerio i prilagodio Korisnicima.
    Pružatelj usluge se obvezuje da će u dobroj namjeri koristiti podatke pribavljene od Korisnika, te da pribavljene podatke neće distribuirati trećim osobama.
</p>            
<p className="text-sm text-white mt-2">
   Kupac i korisnik prihvaćanjem ovih uvjeta korištenja i kupnje jamči da je upoznat sa zaštititom i prikupljanjem “kolačića”, svojih osobnih podataka te njihovom korištenju, daje svoju privolu i suglasnost za navedeno korištenje.
   Većina preglednika postavljena je da automatski prihvaća kolačiće.

   Kolačiće možete onemogućiti na svom pregledniku, no zapamtite da ako to napravite, možete izgubiti mnoge značajke potrebne da bi se omogućilo da web stranica ispravno funkcionira.

   Želite li detaljnije informacije o kolačićima, posjetite www.aboutcookies.org gdje ćete pronaći sveobuhvatne i neovisne informacije o tome kako onemogućiti kolačiće pomoću postavki preglednika te kako izbrisati kolačiće koji se već nalaze na vašem računalu.

   Za brisanje kolačića s vašeg mobilnog telefona potrebno je pregledati priručnik mobilnog telefona.
</p>

</article>

<article className='mr-10 ml-10'>
 <h1 className='flex justify-center text-xl font-bold text-white tracking-wider p-10 uppercase'>Uvjeti korištenja</h1>

<h3 className='flex justify-center text-xl font-bold text-white tracking-wider p-10'>1. Pružatelj usluge</h3>
<p className="text-sm text-white mt-2">
Grafički obrt "Sitoreklam" (dalje: Pružatelj usluge) svojim korisnicima omogućuje korištenje sadržaja Internet stranice na internetskoj domeni www.sitoreklam.com, koje je regulirano ovim Uvjetima korištenja (dalje Uvjeti korištenja).
Korisnikom se smatra svaka osoba koja pristupa i/ili koristi stranice www.sitoreklam.com, bez obzira koristi li besplatne stranice ili stranice za koje je potrebna prijava s korisničkim imenom i lozinkom/zaporkom (dalje: Korisnik)
</p>

<h3 className='flex justify-center text-xl font-bold text-white tracking-wider p-10'>2. Opće odredbe</h3>

<p className="text-sm text-white mt-2">
Pristupanjem i/ili korištenjem bilo kojeg dijela sadržaja ili servisa koji pripadaju www.sitoreklam.com smatra se da je Korisnik upoznat s ovim Uvjetima korištenja te da ih u potpunosti razumije i prihvaća. Pružatelj usluge zadržava pravo promjene izgleda, sadržaja i opsega www.sitoreklam.com, svih usluga, stranica i podstranica koje su sastavni dio www.sitoreklam.com kao i ovih Uvjeta korištenja.
Pri korištenju www.sitoreklam.com Korisnik je u cijelosti dužan poštovati relevantne odredbe ugovora o zasnivanju pretplatničkog odnosa te ovih Uvjeta korištenja. Niti jedan dio sadržaja www.sitoreklam.com ne smije se koristiti u nezakonite svrhe ili protivno odredbama ovih Uvjeta korištenja.
Tekstovi objavljeni u bazama znanja predstavljaju autorstvo.
Pružatelj usluge ne preuzima odgovornost za bilo kakvu štetu nastalu korisnicima korištenjem www.sitoreklam.com i njegovog sadržaja, osobito zbog mogućih pogrešaka u prijepisu mišljenja.
</p>

<h3 className='flex justify-center text-xl font-bold text-white tracking-wider p-10'>3. Opseg korištenja i prava intelektualnog vlasništva</h3>

<p className="text-sm text-white mt-2">
Korisnici su upoznati sa sljedećim činjenicama: zbirke dokumenata i pojedinačni dokumenti koji su sastavni dio sadržaja www.sitoreklam.com mogu biti u cijelosti ili pojedinačno zaštićeni autorskim pravom i drugim propisima, pojedinačne jedinice, koje su dio sadržajawww.sitoreklam.com, mogu imati značaj autorskog djela, te su zaštićene autorskim pravom njihovog autora. Autorska zaštita sadržajawww.sitoreklam.com, njegovih pojedinačnih zbirki podataka (baza znanja) i pojedinačnih jedinica u zbirkama, koje su dostupne korisnicima, obuhvaća zaštitu u skladu sa Zakonom o autorskom pravu i drugim srodnim pravima.
Korisniku je dopušteno korištenje pojedinačnih jedinica objavljenih na www.sitoreklam.com isključivo za vlastite potrebe. Svi oblici daljnje distribucije bilo kojeg dijela www.sitoreklam.com te umnožavanje, kopiranje odnosno omogućavanje korištenja trećim osobama (npr. reproduciranje u publikacijama, objava na internet stranicama trećih osoba i sl.), izričito su zabranjeni.
Pružatelj usluge polaže autorska prava na vlastite sadržaje (moguće tekstualne sadržaje, grafičke, baze podataka, programski kod i dr.).
Neovlašteno korištenje bilo kojeg dijela ovih sadržaja smatra se kršenjem autorskih i drugih prava Pružatelja usluge i www.sitoreklam.com.
Korisnik odgovara Pružatelju usluge za štetu koja Pružatelju usluge nastane kršenjem odredbi ove glave Uvjeta korištenja, tj. u njemu sadržanih obveza odnosno ograničenja.
</p>

<h3 className='flex justify-center text-xl font-bold text-white tracking-wider p-10'>4. Postupak s korisničkim imenom i (lozinkom) zaporkom</h3>

<p className="text-sm text-white mt-2">
Korisnik se obvezuje da će dodijeljenu zaporku čuvati kao poslovnu tajnu te da će zaporku koristiti samo osobno, tj. da iste neće učiniti dostupnima trećim osobama. Korisnik je odgovoran Pružatelju usluge za štetu nastalu pri zloporabi zaporke od strane neovlaštenog korisnika odnosno treće osobe kojoj je omogućio korištenje istima.
Korisnik je obvezan u slučaju saznanja za činjenice koje ukazuju na mogućnost zloporabe zaporke, bez odgode obavijestiti Pružatelja usluge.
U slučaju kršenja odredaba Uvjeta korištenja Pružatelj usluge ima pravo ograničiti ili onemogućiti uporabu sadržaja www.sitoreklam.com.
</p>

<h3 className='flex justify-center text-xl font-bold text-white tracking-wider p-10'>5. Povezanost na druge internet stranice</h3>

<p className="text-sm text-white mt-2">
www.sitoreklam.com može sadržavati i poveznice na druge internet stranice, koje nisu održavane od strane društva. Pružatelj usluge za sadržaj tih stranica ne odgovara.
</p>

</article>

  <Footer />

 </div> 
    
</>
    
  )
}

export default Terms;