<<<<<<< HEAD
// -------------------- REDUCE --------------------

//1.Izračunaj zbir svih brojeva.

// let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const rezultat = niz.reduce((akumulator, trElement) => {
//   return akumulator + trElement; // iz novog ponavljanja onda dolazi da je to vr akuatora
// }, 0);
// console.log(niz);
// console.log(rezultat);

//2. Izračunaj proizvod svih brojeva.

// let niz = [1, 2, 3, 4];

// const proizvod = niz.reduce((akumulator, el) => {
//   return akumulator * el;
// });
// console.log(niz);
// console.log(proizvod);

//3. Izračunaj zbir svih parnih brojeva.

// let niz = [1, 2, 3, 4, 5, 6];

// const zbirParnih = niz.reduce((akumulator, el) => {
//   return el % 2 === 0 ? akumulator + el : akumulator;
// }, 0);
// console.log(niz);
// console.log(zbirParnih);

//4. Izračunaj zbir kvadrata svih brojeva.

// let niz = [1, 2, 3, 4];

// const kvadrati = niz.reduce((akumulator, el) => {
//   return akumulator + el * el;
// }, 0);
// console.log(niz);
// console.log(kvadrati);

//5. Nađi najveći broj u nizu.

// let niz = [1, 2, 3, 5, 4];

// const najveci = niz.reduce((akumulator, el) => {
//   return el > akumulator ? el : akumulator;
// });
// console.log(niz);
// console.log(najveci);

//6. Nađi najmanji broj u nizu.

// let niz = [1, 2, 3, 5, 4, 0];

// const najmanji = niz.reduce((akumulator, el) => {
//   return el < akumulator ? el : akumulator;
// });
// console.log(niz);
// console.log(najmanji);

//7. Izračunaj prosečnu vrednost niza.

// let niz = [1, 2, 3, 4];

// const zbir = niz.reduce((akumulator, el) => akumulator + el, 0);
// const vrednost = zbir / niz.length;
// console.log(niz);
// console.log(vrednost);

//8. Prebroj koliko brojeva je manje od 0.

// let niz = [1, 2, -3, 0, -2, -5];

// const manjiOd0 = niz.reduce((akumulator, el) => {
//   return el < 0 ? akumulator + 1 : akumulator;
// }, 0);
// console.log(niz);
// console.log(manjiOd0);

//9. Saberi samo brojeve koji su deljivi sa 3.

// let niz = [1, 2, 3, 4, 5, 6];

// const deljivi = niz.reduce((akumulator, el) => {
//   return el % 3 == 0 ? akumulator + el : akumulator;
// }, 0);
// console.log(niz);
// console.log(deljivi);

//10. Kombinuj brojeve tako da praviš broj (npr. [1, 2, 3] → 123).

// let niz = [1, 2, 3, 4];

// const spojeniBroj = niz.reduce((akumulator, el) => {
//   return akumulator * 10 + el;
// }, 0);
// console.log(niz);
// console.log(spojeniBroj);
=======
// 1.
//  Napravi objekat `auto` koji ima sledeća svojstva: marka, model, godina, boje (niz boja).
//  - Dodaj svojstvo `vlasnik`
//  - Izmeni godinu
//  - Izbriši boje
//  - Ispisi samo marku i model

// const auto = {
//   marka: "nesto",
//   model: "vr",
//   godina: 2005,
//   boje: ["crvena", "plava", "zelena"],
// };

// auto.vlasnik = "Snezana Popovic";
// auto.godina = 2020;

// delete auto.boje;
// console.log(auto.marka);
// console.log(auto.model);

// 2.
// const korisnici = [
//   { ime: "Ajsa", godine: 20 },
//   { ime: "Hana", godine: 20 },
//   ... dodajte jos korisnika
// ];
//  Napravi novi niz imena svih korisnika (`map`).
//  Filtriraj korisnike starije od 18 godina (`filter`).
//  Ispiši korisnike čije ime ima 4 ili više slova

// const korisnici = [
//   { ime: "Ajsa", godine: 20 },
//   { ime: "Hana", godine: 20 },
//   { ime: "Snezana", godine: 20 },
//   { ime: "Mirela", godine: 22 },
//   { ime: "NIna", godine: 19 },
// ];

// const nizMap = korisnici.map((el) => el.ime);
// console.log("Imena:", nizMap);

// const punoletni = korisnici.filter((el) => el > 18);
// console.log("punoletni:", punoletni);

// const viseOd4 = korisnici.filter((el) => korisnici.ime.lenght >= 4);
// console.log("veci od 4 slova:", viseOd4);

// 3.
// const proizvodi = [
//   { naziv: "Majica", cena: 1200 },
//   { naziv: "Patike", cena: 6000 },
//   { naziv: "Kačket", cena: 800 },
//   { naziv: "Trenerka", cena: 3000 },
// ];
//  Filtriraj proizvode čija je cena manja od 3000
//  Iz rezultata napravi niz samo njihovih naziva (koristi `map`)

// const proizvodi = [
//   { naziv: "Majica", cena: 1200 },
//   { naziv: "Patike", cena: 6000 },
//   { naziv: "Kačket", cena: 800 },
//   { naziv: "Trenerka", cena: 3000 },
// ];

// const manji = proizvodi.filter((el)=> el.cena<3000);

// const noviNiz = manji.map((el)=> el.naziv);
// console.log(noviNiz);

// 4.
// let studenti = [
//   { ime: "Ajla", prosek: 9.1 },
//   { ime: "Mitar", prosek: 8.3 },
// ];
//  Dodaj još jednog studenta u niz
//  Izbriši studenta sa prosekom manjim od 9
//  Ispisi imena svih preostalih studenata

// let studenti = [
//   { ime: "Ajla", prosek: 9.1 },
//   { ime: "Mitar", prosek: 8.3 },
// ];

// studenti.push({ ime: "Ivana", prosek: 7.5 });

// studenti = studenti.filter((el) => el >= 9);

// const imena = studenti.map((el) => el.ime);
// console.log(imena);

// 5.
// const racuni = [
//   { naziv: "Struja", iznos: 3200 },
//   { naziv: "Voda", iznos: 800 },
//   { naziv: "Internet", iznos: 1500 },
// ];
//  Izračunaj ukupan iznos svih računa pomoću reduce

// const racuni = [
//   { naziv: "Struja", iznos: 3200 },
//   { naziv: "Voda", iznos: 800 },
//   { naziv: "Internet", iznos: 1500 },
// ];

// const iznos = racuni.reduce((acc,el) => acc+el.iznos,0);
// console.log(iznos);

// 6.
// const korisnici = [
//   { ime: "Ajla", aktivan: false },
//   { ime: "Hana", aktivan: false },
//   { ime: "Ena", aktivan: true },
// ];
//  Napravi funkciju koja vraca prvog korisnika koji je aktivan

// const korisnici = [
//   { ime: "Ajla", aktivan: false },
//   { ime: "Hana", aktivan: false },
//   { ime: "Ena", aktivan: true },
// ];
// function PrviAktivan(korisnici) {
//   return korisnici.find((el) => el.aktivan === true);
// }

// const aktivni = PrviAktivan(korisnici);
// console.log(aktivni);

// 7.
// const filmovi = [
//   { naslov: "Matrix", godina: 1999 },
//   { naslov: "Inception", godina: 2010 },
//   { naslov: "The Batman", godina: 2022 },
// ];
//  Dodaj svakom filmu novo svojstvo `star` koje je true ako je film stariji od 2015, false ako nije

// const filmovi = [
//   { naslov: "Matrix", godina: 1999 },
//   { naslov: "Inception", godina: 2010 },
//   { naslov: "The Batman", godina: 2022 },
// ];

// 8.
// const proizvodi = [
//   { naziv: "Monitor", cena: 15000 },
//   { naziv: "Tastatura", cena: 3000 },
//   { naziv: "Miš", cena: 2000 },
// ];

// Napravi fju koja vraca proizvod sa najvećom cenom

// const proizvodi = [
//   { naziv: "Monitor", cena: 15000 },
//   { naziv: "Tastatura", cena: 3000 },
//   { naziv: "Miš", cena: 2000 },
// ];

// function najvecaCena(proizvodi) {
//   return proizvodi.reduce((acc, el) => {
//     return el.cena > acc.cena ? el : acc;
//   }, proizvodi[0]);
// }
// const najskuplji = najvecaCena(proizvodi);
// console.log(najskuplji);
>>>>>>> 6d4079a (Domaci)
