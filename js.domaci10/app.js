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
