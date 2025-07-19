let current = 1;
const dodajKnjiguBtn = document.getElementById("add-book");
const listaKnjiga = document.getElementById("book-list");
const obrisiSveKnjige = document.getElementById("clear-all");
const sortBtn = document.getElementById("sort-books");

//
function generisiRandomDatum() {
  const start = new Date(2000, 0, 1);
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
function formiranjeDatuma(datum) {
  const dan = datum.getDate();
  const mesec = datum.getMonth() + 1;
  const godina = datum.getFullYear();
  return `${dan}.${mesec}.${godina}.`;
}
//

dodajKnjiguBtn.addEventListener("click", () => {
  const input = document.getElementById("book-title");
  const inputValue = input.value.trim();

  if (inputValue === "") {
    alert("Unesite naslov knjige!");
    return;
  }

  const datumIzdavanja = generisiRandomDatum();
  const datumTekst = formiranjeDatuma(datumIzdavanja);

  const knjiga = document.createElement("div");
  knjiga.classList.add("book");
  knjiga.dataset.id = current++;
  knjiga.dataset.date = datumIzdavanja.toISOString(); // za sortiranje, toisostring prebacuje se vreme u tekst

  //
  knjiga.innerHTML = `
    <strong>${inputValue}</strong><br/>
    Datum izdavanja: ${datumTekst}<br/>
  `;
  //

  const procitanoBtn = document.createElement("button");
  procitanoBtn.innerText = "Pročitano";
  procitanoBtn.addEventListener("click", () => {
    knjiga.classList.add("read");
    azurirajBrProcitanih();
  });

  const ukloniBtn = document.createElement("button");
  ukloniBtn.innerText = "Ukloni";
  ukloniBtn.addEventListener("click", () => {
    knjiga.remove();
    azurirajBrProcitanih();
  });

  knjiga.appendChild(procitanoBtn);
  knjiga.appendChild(ukloniBtn);

  listaKnjiga.appendChild(knjiga);
  input.value = "";

  obrisiSveKnjige.disabled = false;
});

obrisiSveKnjige.addEventListener("click", () => {
  listaKnjiga.innerHTML = "";
  current = 1;
  obrisiSveKnjige.disabled = true;
});

//
sortBtn.addEventListener("click", () => {
  const knjige = Array.from(listaKnjiga.getElementsByClassName("book"));
  knjige.sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date));
  knjige.forEach((knjiga) => listaKnjiga.appendChild(knjiga));
});
//

function azurirajBrProcitanih() {
  const p = document.getElementById("read-counter");
  const procitane = listaKnjiga.getElementsByClassName("read").length;
  if (p) {
    p.innerText = `Pročitanih knjiga: ${procitane}`;
  }
}
