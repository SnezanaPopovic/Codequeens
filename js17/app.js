// // const arr1 = [1, 2, 3]; //adresa
// // const arr2 = [arr1];

// // arr2.push(4);
// // console.log(arr1, arr2);

// const arr1 = [1, 2, 3, [0, 0, 0]]; //adresa
// const arr2 = [...arr1]; //... SPREAD operator (kopiranje sadrzaja),razlicita mesta u memoriji,ista vrednost u []

// // arr2 = [1, 2, 3];
// arr2.push(4);
// // console.log(arr1, arr2);

// // let a = "a"; //vrednost
// // let b = a;

// const arr3 = arr2;
// arr2.push("111");
// console.log(arr1, arr2, arr2);

// let broj = 3;

// if (broj > 5) {
//   console.log("broj je veci od 5");
// } else {
//   console.log("broj je manji od 5");
// }

// //?:, '?' je if ,a ':' je else , TERNARY OPERATOR(if else skraceno)
// broj > 5 ? console.log("br veci") : console.log("br manji");

//REDUCE metoda

//vraca jednu vrednpst, ne niz nego vrednost, ocekuje dva argumenta, (akumulator,trElement)=>{} to je call back
//ako nema ddrugog elementa onda je akumulator prvi el niza a trElement drugi element niza

//1.izracunaj zbir svih brojeva

// const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const rezultat = niz.reduce((akumulator, trElement) => {
//   return akumulator + trElement; // iz novog ponavljanja onda dolazi da je to vr akuatora
// }, 0);
// console.log(rezultat);
