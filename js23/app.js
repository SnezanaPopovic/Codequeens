// //DOM - document object model,izgleda kao porodicno stablo

// const { createContext } = require("react");

// // console.dir(); za pretvaranje html u js u OBJEKTE, sve ispisuje a za log bi samo dao link html i tjt

// console.dir(document);

// const paragraf = document.getElementById("par"); //uzima element sa ti id
// // console.dir(paragraf);

// const p = document.getElementsByClassName("parKlasa")[1]; // vraca niz elemenata koji imaju tu klasu,mozemo preko indeksa

// console.log(document.getElementsByTagName("p")); //isto vraca niz,uzima elemente po tom tagu

// console.log(document.querySelector("#par")); // prima sve sto saljemo i moramo da naglasimo sta saljemo, VRACA PRVI
// console.log(document.querySelector(".parKlasa"));
// console.log(document.querySelector("p"));

// console.log(document.querySelectorAll("p")); // prima sve sto damo i vraca sve

// console.log(p);

// const div1 = document.createElement("div"); // ocekuje samo tag name, i sacuvala ga u varijablu, SAMO SAM SACUVALA
// const div2 = document.createElement("div");

// div1.innerText = "Div 1 inner text"; // div1 objekat,ocekuju string i ubacuju kao kontent
// div1.textContent = "div 1 text content"; // promenio se samo konkent,ocekuju string i ubacuju kao kontent

// div1.innerText += "Div 1 inner text"; // samo dodaje pored

// // div1.innerHTML = `<button>DUGME</button> `; // ubacuje kao dugme pravo
// // div1.innerText = `<button>DUGME</button> `; // ubbacice kao tekst

// document.body.appendChild(div1); //dodaje se,ocekuje bilo koji element koji hocemo da ubacimo u dokument i
// //  mora da se naglasi BODY,OCEKUJE ELEMENT TAG I NE MOXE STRING
// document.body.appendChild(div2);

// document.body.append("hello"); //ON PRIMA I STRINGOVE, ubacuje na kraju elementa

// div1.remove();

// div1.removeChild(div1.getElementsByTagName("button")[0]); //poziva se na roditelja

//ZADACI

// 2.
//  Koristi append da dodaš
// novi paragraf u postojeći div.

// Kreiraj div u HTML-u,
// a u JavaScript-u napravi novi <p> element
//  i dodaj ga pomoću append.

// const prviZadatakDiv = document.getElementById("prviZadatak");
// const paragraf = document.createElement("p");
// prviZadatakDiv.append(paragraf);

// 3.
//  Koristi appendChild da dodaš <li> u postojeću <ul>.
// Neka lista ima već bar jedan <li>,
// a ti dodaj još jedan pomoću appendChild.

// const drugizadatakUL = document.getElementById("drugiZadatak");
// const li = document.createElement("li");
// drugizadatakUL.appendChild(li);

//ili

// const ul = document.createElement("ul");
// document.body.append(li);

// const li = document.createElement("li");
// ul.append(li);

// 4. Koristi createElement da napraviš novi <button> i
// prikaži ga na stranici.
// Postavi mu neki tekst i dodaj ga u telo dokumenta.

// const button = document.createElement("button");
// button.textContent = "dugmence";
// document.body.appendChild(button);

// 5. Istraži razliku između innerText i textContent.
// Kreiraj element i isprobaj oba svojstva na istom elementu.
// Neka studenti uporede rezultate kad postoji display: none.

// const el = document.getElementById("test");
// console.log("innerTekst:", el.innerText);
// console.log("textContent:", el.textContent);
//zakljucak je da innertext ignorise display none, a text content ukljucuje display none

// 6. Koristi innerHTML da dodaš HTML kod u neki div.
// Neka div na početku bude prazan, a JavaScript neka ubaci <h2> i neki tekst.

// const div = document.getElementById("zadatak6");
// div.innerHTML = `<h2>Hello</h2>  <p>how are you?</p>`;

// 7. Koristi remove da obrišeš neki element sa stranice.
// Neka dugme briše <p> kada se klikne.

//uradjen u html

// 8. Koristi removeChild da obrišeš <li> iz <ul>.
// Neka lista ima više stavki, obriši drugu stavku.

// const lista = document.getElementById("zadatak8");
// lista.removeChild(lista.children[1]);
// ili
// lista.removeChild(lista.getElementsByTagName("li")[1]);

// 9. Kreiraj novi <div> pomoću createElement i dodaj ga u body pomoću appendChild.
// Napiši neki tekst unutar tog <div> pomoću innerText.

// const div1 = document.createElement("div");
// document.body.appendChild(div1);
// div1.innerText = `<h1>Hello</h1>`;

// 10. Napravi dva <p> elementa i dodaj oba u jedan <div> pomoću append.
// Neka <div> već postoji u HTML-u.

// const div = document.getElementById("zadatak10");
// const el1 = document.createElement("p");
// const el2 = document.createElement("p");

// div.append(el1, el2);

// 11. Koristi textContent da dodaš tekst u <h1> element koji već postoji u HTML-u.

// const h1 = document.getElementById("zadatak11");
// h1.textContent = `Hello zadatak11`;

// 12. Napravi <button> koji kada se klikne doda novi <li> u <ul>.
//uradjen u html

// 13. Napravi <button> koji kada se klikne obriše <div> pomoću remove.
//uradjen u html

// 14. Kreiraj prazan <div> i pomoću innerHTML ubaci dva <p> unutar njega odjednom.

// const div = document.getElementById("zadatak14");
// div.innerHTML = `<p>1</p> <p>2</p>`;

// 15. Kreiraj prazan <ul>, pa pomoću petlje (for) dodaj 5 <li> stavki pomoću appendChild.

// const ul = document.getElementById("zadatak15");
// for (let i = 0; i < 5; i++) {
//   const li = document.createElement("li");
//   ul.appendChild(li);
// }

// 16. Napravi <button> koji kada se klikne uklanja poslednji <li> iz <ul> pomoću removeChild.
//uradjen u html

// 17. Kreiraj <button> koji dodaje tekst "Kliknuto!" na kraj <div> pomoću append.
//uradjen html

// 18. Pomoću createElement napravi <span>, dodaj mu tekst pomoću textContent i ubaci ga u <p>.

// const span = document.createElement("span");

// span.textContent = `teksta span-a`;

// const p = document.getElementById("zadatak18");
// p.appendChild(span);
