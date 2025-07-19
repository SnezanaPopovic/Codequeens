// // OBJEKTI -slozeni tip podatakam], u objektima se nalaze properti,pristupamo im preko kljuceva a ne preko indeksa
// //key,value,
// //kljucevi u pozadini postaju STRINGOVI
// //sve tipove podataka mozemo da cuvamo u objekte i nizove

// const osoba = {
//   ime: "Ajsa", //'ime' je kljuc a 'ajsa' je vrednost
//   prezime: "Besirovic",
//   godine: 20,
//   "user-name": "ajsa.besirovic", //kljuc moze kakav god ali onda mora pod navodnicima
//   adresa: {
//     ulica: "Avnoja",
//     grad: "Novi pazar",
//   },
//   hobiji: ["trcanhje", "odbojka", "kosarka", "fudbal"],
// };
// console.log(osoba);

// console.log(osoba.ime); // jedan nacin sa .
// console.log(osoba.prezime);

// console.log(osoba["ime"]); // drugi  nacin sa zagradama
// console.log(osoba["user-name"]);

// osoba.ime = "Snezana";
// console.log(osoba.ime);

// // osoba = {
// //   zanimanje: "programer",
// // };

// osoba["zanimanje"] = "programer";
// osoba.zanimanje = "programer";

// //brisanje
// delete osoba.ime;
// console.log(osoba.ime);

// // osoba.ime = "Ajsa";
// // osoba["ime"] = "Ajsa";

// console.log(osoba.adresa.ulica);

// for (let i = 0; i < osoba.hobiji.lenght; i++) {
//   console.log(osoba.hobiji[i]);
// }

//1.
// const telefon = {
//   brend: "iPhone",
//   model: "14proMax",
//   cena: 1000,
// };
// console.log(telefon);

// delete telefon.cena;
// console.log(telefon);


