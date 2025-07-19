// Ispiši sve ključeve nekog objekta.
// (Koristi Object.keys(objekat), a zatim kroz forEach prodji kroz niz i ispisi)

// Saberi samo numeričke vrednosti.
// (Prođi kroz sve ključeve objekta sa forEach, i proveri da li je vrednost broj pomoću typeof. Ako jeste, dodaj ga na zbir. typeof var1 vam vraca tip varijable var1 kao number,string...)

// Prikaži "ključ: vrednost" koristeci forEach i entries
// (Object.entries(objekat) ti daje niz nizova: [ključ, vrednost]. Koristi obicnu for petlju da prikažeš svaki par u formatu koji sam stavila.)

// Napravi novi objekat koji kombinuje oba objekta na dva nacina
// (Koristi spread operator (...) ili Object.assign da spojiš dva objekta u novi. Ako imaju isto ime ključa, poslednji prepisuje vrednost.)

// Napravi novi objekat gde su ključevi i vrednosti zamenjeni
// (Prođi kroz Object.entries(objekat) sa for petljom, i za svaki par postavi: novaVrednost kao ključ, a stariKljuc kao vrednost.
// dakle ako je u starom objektu bilo ime:"ajsa", sad nek bude ajsa:"ime")

// Napravi funkciju koja proverava da li objekat ima svojstvo koje prosledite kao argument, i vratite 'ima' ili 'nema'
// (Koristi metodu hasOwnProperty("naziv") da proveriš da li objekat sadrži neki ključ, ako sadrzi vrati 'ima' ako ne 'nema')

// Napravi novi objekat koji sadrži samo "truthy" polja
// (Prođi kroz sve parove (Object.entries) i zadrži samo one gde je vrednost truthy (nije false, 0, itd))

const objekat1 = {
  ime: "Ajsa",
  prezime: "Perić",
  godine: 25,
  aktivan: true,
  bodovi: 0,
  opis: "",
  plata: 500,
};

const objekat2 = {
  godine: 30,
  grad: "Beograd",
  aktivan: false,
  bonus: 100,
};

// 1. Ispiši sve ključeve objekta
console.log("Svi ključevi:");
Object.keys(objekat1).forEach((kljuc) => {
  console.log(kljuc);
});

// 2. Saberi samo numeričke vrednosti
let zbir = 0;
Object.keys(objekat1).forEach((kljuc) => {
  if (typeof objekat1[kljuc] === "number") {
    zbir += objekat1[kljuc];
  }
});
console.log("Zbir numeričkih vrednosti:", zbir);

// 3. Prikaži "ključ: vrednost" koristeći entries
console.log("Ključ: vrednost parovi:");
for (let [kljuc, vrednost] of Object.entries(objekat1)) {
  console.log(`${kljuc}: ${vrednost}`);
}

// 4. Kombinuj dva objekta (dva načina)
const kombinovano1 = { ...objekat1, ...objekat2 }; // spread
const kombinovano2 = Object.assign({}, objekat1, objekat2); // Object.assign

console.log("Kombinovano (spread):", kombinovano1);
console.log("Kombinovano (assign):", kombinovano2);

// 5. Zameni ključeve i vrednosti
const zamenjeno = {};
for (let [kljuc, vrednost] of Object.entries(objekat1)) {
  zamenjeno[vrednost] = kljuc;
}
console.log("Zamenjeni ključevi i vrednosti:", zamenjeno);

// 6. Funkcija koja proverava da li objekat ima svojstvo
function proveriSvojstvo(obj, kljuc) {
  return obj.hasOwnProperty(kljuc) ? "ima" : "nema";
}

console.log("Provera za 'ime':", proveriSvojstvo(objekat1, "ime"));
console.log("Provera za 'grad':", proveriSvojstvo(objekat1, "grad"));

// 7. Novi objekat koji sadrži samo "truthy" vrednosti
const truthyObjekat = {};
Object.entries(objekat1).forEach(([kljuc, vrednost]) => {
  if (vrednost) {
    truthyObjekat[kljuc] = vrednost;
  }
});
console.log("Samo truthy vrednosti:", truthyObjekat);
