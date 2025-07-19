// const paragraf = document.getElementById("paragraf");
// console.dir(paragraf);

// paragraf.id = "par";

// console.log(paragraf.getAttribute("id")); // ocekuje naziv atributa
// console.log(paragraf.getAttribute("class")); // ocekuje naziv klase

// paragraf.setAttribute("title", "Ovo je title"); //ocekuju se dva argumenta, prvi je NAZIV drugi VREDNOST
// // ili
// paragraf.title = "Ovo je title";

// paragraf.removeAttribute("title");

// // paragraf.class = "prva"; NE MOZE JER JE CLASS OVDE SAMO READ ONLY

// paragraf.setAttribute("class", "prva"); //SAMO DVA ARGUMENTA
// //ili
// paragraf.className = "prva";
// paragraf.className += " druga";
// //ili
// paragraf.setAttribute("class", "prva druga");

// paragraf.classList.add("treca"); //ocekuje vr koju hocemo da dodamo , DODAJE IME KLASE
// paragraf.classList.remove("druga"); //uklanja ime klase koje zelimo
// console.log(paragraf.classList.contains("prva")); //proverava da li je sadrzi, FALSE OR TRUE

// //ZADATAK ,proveri da li sadrzi klasu prva ako sadrzi makni ako ne sadrzi dodaj
// if (paragraf.classList.contains("prva")) {
//   paragraf.classList.remove("prva");
// } else {
//   paragraf.classList.add("prva");
// }

// paragraf.classList.toggle("prva"); //OVO JE ISTO KAO GORE,AKO IMA MAKNE AKO NEMA DODAJE

// paragraf.classList.replace("prva", "NOVAKLASA"); //samo menja
// console.log(paragraf.classList.value); //samo vraca string
// console.log(paragraf.classList.length); //duzina

// paragraf.style.backgroundColor = "yellow";
// paragraf.setAttribute("style", "background-color: green;color:yellow");

// const btn = document.querySelector("button");
// const p = document.getElementById("klik");
// btn.addEventListener("click", () => {
//   p.textContent = "Kliknuto!";
// }); //ocekuju se dva argumennta,prvi je naziv eventa, drugi funkcija

//ZADACI
// 1. Neka HTML ima <a href="https://example.com">Link</a> – prikaži href u konzoli.

// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));

// 2. Kreiraj <img> bez src u HTML-u, a u JS postavi src.

// const img = document.getElementById("img");
// img.src = "https://example.com";

// 3. Neka dugme bude disabled, a klik na drugo dugme ga omogućava.

// const neaktivirano = document.getElementById("neaktivirano");
// const aktivirano = document.getElementById("aktivirano");
// neaktivirano.addEventListener("click", () => {});

// 4. Kreiraj <div> sa data-info="Test info" i pročitaj ga pomoću dataset.

// const div = document.getElementById("zadatak4");
// console.log(div.dataset.primer);

// 5. Dodaj klasu highlight na neki paragraf.

// const div = document.getElementById("zadatak5");
// div.classList.add("highlight");

// 6. Ukloni klasu active sa dugmeta kad se klikne.

// const div = document.getElementById("zadatak6");
// div.addEventListener("click", () => {
//   div.classList.remove("active");
// });

// 7. Na klik dugmeta dodaj/ukloni klasu dark-mode na body.

// const div = document.getElementById("zadatak7");
// div.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
// });

// 8. Napravi <button>. Kada se klikne, neka promeni tekst u "Kliknuto!"

// const div = document.getElementById("zadatak8");
// div.addEventListener("click", () => {
//   div.textContent = "Kliknuto!";
// });

// 9. Napravite <div> i <button>. Klikom na dugme menjaš boju <div> (ako je bela ➜ crvena ➜ bela).

// const div = document.getElementById("div");
// const dugme = document.getElementById("dugme");
// dugme.addEventListener("click", () => {
//   if (div.style.backgroundColor === "white") {
//     div.style.backgroundColor = "red";
//   } else {
//     div.style.backgroundColor   = "white";
//   }
// });

// 10. Kada pređeš mišem preko <div>, neka mu se poveća širina. Kada miš ode, vrati se na staro.

// const div = document.getElementById("zadatak10");
// div.addEventListener("mouseenter", () => { //moze onmouseover
//   div.style.width = "100px";
// });

// div.addEventListener("mouseleave", () => { //moze onmouseout
//   div.style.width = "50px";
// });

// 11. Na pritisak tastera "a" dodaj novi <p> sa tekstom "Pritisnuto A" u <body>.

// const btn = document.getElementById("zadatak11");
// const p = document.createElement("p");
// p.textContent = "Pritisnuto A";
// btn.addEventListener("click", () => {
//   document.body.append(p);
// });

// 12. Dugme koje broji koliko puta je kliknuto i ispisuje taj broj u <p>.

// const dugme = document.getElementById("dugme");
// const p = document.getElementById("brojac");
// let brojKlikova = 0;
// dugme.addEventListener("click", () => {
//   brojKlikova++;
//   p.textContent = `Broj klikova: ${brojKlikova}`;
// });

// 13. Klik na dugme ➜ dodaje novi list item sa tekstom "List item i odgovarajuci broj po redu" ispod.

// const dugme = document.getElementById("zadatak13");
// const lista = document.getElementById("lista");

// let brojac = 1;
// dugme.addEventListener("click", () => {
//   const listItem = document.createElement("li");
//   listItem.textContent = `List item ${brojac}`;
//   lista.appendChild(listItem);
//   brojac++;
// });
