// 1.

// Napiši konstruktorsku funkciju Student koja prima ime i prosek
// i ima metodu predstaviSe koja ispisuje:
// „Zdravo, ja sam (ime) i moj prosek je (prosek).”

// 2.

// Napravi dva studenta koristeći new Student i pozovi predstaviSe za oba.

// 3.

// Dodaj konstruktorskoj funkciji Auto (prima marka i godina)
// metodu starost koja prima trenutnu godinu i vraća starost auta.

// Primer:
// const auto = new Auto("Fiat", 2018);
// console.log(auto.starost(2025)); // 7

// 4.

// Pokaži šta se desi ako konstruktorsku funkciju Auto pozoveš bez new.
// Uporedi console.log rezultata.

// 5.

// Napiši funkciju Osoba i Zaposleni:
// Zaposleni treba da nasledi svojstva Osoba pomoću call.
// Osoba prima ime, godine, grad.
// Zaposleni prima sve to + firma.

// Primer:
// const radnik = new Zaposleni("Ajsa", 20, "Novi Pazar", "IT firma");
// console.log(radnik);

// 6.

// Napiši funkciju pozdrav koja ispisuje this.ime.
// Koristi bind da je vežeš za objekat osoba i pozovi.

// 7.

// Napiši funkciju racunaj koja prima cenu i porez.
// Koristi call i apply da pozoveš racunaj na objektu valuta = "RSD".

// 8.

// Napravi objekat sa metodom pozdrav kao običnu funkciju i kao arrow funkciju.
// Pozovi obe i objasni razliku this.

// 9.

// Napiši konstruktorsku funkciju Film koja prima naziv i trajanje
// i ima metodu info koja vraća „Naziv traje X min.”
// Napravi 3 filma i pozovi info za svaki.

// 10.

// Napravi konstruktor Brojac koji ima:
// - pocetnaVrednost
// - Metodu povecaj koja uvećava pocetnaVrednost za 1
// - Metodu prikazi koja ispisuje vrednost
// Napraviti 2 brojača i proveriti da li rade nezavisno.

// 11.

// Napiši konstruktorsku funkciju Pas koja prima ime.
// Dodaj metodu laj na Pas.prototype koja ispisuje: "Av av".
// Napravi dva psa i pozovi laj.

// 12.

// Napiši funkciju Knjiga sa naslov.
// Dodaj metodu info na Knjiga.prototype.
// Napravi objekat k1 i:
// - Proveri da li info postoji direktno na k1 (hasOwnProperty).
// - Proveri da li naslov postoji direktno.

// 13.

// Dodaj svojstvo godina konstruktorskoj funkciji Film.
// Metodu starost stavi na Film.prototype — vraća koliko je film star.
// Testiraj.

// 14.

// Napraviti Sportista funkciju koja prima ime i sport.
// Dodati metodu predstaviSe na prototype:
// „Ja sam Ime i treniram Sport.”
// Napravi nekoliko sportista.

// 15.

// Kreiraj Racun funkciju sa broj i stanje.
// Na prototype dodaj uplati metodu koja uvećava stanje za zadatu sumu.
// Testiraj dva računa.

// 16.

// Napravi Igrac konstruktor sa ime.
// Dodaj pozdrav na prototype.
// Napravi instancu, pozovi pozdrav.
// Promeni pozdrav u prototype i proveri da li se instanci menja.

// 17.

// Napravi Zivotinja konstruktor sa vrsta.
// Dodaj glas na prototype.
// Napravi macka, koristi glas.
// Postavi macka.glas na novu funkciju.
// Pozovi opet — proveri da li koristi novu verziju.

// 18.

// Napraviti Grad konstruktor (naziv).
// Dodati metodu info.
// Napravi instancu i proveri:
// Gde je info u lancu (console.log + __proto__).

// 19.

// Dodaj drzava = "Srbija" na Grad.prototype.
// Napravi beograd i noviPazar — oba treba da vide drzava.
// Proveri beograd.hasOwnProperty("drzava").

// 20.

// Napraviti Osoba konstruktor.
// Napraviti Radnik konstruktor koji koristi Osoba.call(this, ...).
// Dodati pozdrav samo na Osoba.prototype.
// Proveri da li Radnik instance mogu da koriste pozdrav.
