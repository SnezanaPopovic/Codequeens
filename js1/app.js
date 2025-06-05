const moje_ime = "ajsa"; // mogu i "" i '' brojevi mpgu i ne moraju sa navodnicima, u navodnicima moze sve i prazan da bude i brojevi,slova a i znakovi
let Godine = 20; //let godine je deklaracija a let godine = 20; je inicijalizacija , godine je varijabla
student = false;
let brIndeksa;
brIndeksa = 83102;
let zanimanje = null;

// moje_ime = "hana"; //nije dozvoljeno jer je deklarisana sa const
// godine = 21;

// " " - String;
// 20 - Number;
// true false - boolean tip podataka
// 99999999999999999n - BigInt // ovo n u pozadini pretvara u BigInt (najveci broj moguci)

// let const
// let - moze da se menja vrednost
// const - ne moze da se menja vrednost
// da bi deklarisali promenljivu stavljamo let ili const
//inicijalizacija je dodela vrednosti, kad je nema onda je undifine
//deklaracija je sa let i const
//undifine i null -undifine je bez icega a null ima vrednost ali nema nista vrednost i dodeljuje je
// = je oprator dodele
// + - * / ++ -- %aritmeticki operatori
// ++ povecava za 1 , -- smanjuje za 1 (inkrementiranje i dekrementiranje) , ** stepen , // koren , % moduo

let broj1 = 10;
let broj2 = 2;

console.log(broj1 + broj2); //ispisace se 12 (10+2)
console.log("broj1" + "broj2"); //ispisace se tekst

let broj3 = "10";
let broj4 = "2";
console.log(broj3 + broj4); //ispisace se 102

//konkatenacija je spajanje dva stringa

let broj5 = "10";
let broj6 = 2;
console.log(broj5 + broj6); //ispisace se 102
//ako je jedan strin drugi namber onda se i to drugo pretvara u string i saberu se kao stringovi STRIN JE BTINIJI

let Broj1 = 11;
let Broj2 = 2;
let Broj3 = "100";
console.log(Broj1 + Broj2 + Broj3); //ispisace se 12100
console.log(Broj1 + Broj3 + Broj2); //ispisace se 10102

console.log(Broj1 - Broj2); //ispisace se 8
console.log(Broj1 - Broj2 - Broj3); //string postaje number i oduzme se
//KOD SABIRANJA NUMBER IDE U STRING string + number = string + string
//KOD ODUZIMANJA STRING IDE U NUMBER string - number =  number - number

console.log(Broj1 % Broj2); //moduo i dace 0
console.log(Broj1 ** 2); // 100
console.log(Broj3);
console.log(-Broj3);
console.log(+Broj3);
console.log(Number(Broj3)); //string se konvertuje u number

console.log(typeof Broj3); //ako ne znamo da li je string ili number ovako cemo znat jer se ispise u consoli
console.log(typeof Broj2);

console.log(Broj1);
Broj1++;
Broj1--;
console.log(Broj1);

Broj1 += 2; // novi nacin sabiranja , ako olvo ostane bez ispisivanja u console onda se nece nista pojavit
console.log(Broj1);

Broj1 += 2;
Broj1 -= 10;
Broj1 = Broj1 - 10;
console.log(Broj1); //11+2-10-10=-7

let brooj1 = 11;
let brooj2 = "11";
let brooj3 = "100";
console.log(brooj1 == brooj2); // == gleda samo vrednost true
console.log(brooj1 === brooj2); // === gleda i vrednost i tip false

console.log(brooj1 != brooj2); // === gleda dal je razlicita vrednost false
console.log(brooj1 !== brooj2); // === gleda dal i razlicita vrednost i tip true

console.log(brooj1 > brooj2); //false ako nije ni veci ni jednak
console.log(brooj1 < brooj2); //false

console.log(brooj1 >= brooj2); //true ako je veci ili jednak onda je true
console.log(brooj1 >= brooj2); //true

console.log(brooj1 <= brooj2); //true
console.log(brooj1 <= brooj2); //true

console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
//ako je bar jedan false onda je false

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
// || ako je bar jedan true onda je true

console.log(true || (false && false) || false); //true
console.log((true && false && false) || false); //false

const ime = "Snezana";
const godine = 19;
const godina_rodjenja = 2005;
console.log("Ja zovem se Snezana, imam 19 godina");
console.log(ime, godine);
console.log("ja se zovem", ime, "imam", godine, "godina"); //mora da se odvajaju zarezom varijable i stringovi

console.log(`Ja se zovem ${ime}, imam ${godine} godina`);
console.log(`Ja se zovem ${ime}, imam ${godine + 33} godina`);

console.log("Ja se zovem Snezana,rodjena sam 2005 godine");
console.log(`Ja se zovem ${ime}, rodjena sam ${godina_rodjenja} godine`);

// ${``} -template literals
