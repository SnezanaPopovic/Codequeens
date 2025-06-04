// 1. Zadatak:
// Napiši funkciju kvadrat(broj) koja vraća kvadrat tog broja.
// (kvadrat(5) => 25)

// function kvadrat(broj){
//     return broj * broj;
// }
// console.log(kvadrat(5));


// 2. Zadatak:
// Napiši funkciju jeParan(broj) koja vraća true ako je broj paran,
// a false ako nije.

// function jeParan(broj){
//     if(broj % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(jeParan(11));


// 3. Zadatak:
// Napiši funkciju maksimum(a, b) koja vraća veći od dva broja.
// Ako su a i b jednaki, vrati string "Brojevi su jednaki".

// function maksimum(a,b){
//     if( a > b){
//         return a;
//     }else if(a < b){
//         return b;
//     }else if( a === b){
//         console.log("brojevi su jednaki");
        
//     }
// }
// console.log(maksimum(10,10));


// 4. Zadatak:
// Napiši funkciju zbirDoN(n) koja računa zbir svih brojeva od 1 do n
// (koristi for petlju).

// function zbirDoN(n){
//     let zbir = 0;
//     for(let i=1; i<=n; i++){
//         zbir += i;
//     }
//     return zbir;
// }
// console.log(zbirDoN(4));
// console.log(zbirDoN(10));


// 5. Zadatak:
// Napiši funkciju stepen(baza, izlozilac) koja vraća rezultat baza
// na izlozilac. (koristi for, bez Math.pow ili operatora **)
// + ukoliko je izlozilac 1, odmah vratite bazu, a ako je 0, vratite 1.

// function stepen(baza,izlozilac){
//     if( izlozilac === 1){
//         return baza;
//     }else if(izlozilac === 0){
//         return 1;
//     }
//     let rezultat=1;
//     for(let i=0; i<izlozilac; i++){
//         rezultat *= baza;
//     }
//     return rezultat;
// }
// console.log(stepen(2,3));
// console.log(stepen(3,3));



// 6. Zadatak:
// Napiši funkciju brojCifara(n) koja vraća koliko cifara ima broj n.
// Hint: koristi while (n > 0) i n = Math.floor(n / 10).

// function brojCifara(n){
//     let brojCifara=0;
//     while(n > 0){
//         n = Math.floor(n / 10);
//         brojCifara++;
//     }
//     return brojCifara;
// }
// console.log(brojCifara(1111));



// 7. Zadatak:
// Napiši funkciju daLiJeProst(broj) koja vraća true ako je broj prost,
// u suprotnom false.
// Hint: Broj je prost ako je deljiv samo sa 1 i samim sobom.

// function daLiJeProst(broj){
//     if(broj <= 1){
//         return false;
//     }
//     for(let i=2; i<broj; i++){
//         if(broj % i === 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(daLiJeProst(13));
// console.log(daLiJeProst(10));


// 8. Zadatak:
// Napiši funkciju faktorijel(n) koja vraća n! — proizvod svih brojeva od 1 do n.
// Primer: faktorijel(4) vraća 24.
// (Koristi for ili while)

// function faktorijel(n){
//     if(n<0){
//         return "negativan broj";
//     }
//     let rezultat = 1;
//     for(let i=1; i<=n; i++){
//         rezultat *= i;
//     }
//     return rezultat;
// }
// console.log(faktorijel(4));



// 9. Zadatak:
// Napiši funkciju kalkulator(a, b, operator) koja koristi switch da izvrši sabiranje,
// oduzimanje, množenje ili deljenje na osnovu operator vrednosti (+, -, *, /).

// function kalkulator(a,b,operator){
//     switch(operator){
//         case '+': return a+b;
//         case '-': return a-b;
//         case '*': return a*b;
//         case '/': return a/b;
//     }
// }
// console.log(kalkulator(10,10,'+'));
//const rez = kalkulator(10,10,"+");


// 10. Zadatak:
// Napiši funkciju meni() koja u while petlji prikazuje meni korisniku:
// 1 - Kvadrat broja
// 2 - Da li je paran
// 3 - Zbir do N
// 0 - Izlaz

// function meni(izbor,n){
//     let izbor;
//     while(izbor !== 0){
//       console.log("Izaberite opciju:\n" +
//       "1 - Kvadrat broja\n" +
//       "2 - Da li je broj paran\n" +
//       "3 - Zbir do N\n" +
//       "0 - Izlaz");
//       izbor = +(prompt("izaberi operaciju:"));
//       if(izbor == 0) return;
//       let num = +(prompt("unesi br:"));
//         if(izbor === 1){
//             console.log(num **2);
//         }
//         else if(izbor == 2){
//             console.log(num % 2 ==0);
//         } else if(izbor == 3){
//             let zbir = 0 ;
//             for(let i=0; i<=num; i++)
//             zbir += i;
//             console.log(zbir);
//         }
//     }
// }
// meni();



// 11. Zadatak:
// Napiši funkciju zbirParnih(n) koja računa zbir svih parnih brojeva od 1 do n.
// Primer: zbirParnih(6) vraća 2 + 4 + 6 = 12

// function zbirParnih(n){
//     let suma=0;
//     for(let i=0; i<=n; i+=2){
//         suma += i; 
//     }
//     return suma;
// }
// console.log(zbirParnih(6));



// 12. Zadatak:
// Napiši funkciju zbirNeparnih(n) koja računa zbir svih neparnih brojeva od 1 do n.
// Primer: zbirNeparnih(5) vraća 1 + 3 + 5 = 9

// function zbirNeparnih(n){
//     let suma=0;
//     for(let i=0; i<=n; i++){
//         if(i % 2 != 0){
//             suma +=i;
//         }
//     }
//     return suma;
// }
// console.log(zbirNeparnih(5));


// 13. Zadatak:
// Napiši funkciju obrniBroj(n) koja vraća broj n sa obrnutim ciframa.
// Hint: koristi ostatak pri deljenju i množenje sa 10
// Primer: obrniBroj(123) vraća 321

// function obrniBroj(n){
//     let obrnuti = "";
//     let kopija = n;
//     while(kopijaBroja !== 0){
//         let trCifra;

//         trCifra = kopija % 10;
//         obrnuti +=trCifra;

//         kopijaBroja = Math.floor(kopija / 10);
    
//     }
//     return +obrnuti;
// }


// 14. Zadatak:
// Napiši funkciju sumaCifara(n) koja vraća zbir svih cifara broja.
// Primer: sumaCifara(1234) vraća 1 + 2 + 3 + 4 = 10

// function sumaCifara(n){
//     let suma=0;
//     while(n>0){
//         suma += n % 10;
//         n = Math.floor(n / 10);
//     }
//     return suma;
// }
// console.log(sumaCifara(1234));


// 15. Zadatak:
// Napiši funkciju proizvodCifara(n) koja vraća proizvod svih cifara broja.
// Primer: proizvodCifara(123) vraća 1 × 2 × 3 = 6

// function proizvodCifara(n){
//     let proizvod=1 ;
//     while(n>0){
//         proizvod *= n % 10;
//         n = Math.floor(n / 10);
//     }
//     return proizvod;
// }
// console.log(proizvodCifara(123));


// 16. Zadatak:
// Napiši funkciju daLiJeSavrsen(broj) koja vraća true ako je broj savršen.
// Savršen broj je jednak zbiru svojih delilaca (bez samog sebe).
// Primer: 6 → 1 + 2 + 3 = 6 → savršen broj

// function daLiJeSavrsen(broj){
//     let zbir=0;
//     for(let i=1; i<broj; i++){
//         if(broj % i === 0){
//             zbir +=i;
//         }
//     }
//     return zbir === broj;
// }
// console.log(daLiJeSavrsen(6));
// console.log(daLiJeSavrsen(12));



// 17. Zadatak:
// Napiši funkciju zbirDelilaca(broj) koja vraća zbir svih brojeva manjih od datog broja koji ga deli bez ostatka.
// Primer: zbirDelilaca(8) → 1 + 2 + 4 = 7

// function zbirDelilaca(broj){
//     let suma=0;
//     for(let i=0; i<broj; i++){
//         if(broj % i ==0){
//             suma +=i;
//         }
//     }
//     return suma;
// }
// console.log(zbirDelilaca(8));


// 18. Zadatak:
// Napiši funkciju daLiJeArmstrong(n) koja proverava da li je broj Armstrongov.
// Armstrongov broj: zbir kubova svih cifara je jednak broju.
// Primer: 153 → 1³ + 5³ + 3³ = 153

// function armstrongov(n){
//     let zbir=0;
//     let kopija=n;
//     let kopijaBroja = n;
//     while(kopijaBroja !== 0){
//         let trCifra;

//         trCifra = kopijaBroja % 10;
//         obrnuti +=trCifra ** 3;

//         kopija = Math.floor(kopija / 10);
    
//     }
//     return zbir == n;
// }


// 19. Zadatak:
// Napiši funkciju najmanjiDelilac(n) koja vraća najmanji prirodan delilac već od 1 (osim 1).
// Primer: najmanjiDelilac(15) vraća 3

// function najmanjiDelilac(n){
//     for(let i=2; i<=n; i++){
//         if(n % i == 0){
//             return i;
//         }
//     }
// }
// console.log(najmanjiDelilac(15));


// 20. Zadatak:
// Napiši funkciju zbirKvadrataDoN(n) koja vraća zbir kvadrata svih brojeva od 1 do n.
// Primer: zbirKvadrataDoN(3) → 1² + 2² + 3² = 14

// function zbirKvadrataDoN(n){
//     let suma=0;
//     for(let i=0; i<=n; i++){
//         suma += i*i
//     }
//     return suma;
// }
// console.log((zbirKvadrataDoN(3)));
