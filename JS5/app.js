// while i do while


// 1. Ispis brojeva od 1 do 10
// Napiši program koji pomoću while petlje ispisuje brojeve od 1 do 10.

// let i = 1;
// while(i < 11){
//     console.log(i);
//     i++;
// }

// 2. Suma unetih brojeva
// Korisnik unosi brojeve dok ne unese nulu.
// Program na kraju ispisuje zbir svih unetih brojeva (osim nule).


// let brojevi = Number(prompt("unesite brojeve:"));
// let suma=0;
// while(brojevi!=0){
//     brojevi = Number(prompt("unesite brojeve:"));
//     suma+=brojevi;
// }
// console.log(`suma je ${suma}`);




// ----- DOMACI -----

// 3. Pogodi broj
// Program bira slučajan broj od 1 do 10 (koristi ovaj izraz ---- Math.floor(Math.random() * 10 + 1) ----),
// a korisnik pogađa dok ne pogodi tačan broj.

// 1.nacin 
// let tajni = Math.floor(Math.random() * 10 + 1);
// let pogodak = false;
// while(!pogodak){
//   let unos = +prompt("unesi broj:");
//   if(unos === tajni){
//     console.log("pogodili ste broj");
//     pogodak = true;
//   }else{
//     console.log("niste pogodili broj;");
//   }
// }

// 2.nacin 
// let tajni = 4;
// let unos;
// while(unos != tajni){
//    unos = +prompt("unesi broj:");
// }
// console.log("pogodili ste");


// 4. Ispis svih parnih brojeva između 1 i 100 (while)
// Pomoću while petlje ispiši sve parne brojeve između 1 i 100.

// let i = 2;
// while(i<=100){
//     console.log(i);
//     i += 2;
// }


// 5. Unos lozinke
// Program traži od korisnika da unese lozinku. Ako lozinka nije "tajna123",
// traži ponovni unos. Kada unese tačnu lozinku, ispiši poruku dobrodošlice

// let lozinka = prompt("unesite lozinku:");
// while( lozinka != "tajna123"){
//     lozinka = prompt("unesite ponovo lozinku!");
// }
// console.log("Dobrodosao/la");



// 6. Provera da li je broj prost
// Korisnik unosi broj, a program proverava da li je taj broj prost (deljiv samo sa 1 i samim sobom).
// Koristi while petlju za proveru deljivosti.

// let broj = +prompt("unesite broj:");
// let prost = true;
// let i=2;
// while(i < broj){
//     if(broj % i === 0){
//     prost = false;
//     break;
//    }
//  i++;
// }
// if (prost) {
//     console.log(`${broj} je prost broj.`);
// } else {
//     console.log(`${broj} nije prost broj.`);
// }


// 7. Kalkulator sa menijem
// Napravi meni koji korisniku daje sledeće opcije:
// Sabiranje
// Oduzimanje
// Množenje
// Deljenje
// Izlaz
// Korisnik bira opciju i unosi dva broja, a program ispisuje rezultat.
// Meni se ponavlja dok korisnik ne izabere opciju "Izlaz".
// (switch + while).

// let meni = prompt("unesite opciju:");
// while(meni != "izlaz"){
//     switch(meni){
//         case "sabiranje":
//             broj1 = +prompt("unesite prvi broj:");
//             broj2 = +prompt("unesite drugi broj:");
//             console.log(`${broj1} + ${broj2} = ${broj1+broj2}`);
//             break;
//         case "oduzimanje":
//             broj1 = +prompt("unesite prvi broj:");
//             broj2 = +prompt("unesite drugi broj:");
//             console.log(`${broj1} - ${broj2} = ${broj1-broj2}`);
//             break;
//         case "mnozenje":
//             broj1 = +prompt("unesite prvi broj:");
//             broj2 = +prompt("unesite drugi broj:");
//             console.log(`${broj1} * ${broj2} = ${broj1*broj2}`);
//             break;
//         case "deljenje":
//             broj1 = +prompt("unesite prvi broj:");
//             broj2 = +prompt("unesite drugi broj:");
//             console.log(`${broj1} / ${broj2} = ${broj1/broj2}`);
//             break;
//     }
//     break;
// }


// nzm
// 8. Provera da li je broj palindrom (npr. 121, 1331)
// Korisnik unosi broj, a program proverava da li je isti kada se pročita unazad.



// nzm
// 9. Brojanje cifara unetog broja
// Korisnik unosi broj, a program broji koliko cifara ima taj broj.



// 10. Pogodi lozinku sa ograničenim brojem pokušaja
// Korisnik ima 3 pokušaja da pogodi lozinku "js123".
// Ako pogodi, ispisuje "Dobrodošao!", inače "Pristup odbijen."

// let lozinka = prompt("Unesite lozinku:");
// let i = 0;
// let maxPokusaji = 3;

// while (i < maxPokusaji) {
//   if (lozinka === "js123") {
//     console.log("Dobrodošao!");
//     break;
//   } else {
//     i++;
//     if (i < maxPokusaji) {
//       lozinka = prompt("Pogrešna lozinka. Preostalo pokušaja: " + (maxPokusaji - i) + ". Unesite ponovo:");
//     }
//   }
// }
// if (i === maxPokusaji) {
//   console.log("Pristup odbijen.");
// }
