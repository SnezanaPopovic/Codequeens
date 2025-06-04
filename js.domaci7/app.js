//MAP FILTER FIND

// 1.
// Imaš niz reči. Vrati niz njihovih dužina. (koristi length za stringove)
// ['kuća', 'auto', 'telefon'] → [4, 4, 7]


// const imena = ['kuca','auto','telefon'];
// const duzina = imena.map((el) => el.length);    

// console.log(imena);
// console.log(duzina);



// 2.
// Imaš niz brojeva. napravi niz boolean vrednosti koje govore da li je broj paran.
// [1, 2, 3] → [false, true, false]

// let niz = [1,2,3];

// const jeParan = niz.map((el) => el % 2 === 0);
// console.log(niz);
// console.log(jeParan);


// 3.
// Imaš niz ocena (1-5). Pretvori svaku ocenu u "loša", "dobra", "odlična".
// [2, 4, 5] → ['loša', 'dobra', 'odlična']

// let niz = [2,4,5];

// const nazivOcene = niz.map((el) => {
//     switch(el){
//         case 1: return "prelosa";
//         case 2: return "losa";
//         case 3: return "dobra";
//         case 4: return "vrlo dobra";
//         case 5: return "odlicna";
//     }
// });
// console.log(niz);
// console.log(nazivOcene);


// 4.
// Imaš niz cena u evrima. Pretvori ih u dinare (kurs 1€ = 117).
// [10, 25] → [1170, 2925]

// let niz = [10,25];
// let kurs = 117;
// const prebaci = niz.map((el) => el*kurs);
// console.log(niz);
// console.log(prebaci);


// 5.
// Imaš niz godina. Izdvoji samo punoletne.
// [15, 18, 21] → [18, 21]

// let niz = [15,28,21];

// const punoletni = niz.filter((el) => {
//     if(el >= 18){
//         return el;
//     }
// });
// console.log(niz);
// console.log(punoletni);


// 6.
// Imaš niz brojeva. Zadrži samo one deljive sa 3.
// [3, 5, 6, 8, 9] → [3, 6, 9]

// let niz = [3,5,6,8,9];

// const deljivi = niz.filter((el) => {
//     if(el % 3 === 0){
//         return el;
//     }else return null;
// });
// console.log(niz);
// console.log(deljivi);


// 7.
// Imaš niz reči. Izdvoji one koje imaju tačno 4 slova.
// ['kuca', 'pas', 'auto'] → ['kuca', 'auto']

// let reci = ['kuca','pas','auto'];

// const slova = reci.filter((el) => el.length === 4);
// console.log(reci);
// console.log(slova);

// 8.
// Imaš niz godina. Pronađi prvu punoletnu osobu.
// [15, 16, 18, 20] → 18

// let godine = [15,16,18,20];

// const punoletna = godine.find((el) => el >=18);
// console.log(godine);
// console.log(punoletna);

// 9.
// Pronađi prvi broj deljiv sa 7.
// [5, 13, 14, 21] → 14

// let niz = [5,13,14,21];
// const deljiv = niz.find((el) => el % 7 === 0);
// console.log(niz);
// console.log(deljiv);

// 10.
// Imaš niz brojeva. Pronađi prvi negativan broj.
// [5, -3, 2] → -3

// let niz = [5,-3,2];

// const negativni = niz.find((el) => el < 0);
// console.log(niz);
// console.log(negativni);





// 5.
// Imaš niz decimalnih brojeva. Zaokruži ih na najbliži ceo broj.
// [1.2, 2.7, 3.5] → [1, 3, 4]



// 6.
// Imaš niz brojeva. Pretvori ih u negativne brojeve (ako već nisu).
// [3, -5, 7] → [-3, -5, -7]


// 7.
// Imaš niz stringova. Dodaj znak uzvika (!) na kraj svakog.
// ['Bravo', 'Super', 'Odlično'] → ['Bravo!', 'Super!', 'Odlično!']

// const niz = ['Bravo', 'Super', 'Odlično'];

// const novi = niz.map((el) => el.push(!));

// console.log(niz);
// console.log(novi);
