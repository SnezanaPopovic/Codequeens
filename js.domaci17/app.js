// 1. To-Do lista sa čuvanjem u localStorage
// Korisnik unosi zadatke u formu, oni se prikazuju u listi i čuvaju u localStorage. Nakon refresh-a zadaci ostaju.

// Dodaj novi zadatak i čuvaj ga
// Prikazuj sve zadatke prilikom učitavanja stranice
// Omogući brisanje jednog zadatka
// Dodaj "Obriši sve"

const forma = document.getElementById("form");
const unos = document.getElementById("unesiZadatak");
const lista = document.getElementById("lista");
const dugmeObrisiSve = document.getElementById("obrisi");

let zadaci = JSON.parse(localStorage.getItem("zadaci")) || [];

function sacuvaj() {
  localStorage.setItem("zadaci", JSON.stringify(zadaci));
}

// 2. Pretraga i čuvanje poslednje unete vrednosti
// Korisnik unosi tekst za pretragu (npr. proizvoda, korisnika). Poslednja uneta vrednost se čuva u localStorage
//  i prikazuje se prilikom ponovnog otvaranja stranice.
// Na svaki input, čuvaj vrednost u localStorage
// Prilikom učitavanja stranice, ako postoji prethodni unos, postavi ga u input
// Dodaj dugme "Resetuj pretragu" koje briše i iz inputa i iz localStorage

const input = document.getElementById("input");
const resetBtn = document.getElementById("resetBtn");
const storage = "poslednjaPretraga";

const sacuvanaVrednost = localStorage.getItem(storage);
if (sacuvanaVrednost) {
  input.value = sacuvanaVrednost;
}
input.addEventListener("input", () => {
  localStorage.setItem(storage, input.value);
});
resetBtn.addEventListener("click", () => {
  input.value = "";
  localStorage.removeItem(storage);
});

// 3. Forma za unos korisničkog imena (personalizacija)
// Korisnik unosi svoje ime, a ono se pamti u localStorage i sledeći put se prikazuje poruka: "Zdravo, [ime]!"
// Čuvanje username u localStorage
// Prikaz personalizovane poruke
// Dugme za "Izmeni ime" koje uklanja ime iz localStorage

const imeInput = document.getElementById("username");
const sacuvajBtn = document.getElementById("sacuvajBtn");
const imeForma = document.getElementById("imeForma");
const pozdravDiv = document.getElementById("pozdrav");
const pozdravPoruka = document.getElementById("pozdravPoruka");
const izmeniBtn = document.getElementById("izmeniBtn");

const imeKey = "korisnickoIME";
const sacuvanoIme = localStorage.getItem(imeKey);
if (sacuvanoIme) {
  prikaziPozdrav(sacuvanoIme);
}

sacuvajBtn.addEventListener("click", () => {
  const ime = imeInput.value.trim();
  if (ime !== "") {
    localStorage.setItem(imeKey, ime);
    prikaziPozdrav(ime);
  }
});

izmeniBtn.addEventListener("click", () => {
  localStorage.removeItem(imeKey);
  pozdravDiv.style.display = "none";
  imeForma.style.display = "block";
  imeInput.value = "";
});

function prikaziPozdrav(ime) {
  pozdravPoruka.textContent = `Zdravo, ${ime}!`;
  imeForma.style.display = "none";
  pozdravDiv.style.display = "block";
}

// 4. Omiljene boje – stilovi sačuvani u localStorage
// Korisnik bira omiljenu boju pozadine (iz padajuće liste ili dugmića). Boja se čuva i ostaje i nakon refresh-a.
// Primena style.backgroundColor
// localStorage set/get
// Reset na podrazumevanu boju

const kljucBoje = "omiljenaBoja";
const podrazumevanaBoja = "white";

const sacuvanaBoja = localStorage.getItem(kljucBoje);
if (sacuvanaBoja) {
  document.body.style.backgroundColor = sacuvanaBoja;
}

function promeniBoju(boja) {
  document.body.style.backgroundColor = boja;
  localStorage.setItem(kljucBoje, boja);
}

function resetujBoju() {
  document.body.style.backgroundColor = podrazumevanaBoja;
  localStorage.removeItem(kljucBoje);
}

// 5. Mini kviz – sačuvaj rezultat
// Korisnik odgovori na 3 pitanja. Rezultat (broj tačnih) se čuva u localStorage i prikazuje sledeći put.
// Brojanje tačnih odgovora
// Čuvanje rezultata
// Prikaz "najboljeg rezultata" ako postoji

// 6. Favoriti (klikom na srce ❤️ sačuvaj proizvod)
// Na stranici se nalaze proizvodi sa dugmetom "❤️". Klikom na to dugme, proizvod
// se dodaje u listu favorita (čuvanu u localStorage).
// Manipulacija DOM-om
// Čuvanje niza objekata (id proizvoda, ime itd.)
// Dodaj stranicu "Moji favoriti"
