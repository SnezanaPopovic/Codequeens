//FOREACH
//vraca undifine, i koristimo je u for petlji za ispisivanje
// let niz = ["A", 1, 3, 500, "L"];

// for (let i = 0; i < niz.length; i++) {
//   console.log(niz[i]);
// }

// niz.forEach((trElement,index,array) => {
//   console.log(trElement);
// });

//1.Ispiši svaki broj u nizu.

// let niz = [1, 3, 500];

// niz.forEach((trElement) => {
//   console.log(trElement);
// });

//2.Ispiši kvadrat svakog broja.

// let niz = [1, 3, 50];

// niz.forEach((el) => {
//   console.log(el * el);
// });

//3.Ispiši poruku: "Broj X je paran/neparan".

// let niz = [1, 2, 3, 4, 5, 6];

// niz.forEach((el) => {
//   if (el % 2 === 0) {
//     console.log(`broj ${el} je paran`);
//   } else console.log(`broj ${el} je neparan`);
// });

//4.Saberi sve brojeve i ispiši zbir (koristi promenljivu van forEach).

// let niz = [1, 2, 3];
// let zbir = 0;

// niz.forEach((el) => {
//   zbir += el;
// });
// console.log(zbir);

//5.Prebroj koliko brojeva u nizu je veće od 10.

// let niz = [1, 2, 10, 11, 12];
// let brojac = 0;

// niz.forEach((el) => {
//   if (el > 10) brojac++;
// });
// console.log(brojac);

//6.Ispiši redni broj (indeks) i vrednost svakog broja.

// let niz = [1, 2, 3, 4];

// niz.forEach((el,index) => {
//   console.log(el,index);
// });

//7.Ispiši dvostruku vrednost samo parnih brojeva.

// let niz = [1, 2, 3, 4];

// niz.forEach((el) => {
//   if (el % 2 === 0) {
//     console.log(el * el);
//   }
// });

//8.Ispiši sve brojeve koje kada podeliš sa 5 daju ostatak 2.

// let niz = [12, 14, 10, 15];

// niz.forEach((el) => {
//   if (el % 5 === 2) {
//     console.log(el);
//   }
// });

//9.Nađi najveći broj u nizu koristeći forEach.

// let niz = [1, 2, 3, 10, 4, 5];
// let najveci = [0];
// niz.forEach((el) => {
//   if (el > najveci) {
//     najveci = el;
//   }
// });
// console.log(najveci);

//10.Napravi zbir svih pozitivnih brojeva
// let niz = [1, 2, -5, -1, 10];
// let zbir = 0;

// niz.forEach((el) => {
//   if (el > 0) {
//     zbir += el;
//   }
// });
// console.log(zbir);

// let niz = [10, 20, 30, 40, 50];

// niz.forEach((el, index, nizz) => {
//   console.log(el);
//   console.log(index);
//   console.log(nizz);
// });

//truthy vs falsy values

// let user = "ajsa";

// if (user) {
//   console.log("dobrodosla " + user);
// }

// if (0) {
//   console.log("dobrodosla " + user);
// }
