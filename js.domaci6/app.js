
// 1. Saberi sve brojeve u nizu.

// let niz = [100,200,3];

// let zbir=0;
// for(let i=0; i<niz.length; i++){
//     zbir += niz[i];
// }
// console.log(niz);
// console.log(zbir);


// 2. Izračunaj srednju vrednost brojeva u nizu.

// let niz = [2,2,2,10];

// let zbir=0;
// let srednjavrednost=1;
// for(let i=0; i<niz.length; i++){
//     zbir += niz[i];
// }
// srednjavrednost = zbir / niz.length;
// console.log(niz);
// console.log(zbir);
// console.log(srednjavrednost);


// 3. 4. Pronađi najmanji i najveci broj u nizu.

// let niz = [1,2,3,4];
// console.log(niz);

// let najmanji = niz[0];
// let najveci = niz[0];

// for(let i=1; i<niz.length; i++){
//     if(najmanji > niz[i]){
//         najmanji = niz[i];
//     }
//     else if(najveci < niz[i]){
//         najveci = niz[i];
//     }
// }
// console.log(najmanji);
// console.log(najveci);


// 5. Broj elemenata koji su parni.

// let niz = [1,2,3,4,5,6,7,8,9,10];
// let brojac=0;

// for(let i=0; i<niz.length; i++){
//     if(i % 2 == 0){
//         brojac++;
//     }
// }
// console.log(niz);
// console.log(brojac);


// 6. Broj elemenata većih od 10.

// let niz = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// let brojac=0;

// for(let i=0; i<niz.length; i++){
//     if(i > 10){
//         brojac++;
//     }
// }
// console.log(niz);
// console.log(brojac);


// 7. Ispisi sve elemente niza unazad (od kraja ka početku).

// const niz = [1,2,3,4,5];

// for (let i = niz.length - 1; i >= 0; i--) {
//   console.log(niz[i]);
// }

// 8. Kreiraj novi niz sa kvadratima elemenata niza.

// let niz = [1,2,3,4];
// let noviNiz = [];
// for(let i=0; i<niz.length; i++){
//     noviNiz.push(niz[i]**2);
// }
// console.log(niz);
// console.log(noviNiz);



// 9. Dupliraj svaki element niza.
// [1, 100, 50] => [1, 1, 100, 100, 50, 50]

// const niz = [1, 100, 50];
// const duplirani = [];

// for (let i = 0; i < niz.length; i++) {
//   duplirani.push(niz[i]);
//   duplirani.push(niz[i]);
// }
// console.log(niz);

// 10. Kreiraj novi niz sa samo parnim brojevima iz postojećeg.

// let niz = [1,2,3,4,5,6,7,8,9,10];
// let noviNiz = [];

// for(let i=0; i<niz.length; i++){
//     if(niz[i] % 2 === 0){
//         noviNiz.push(niz[i]);       
//     }
// }
// console.log(niz);
// console.log(noviNiz);

// 11. Obriši sve duplikate iz niza (ručno, bez Set).


// 12. Broj ponavljanja određenog broja u nizu.
// const niz = [1, 2, 3, 2, 4, 2];
// broj = 2 → rezultat: 3 puta

// let niz = [1,2,3,3,4,3,5];
// let trazenibroj = 3;
// let brojac = 0;

// for(let i=0; i<niz.length; i++){
//     if(niz[i] === trazenibroj){
//         brojac++;
//     }
// }
// console.log(niz);
// console.log(brojac);


// 13.  Zameni mesta prvom i poslednjem elementu.

// const niz = [1, 2, 3, 2, 4, 2];

// let prvi = niz[0];
// let poslednji = niz[niz.length - 1];

// niz[0] = poslednji;
// niz[niz.length - 1] = prvi;

// console.log(niz); 

// 14. Proveri da li niz sadrži određen broj (bez includes).

// let niz = [1,2,3,4];
// let trazeni = 5;
// let postoji = false;

// for(let i=0; i<niz.length; i++){
//     if(niz[i] === trazeni){
//         postoji = true;
//         break;
//     }
// }
// console.log(postoji);


// 15. const reci = ["pas", "kuca", "zmaj", "on"];
// Spoji dva niza u jedan (bez concat).

// const reci = ["pas", "kuca", "zmaj", "on"];
// const hrana = ["torta","kolac","pita"];
// const spojeniniz = [];

// for(let i=0; i<reci.length; i++){
//     spojeniniz.push(reci[i]);
// }
// for(let i=0; i<hrana.length; i++){
//     spojeniniz.push(reci[i]);
// }
// console.log(reci);
// console.log(hrana);
// console.log(spojeniniz);


// 16. Sortiraj niz brojeva ručno.

// const niz = [5,3,8,1,2];
// for(let i=0; i<niz.length -1; i++){
//     for(let j=0; j<niz.length-1-i; i++){
//         if(niz[j] > niz[j+1]){
//             const temp = niz[j];
//             niz[j] = niz[j+1];
//             niz[j+1] = temp;
//         }
//     }
// }
// console.log(niz);


// 17. Proveri da li je niz palindrom (čita se isto s leva i s desna).
// const niz = [1, 2, 3, 2, 1]; jeste palindrom

// const niz = [1,2,3,2,1];
// let palindrom = true;

// for(let i=0; i< niz.length / 2; i++){
//     if(niz[i] !== niz[niz.length - 1 - i]){
//         palindrom = false;
//         break;
//     }
// }
// console.log(palindrom);


// 18.  Kreiraj novi niz koji sadrži samo jedinstvene elemente (ručno, bez Set)