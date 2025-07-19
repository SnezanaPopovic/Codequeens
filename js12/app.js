//nizovi sa for petljama

// let boje = ['red','green','blue'];

// console.log(boje[0]);
// console.log(boje[1]);
// console.log(boje[2]);

// for(let index=0; index < boje.length; index++){
//     console.log(boje[index]);
// }



//1 nacin
// let niz = [];
// for(let i=1; i<11; i++){
//     niz.push(i);
// }
// console.log(niz);
// for(let i=9; i>0; i--){
//     niz.push(i);
// }
// console.log(niz);


//2 nacin
// let niz = [];
// for(let i=1; i<11; i++){
//     niz.push(i);
// }
// console.log(niz);
// for(let i=5; i<11; i++){
//     niz.unshift(i);
// }
// console.log(niz);



//obrisi prva 4 elementa
// let niz = [];
// for(let i=10; i>0; i--){
//     niz.push(i);
// }
// console.log(niz);

// for(let i=0; i<4; i++){
//     niz.shift();
// }
// console.log(niz);




//zbir elemenata niza
// let niz = [100,200,3];

// let zbir=0;
// for(let i=0; i<niz.length; i++){
//     zbir += niz[i];
// }
// console.log(niz);
// console.log(zbir);




//srednja vr niza
// let niz = [2,2,2,10];

// let zbir=0;
// let srednjavrednost=1;
// for(let i=0; i<niz.length; i++){
//     zbir += niz[i];
// }
// srednjavrednost = zbir / niz.length;
// console.log(niz);
// console.log(zbir);
// console.log(srednjavrednost);


//nadji najmanji broj u nizu
// let niz = [1,2,3,4];
// console.log(niz);

// let najmanji = niz[0];
// let najveci = niz[0];

// for(let i=1; i<niz.length; i++){
//     if(najmanji > niz[i]){
//         najmanji = niz[i];
//     }
//     else if(najveci < niz[i]){
//         najveci = niz[i];
//     }
// }
// console.log(najmanji);
// console.log(najveci);



//broj elemenata kopji su parni

// let niz = [1,2,3,4,5,6,7,8,9,10];
// let brojac=0;

// for(let i=0; i<niz.length; i++){
//     if(i % 2 == 0){
//         brojac++;
//     }
// }
// console.log(niz);
// console.log(brojac);


//broj elemenata vecih od 10


// let niz = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// let brojac=0;

// for(let i=0; i<niz.length; i++){
//     if(i > 10){
//         brojac++;
//     }
// }
// console.log(niz);
// console.log(brojac);


//ispisi sve elemente  unazad
