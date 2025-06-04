// 1. Kalkulator
// Unesi dva broja i operaciju (+, -, *, /) pa pomoću switch uradi odgovarajuću operaciju i
// prikaži rezultat.

// let number1 = Number(prompt("unesite prvi broj:"));
// let number2 = Number(prompt("unesite drugi broj:"));
// let operacija =prompt("unesite zeljenu operaciju:");
// switch(operacija){
//     case "+": 
//     console.log(`rezultat je: ${number1 + number2}`);
//     break;
//     case "-": 
//     console.log(`rezultat je: ${number1 - number2}`);
//     break;
//     case '*': 
//     console.log(`rezultat je: ${number1 * number2}`);
//     break;
//     case "/": 
//     console.log(`rezultat je: ${number1 / number2}`);
//     break;   
//     default:
//         console.log("nepoznata operacija.");
//         break;
// }


// 2. Simulacija prodavnice
// Korisnik bira kategoriju proizvoda ("Hrana", "Elektronika", "Odeća") pomoću switch,
// zatim ispisuješ nekoliko proizvoda iz te kategorije.

// let kategorija = prompt("unesite kategoriju (Hrana,Elektronika,Odeća): ");
// switch(kategorija){
//     case "Hrana":
//         console.log("salata,meso,jaja,mleko...");
//         break;
//     case "Elektronika":
//         console.log("lap top,kompjuter,mis,tastatura...");
//         break;
//     case "Odeca":
//         console.log("haljina,suknja,majica,pantalone...");
//         break;
//     default:
//         console.log('uneli ste nepostojecu kategoriju!!');  
//         break;
// }




// 3. Ocena u rečima
// Unesi broj ocene (1-5) i pomoću switch ispiši tekstualni opis
// ("Nedovoljan", "Dovoljan", "Dobar", "Vrlo dobar", "Odličan").

// let ocena = Number(prompt("unesite broj ocene (1-5):"));
// switch(ocena){
//     case (1):
//         console.log("nedovoljan");
//         break;
//     case (2):
//         console.log("dovoljan");
//         break;
//     case (3):
//         console.log("dobar");
//         break;
//     case (4):
//         console.log("vrlo dobar");
//         break;
//     case (5):
//         console.log("odlican");
//         break;
//     default:
//         console.log("uneli ste pogresan broj!");
//         break;
// }



// for

// 1. Tablica množenja
// Za dati broj (npr. 5), ispiši njegovu tablicu množenja do 10.
// 5 * 1 = 5;
// 5 * 2 = 10;

// let number = Number(prompt("unesite broj:"));
// let rezultat;
// for(let i=1; number*i<=10; i++){
//     console.log(`${number}*${i} = ${number * i}`);
// }



// 2. Zbir elemenata
// Unositi brojeve 5 puta, zatim izračunati njihov zbir koristeći for petlju.

// let zbir = 0;
// for (let i = 1; i <= 5; i++) {
//     let broj = Number(prompt("unesite broj:"));
    //    zbir += broj;
// }
// console.log(`Zbir brojeva je: ${zbir}`);


// 3. Najveći broj
// Pronađi najveći i najmanji broj od 5 unetih brojeva.

// let najveci=0;
// let najmanji=0;
// for(let i=0; i<=5; i++){
//     let broj = Number(prompt("unesite brojeve:"));
//     if(broj<najmanji){
//         najmanji=broj;
//     } else if(broj>najveci){
//         najveci=broj;
//     }
// }
// console.log(`Najveći broj je: ${najveci}`);
// console.log(`Najmanji broj je: ${najmanji}`);


// 4. Proveri da li je broj prost
// Unesi broj i pomoću for petlje proveri da li je prost (prost broj je deljiv samo sa 1 i samim sobom).

// let broj = Number(prompt("Unesite broj za proveru:"));
// let prost = true;
// for (let i = 2; i < broj; i++) {
//     if (broj % i === 0) {
//         prost = false;
//         break; 
//     }
// }
// if (prost) {
//     console.log(`${broj} je prost broj.`);
// } else {
//     console.log(`${broj} nije prost broj.`);
// }


// 5. Faktorijel broja
// Izračunaj faktorijel broja n (npr. 5! = 5 × 4 × 3 × 2 × 1 = 120).

// let n = Number(prompt("Unesite broj:"));
// let faktorijel = 1;
// for (let i = 1; i <= n; i++) {
//     faktorijel *= i;
// }
// console.log(`Faktorijel broja ${n} je ${faktorijel}`);


// 6. Suma parnih brojeva do n
// Unesi broj n i izračunaj zbir svih parnih brojeva do n.

// let n = Number(prompt("unesite broj n:"));
// let suma=0;
// for(let i=2; i<n; i+=2){
//     suma +=i;
// }
// console.log(`Zbir svih parnih brojeva je: ${suma}`);


// 7. Deljivost sa 3 i 5
// Ispiši brojeve od 1 do 50 koji su deljivi sa 3 i/ili 5.

// for(let i=1; i<=50; i++){
//     if(i % 3 === 0 || i % 5 === 0){
//         console.log(i);   
//     }
// }


// 8. Srednja vrednost
// Unesi 5 brojeva i izračunaj njihovu srednju vrednost.

// let suma=0;
// for(let i=0; i<=5; i++){
//     let brojevi = Number(prompt("unesite pet brojeva:"));
//     let rezultat=suma/length(brojevi);
//     console.log(`srednja vrednost je ${vrednost}.`);
// }


// 9. Stepene broja 2
// Ispiši prve 10 stepena broja 2 (2¹, 2², 2³, ...).

// let stepen;
// for (let i = 1; i <= 10; i++) {
//     stepen = 2**i;
//     console.log(`2^${i} = ${stepen}`);
// }


// 10. Fibonacijev niz
// Ispiši prvih 10 brojeva Fibonacijevog niza. 1 1 2 3 5 8 13 21 34 55 ,
// (svaki naredni broj je zbir prethodna dva)

// let prvi = 1, drugi = 1;
// console.log(prvi); 
// console.log(drugi); 
// let niz;
// for (let i = 3; i <= 10; i++) { 
//     niz = prvi + drugi;
//     console.log(niz); 
//     prvi = drugi; 
//     drugi = niz; 
// }


// 11. Savršen broj
// Proveri da li je uneti broj savršen (broj čiji zbir delilaca, osim njega samog,
// daje isti broj, npr. 6 → 1+2+3=6).

// let broj = Number(prompt("unesite broj:"));
// let zbir= 0;
// for (let i = 1; i < broj; i++) {
//     if (broj % i === 0) { 
//         zbir += i; 
//     }
// }
// if (zbir === broj) {
//     console.log(`${broj} je savrsen`);
// } else {
//     console.log(`${broj} nije savrsen`);
// }