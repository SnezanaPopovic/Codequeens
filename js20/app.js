// //nastavak objekata,THIS

// //function () {}, //anonimna funkcija jer nema naziv ispred ()
// //arrow funkcije NEMAJU svoj THIS
// //obicne funkcije IMAJU svoj THIS

// const obj = {
//   name: "Ajsa", //'ime' je kljuc a 'ajsa' je vrednost
//   surname: "Besirovic",
//   age: 20,
//   godiste: 2005,
//   job: "web dev",
//   "user name": "ajsa.besirovic", //kljuc moze kakav god ali onda mora pod navodnicima
//   address: {
//     ulica: "Avnoja",
//     town: "Novi pazar",
//   },
//   hobbies: ["eat", "sleep", "train"],
//   greet: function () {
//     //anonimna funkcija
//     //greet automatski dodje naziv funkcije tjst ono pre ()
//     return `Pozdrav ${this.name}`; //this u pozadini prevodi u obj i uzima njegovu vrednost, koristi se samo unutar objekata
//   },
//   greetArrow: () => {
//     return `Pozdrav ${this.name}`;
//   },

//   person: function () {
//     return `Zovem se ${this.name} i prezivam se ${this.surname}.Imam ${this.age} godina , bavim se ${this.job}.
//     Zivim u ${this.address.town} u ulici ${this.address.ulica} i moj hobi je ${this.hobbies[2]}.`;
//   },
//   izracunajGodine: function () {
//     return 2025 - this.godiste;
//   },
// };
// const ime = obj.greet();
// console.log(ime);

// console.log(obj.person());
// console.log(obj.izracunajGodine());

// const osoba = {
//   ime: "Ajsa",
//   greet() {},
// };

// console.log(osoba);

// console.log(Object.hasOwn(osoba, "ime")); //Object je glavni/globalnin objekat

// console.log(osoba.hasOwnProperty("ime"));

// console.log(Object.keys(osoba, "ime")); //Object je glavni/globalnin objekat

// const nizKLjuceva = Object.keys(osoba).length; //vraca niz kljuceva
// const nizVrednosti = Object.values(osoba); // vraca ajsa i funkciju
// console.log(nizVrednosti);

// const nizUlaza = Object.entries(osoba); //pravi niz koji ima vise nizova, koliko ima nizova toliko parova
// console.log(nizUlaza);

// const objj = Object.fromEntries(nizUlaza);
// console.log(objj);

const auto = {
  marka: "bmw",
  model: "mx5",
  godina: 2022,
};

// const auto2 = {
//   //   godina: 2025,
//   ...auto,
//   godina: 2025,
//   boja: "crna",
// };

console.log(auto);

const auto2 = Object.assign({}, auto, { godina: 2025, boja: "crna" });
//kopira stari objekat i dodaje sta hocemo novo ocekuje dva ili vise argumenata, prvi je prazan jer da ce da se kopira zadati
console.log(auto2);

const auto3 = Object.create(auto); //uzima objekat i stavlja ga kao prototip
console.log(auto3);
console.log(auto3.godina);
