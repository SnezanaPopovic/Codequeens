// 1.
// Imaš niz godina. Izdvoji samo punoletne.

// let niz = [2,20,18,30,10,17];

// const punoletni = niz.filter((el) => el >= 18);
// console.log(niz);
// console.log(punoletni);


// 2.
// Imaš niz godina. Pronađi prvu punoletnu osobu.

// let niz = [2,20,18,30,10,17];

// const punoletni = niz.find((el) => el >= 18);
// console.log(niz);
// console.log(punoletni);


// 3.
// Imaš niz reči. Izdvoji one koje imaju tačno 4 slova.

// let niz = ['kuca','posao','auto','kamion'];

// const izdvojene = niz.filter((el) => el.length === 4);
// console.log(niz);
// console.log(izdvojene);


// 4.
// Imaš niz brojeva. Zadrži samo one deljive sa 3.

// let niz = [1,2,3,4,5,6,7,8,9];

// const deljivi = niz.filter((el) => el % 3 === 0);
// console.log(niz);
// console.log(deljivi);


// 5.
// Sacuvaj prvi broj deljiv sa 7.

// let niz = [1,2,7,14,20];

// const deljivi = niz.find((el) => el % 7 === 0);
// console.log(niz);
// console.log(deljivi);


// 6.
// Imaš niz brojeva. Pronađi prvi negativan broj.

// let niz = [1,2,3-5,-1,10];

// const negativni = niz.find((el) => el<0);
// console.log(niz);
// console.log(negativni);


// 7.
// Pronađi prvi broj koji je deljiv i sa 3 i sa 5.

// let niz = [1,2,3,15,5];

// const negativni = niz.find((el) => el % 3 === 0 && el % 5 === 0);
// console.log(niz);
// console.log(negativni);


// 8.
// Pronađi prvi broj koji je kvadrat nekog celog broja (npr. 4, 9, 16...). koristite built in f-je




// 9.
// Pronađi prvi prost broj u nizu.

// let niz = [10,7,11,20];

// const prost = niz.find(el => {
//   for (let i = 2; i <= Math.sqrt(el); i++) {
//     if (el % i === 0) return false;
//   }
//   return true;
// });
// console.log(niz);
// console.log(prost);


// 10.
// Pronađi prvi broj koji nije deljiv ni sa jednim brojem od 2 do 10.

// let niz = [2,4,11,13,20];

// const deljivi = niz.find((el) => {
//     for(let i=2; i<=10; i++){
//         if(el % i === 0) return false;
//     }
//     return true;
// });
// console.log(niz);
// console.log(deljivi);


//11.
// Zadatak je da iz niza celih brojeva izdvojiš sve parne brojeve,
// zatim izračunaš njihove kvadrate i na kraju pronađeš prvi broj u tom nizu kvadrata koji je veći od 100.

// let niz = [4,5,12,14,10];

// const izracunavanje = niz.filter((el) => el % 2 === 0).map((el) => el*el).find((el) => el > 100);
// console.log(niz);
// console.log(izracunavanje);


//12.
// Prvo filtrirati pozitivne brojeve, zatim proveriti da li su prosti (možeš koristiti pomoćnu funkciju),
// kvadrirati ih, i na kraju filtrirati one čiji kvadrat nije deljiv sa 3.

// let niz = [2,-5,10,-12,14];

// function prosti(n){
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// };

// const novi = niz.filter((el) => el>0).filter(prosti).map((el) => el*el).filter((el) => el % 3 !== 0);
// console.log(niz);
// console.log(novi);   

