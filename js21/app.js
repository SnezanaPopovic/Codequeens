const osoba = {
ime: "Ajsa",
pozdrav() {
return `Pozdrav ${this.ime}`;
},
};
//osoba.pozdrav();

const osoba2 = {
ime: "Sumeja",
};

const pozdravFn = osoba.pozdrav;
console.log(pozdravFn()); //this ovde nema vrednost i zato je Pozdrav undefined(uzima vrednost globalnog objekta window), nece biti pozdrav Ajsa

// function ispisi() {
// console.log("cao");
// }
// ispisi();

// function vrati() {
// return "Cao";
// }
// console.log(vrati());

// function nesto() {
// console.log("hello");
// return "heloiii";
// }
// console.log(nesto());

//CALL APPLY BIND - ove metode explicitno dodeljuju vrednost nekog objekta na this

//CALL

pozdravFn.call(osoba2); //vrednost this je osoba2, this postaje osoba 2, kao argument postavljaju this, vise objekata koristi istu fju
pozdravFn.call(osoba);
//da je bilo osoba.ime bilo bi samo za tu osobu e posto imamo this onda mozemo za vise objekata da koristimo istu metodu

function personalizovanPoz(pridev) {
//ovde imamo fju sa parametrom
return `Pozdrav ${pridev} ${this.ime}`;
}
console.log(personalizovanPoz.call(osoba2, "naj"));

//1.
function predstavi(sektor, pozicija) {
console.log(
`Zovem se ${this.ime}, radim kao ${pozicija} u sektoru ${sektor}`
);
}
const osoba3 = {
ime: "Hana",
};
predstavi.call(osoba3, "marketing", "manadzer"); //dva argumenta, prvi je objekat drugi je parametar iz fje tj. string u ovom slucaju

//APPLY
predstavi.apply(osoba3, ["marketing", "manadzer"]); //dva argumenta, prvi je objekat drugi je niz

//BIND
const predstaviZaOsobu1 = predstavi.bind(osoba3, "mark", "menadz");
predstaviZaOsobu1(); //poziva novu fju, this je objekat koji smo postavili

// call mora imati +1 argument, prvi je this

function racunaj(cena, porez) {
console.log(`Ukupno: ${this.valuta} ${cena + cena * porez}`);
}
const rsd = { valuta: "RSD" };
const eur = { valuta: "C" };

const racunajRSD = racunaj.bind(rsd);
const racunajEUR = racunaj.bind(eur);

racunajRSD(100, 0.3); //cena porez
racunajEUR(100, 0.4);

//zadatak
const osoba5 = {
ime: "Milica",
pozdrav: function (grad, godina) {
console.log(`Zdravo, ja sam ${this.ime} iz ${grad}, imam ${godina} godina`);
},
};
const drugaOsoba = { ime: "Stefan" };

osoba5.pozdrav.call(drugaOsoba, "Novi Sad", 25);