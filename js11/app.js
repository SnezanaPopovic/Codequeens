//do sad smo radili proste tipove a sad su SLOZENI ODNOSNO NIZOVI

// //nizovi, POP PUSH SHIFT UNSHIFT AT INCLUDES INDEXOF LASTINDEXOF CONCAT JOIN SLICE SPLICE

// let boja1 = "red"
// let boja2 = "green"
// let boja3 = "blue"

// // prvi nacin za nizove
// let boje = ["red", "green", "blue", 1, false]; //mozemo i niz u nizu da dodamo
// let boje2 = new Array() //preko konstruktora je drugi nacin

// console.log(boje[1],boje [2]) //prikazuje se tamo broj 5 to znaci koliko ima elemenata taj niz, ova strlica u consoli su indexi koji krecu od 0
// // ova [1] bira poziciju elementa iz niza
// // greenblue; hocemo zajedno da budu spojene boje bez odvajanja
// console.log(boje[1] + boje [2]) //preko plusa

// //boje [0] = "black"; //menjamo vrednost od red u black

// console.log(boje[3]) //ipisuje undefined jer nema taj element


//PUSH POP

// let boje = ["red","green","blue"]; //nacin izdrade se naziva ARRAY LITERAL

// // console.log(boje.lenght);

// // console.log(boje.push);

// console.log(boje.push("novi element"));//push ubacuje element na kraj , PUSDH JE METODA ILI FUNKCIJA, novi element je ARGUMENT, vraca novu duzinu

// console.log(boje.pop()); // POP UKLANJA POSLEDNJI ELEMENT, i vraca samo posl element
// console.log(boje);


// function add(a,b){
//     console.log("NESTO");
//     return a+b;
// }

// console.log(add(4,5));
// let zbir = add(4,5);




// function saberi(a,b){
//     console.log(a+b);
//     return a+b;
// }

// let vracenaVrednost = saberi(10,5); //vracamo i cuvamo vrednost


//SHIFT UNSHIFT

// let boje = ["red","green","blue"];

// console.log(boje);
// boje.push('novi element'); //dodaje na kraju
// boje.pop(); //macinje 'novi element'

// boje.shift(); //uklanja prvi element niza i vraca ga
// boje.unshift('unshift element'); //dodaje prvi element niza i vraca ga

// console.log(boje); // bice ('unshift element','green','blue');


//AT INCLUDES

//at ispisuje element po zadatom indeksu
// //includes vraca true ili false u odnosu na to da li je u nizu ili ne
// let boje = ["red","green","blue"];
// console.log(boje);

// // console.log(boje.at(2));
// // console.log(boje[1]); //isto kao sa AT

// console.log(boje.includes("red")); //true jer je u nizu

// console.log(boje);



//INDEXOF LAST INDEXOF
// indexof ako nadje vraca PRVU index prve vrednosti
//lastindexof ako nadje vraca zadnji index vrednosti

// let boje = ["red","green","blue","red"];
// console.log(boje);

// console.log(boje.indexOf("red"));
// console.log(boje.lastIndexOf("redddd")); // vraca -1 ako ne postoji u nizu
// console.log(boje.lastIndexOf("red"));

// console.log(boje);


//CONCAT
//concat dodaje novi niz na kraju
// let food = ["apple","walnuts"];
// console.log(boje.concat(food));


// let spojeniNiz = boje.concat(food);
// console.log(spojeniNiz);



//JOIN
//vraca string elemenata iz niza sa separatorom izxmddju ako hocemo, po default-u je ,
// let boje = ["red","green","blue"];
// console.log(boje);

// console.log(boje.join());

// console.log(boje);




//SLICE SPLICE
//splice ukljucuje prvi index i ispisuje do zadnjeg ALI NE I ZADNJI
let boje = ["red","green","blue"];
let food = ["apple","walnuts"];

let spojeniNiz = boje.concat(food);

console.log(spojeniNiz);
// console.log(spojeniNiz.slice(1,3));
console.log(spojeniNiz.splice(2)); //kreni od 2 i izbrisi sve posle I VRACA SVE OBRISANO I ISPISUJE, a sa zarezom i broj pored 
console.log(spojeniNiz.splice(2,2)); //kreni od 2 i izbrisi sve posle I VRACA SVE OBRISANO I ISPISUJE
// , a sa zarezom i broj pored UZIMA TAJ BROJ ELEMENATA
console.log(spojeniNiz);
