//STRINGOVI - metode
// toLowerCase,toUpperCase,charAt,startsWith,endsWith
//replace,trim,split
// let str = "hello10 g";

// str.length; //vraca broj karaktera u nizu
// console.log(str.includes("hello")); // proverava da li su slova mala, sve mora da je isto
// console.log(str.toLowerCase()); // ne modifikuju stari string, prave novi niz
// console.log(str.toUpperCase()); //sva velika slova

// console.log(str.indexOf("g")); //daje poziciju odredjenog slova u reci
// console.log(str.indexOf("h"));
// console.log(str.lastIndexOf("l")); //od pozadi

// console.log(str.charAt(5)); // upise se odredjeni broj pozicije i pokazace koje je slovo na datoj poziciji

// console.log(str.startsWith("hel")); //provera da li pocinje sa tim slovom ili recju VRACA TRUE ILI FALSE
// console.log(str.startsWith("hel8"));

// console.log(str.endsWith("g")); // isto provera ali od kraja

// const string = "Zdravo ja sam 'Sneza"; //moze sa '' i '"" ali ne moze sa """
// const string2 = "Zdravo ja sam "Sneza";
// console.log(string);
// console.log(string2)

// /n - prebacuje nas u novi red

// const string3 = "Zdravo/n ja sam \"Sneza';
// console.log(string3)

// const st = str.replace("ell", "ELL"); //zameni mi ell sa ELL, VRACA NOVI
// console.log(st);

// const stringg = " Zdravo";
// console.log(stringg.trim()); // uklanja space

// const nizz = stringg.split(""); //koji KARAKTER razdvaja i pravi space izmedju
// console.log(nizz);

// console.log(nizz.join("+"));

// ZADACI

// 1.vraća koliko jedno ime ima slova
let ime1 = "Mirela";
function vratiIme() {
  return ime1.length;
}
console.log(vratiIme());

// 2.pretvori string u velika slova

let ime2 = "sneza";
function velikaSlova() {
  return ime2.toUpperCase();
}
console.log(velikaSlova());

// 3.iz stringa imena i prezimena napravi inicijale dakle iz 'Ajsa Besirovic' => 'A.B.'

let ime3 = "Ajsa Besirovic";

function inicijali() {
  return (
    ime3
      .split(" ")
      .map((ime3) => ime3[0].toUpperCase())
      .join(".") + "."
  );
}
console.log(inicijali());

//4.pretvori rečenicu u niz reči, primer '     Hello world    ' => ['Hello','world']

let recenica = "   Hello world    ";

function ispravka() {
  return recenica.trim().split(/\s+/);
}
console.log(recenica);
console.log(ispravka());

//5.filtriraj reči kraće od 5 slova iz stringa

let reci = ["kuca", "trotoar", "lep", "stolica"];

function filtriranje() {
  return reci.filter((rec) => rec.length < 5);
}
console.log(reci);
console.log(filtriranje());

//6.broji koliko puta se neko slovo pojavljuje u stringu

//7.proverava da li je string palindrom (reverse)

//8.formatira email adresu korisnika, prima ime i prezime vraca 'ajsabesirovic@gmail.com'

//9.iz stringa pronađe sve reči koje počinju velikim slovom i vrati ih kao niz
