// function funcDeclaration() {}; //function declaration
// let funcExpression = function(){};  //function exspression

// function saberiDeclaration(a,b){
//     return a+b;
// };

// let saberiExspression = function(a,b){ //kada funkcija nema naziv zove se ANONIMNA FUNKCIJA
//     return a+b;
// }; 

// saberiDeclaration(2,3);
// saberiExspression(2,3);


// // ARROW FUNCTION  () => {}; ... (idu parametri) => {return ..}; , => zbog toga se zove arrow function
// const funkcija = (a,b) => {
//     return a+b;
// };

// const arrowFn = a => a+10; //kad hocemo samo JEDAN parametar u () onda moze i bez zagrada, kao i u {} za return  




//da prebacimo neke funkcije od pre u sad ove arrow function

//OBICNE FUNKCIJE
// function jeParan(broj){
//     if(broj % 2 == 0){
//         console.log(`Broj ${broj} je paran`);
//     }else{
//         console.log(`Broj ${broj} je neparan`);
//     }
// }

//ARROW FUNCTION
// const jeParan = broj => {
//     if(broj % 2 == 0){
//         console.log(`Broj ${broj} je paran`);
//     }else{
//         console.log(`Broj ${broj} je neparan`);
//     }
// };


//MAP
//kao argument ocekuje FUNKCIJU, uzima svaki elemenat zasebno , i vraca novi niz
// let niz = [2,4,23,7,100];

// const noviNiz  = niz.map((el) => el + 10);  //za el+10 se podrazumeva return
// const kvadrati = niz.map((el) => el**2); //za el**2 se podrazumeva return
// console.log(noviNiz);
// console.log(kvadrati);


// //isto je kao i gore sa arrow function
// const povecaniZa10 = niz.map(function(el) {
//     return el+10;
// });



//ZADACI
// 1.
// Imaš niz brojeva. Pomnoži svaki broj sa 2.
// Input: [1, 2, 3] → Output: [2, 4, 6]

// let niz = [1,2,3];

// const novi = niz.map((el) => el*2);
// console.log(niz);
// console.log(novi);


// 2.
// Imaš niz stringova. Pretvori ih sve u velika slova. .toUpperCase()
// ['ana', 'marko'] → ['ANA', 'MARKO']


// let imena = ['marko','ana'];

// const velikaSlova = imena.map((el) => el.toUpperCase() );
// console.log(imena);
// console.log(velikaSlova);


// 3.
// Pretvori niz brojeva u niz njihovih kvadrata.
// [2, 3, 4] → [4, 9, 16]

// let niz= [2,3,4];

// const novi = niz.map((el) => el**2);
// console.log(niz);
// console.log(novi);


// 4.
// Imaš niz godina. Za svaku izračunaj koliko bi osoba imala 2030.
// [2000, 1995] → [30, 35]

// let niz = [2000,1995];

// const novi = niz.map((el) => 2030-el);
// console.log(niz);
// console.log(novi);


// 5.
// Iz niza imena napravi niz stringova "Pozdrav, [ime]!".
// ['Mila', 'Nikola'] → ['Pozdrav, Mila!', 'Pozdrav, Nikola!']

// let imena = ['Mila','Nikola'];

// const saPozdravom = imena.map((el) => `Pozdrav ${el}!`);
// console.log(imena);
// console.log(saPozdravom);

