//filter find

//MAP
// let niz = [1,2,3,4];

// const brojeviVeciOd2 = niz.map((el)=> {
//     if(el > 2) return el;
// });
// console.log(niz);
// console.log(brojeviVeciOd2);


//FILTER

// let niz = [1,2,3,4];

// const brojeviVeciOd2 = niz.filter((el)=> el > 2);
// console.log(niz);
// console.log(brojeviVeciOd2);



//vezbanje

// 1. ispisi parne bropjeve iz niza [1,2,3,4].
// let niz = [1,2,3,4];
// const novi = niz.filter((el) => el % 2 === 0);
// console.log(niz);
// console.log(novi);


// 2.ispisi reci krace od pet slova iz niza ['pas','automobil','kuca']
// let niz = ['pas','automobil','kuca'];
// const novi = niz.filter((el) => el.length < 5);
// console.log(niz);
// console.log(novi);


// 3.b=ispisi brojeve izmedju 10 i 100 iz random niza
// let niz = [2,400,39,99,50];
// const novi = niz.filter((el) => el > 10 && el <100);
// console.log(niz);
// console.log(novi);


// 4.ispisi brojeve vece od 5 iz niza [4,6,9,5]
// let niz = [4,6,9,5];
// const novi = niz.filter((el) => el > 5);
// console.log(niz);
// console.log(novi);


//FIND
//kad naidje prvi element koji ispunjava niz ispisuje samo TAJ JEDAN ELEMENT

// let niz = [99,300,200,400];

// const pronadji = niz.find((el) => el > 99 && el < 1000);
// console.log(niz);
// console.log(pronadji);



//vezbanje find

//1.
// let niz = [3,7,12,9];
// const novi = niz.find((el) => el>10);
// console.log(niz);
// console.log(novi);

//2.
// let niz = [1,3,7,8,10];
// const novi = niz.find((el) => el % 2 === 0);
// console.log(niz);
// console.log(novi);


//3.
// let niz = ['kuca','automobil'];
// const novi = niz.find((el) => el.length > 6);
// console.log(niz);
// console.log(novi);

//4.
// let niz = [1,2,-3,-5];
// const novi = niz.find((el) => el < 0);
// console.log(niz);
// console.log(novi);



let niz = [1,2,3,4,5,6];

const novi = niz.filter((el) => el % 2 === 0).find((el) => el < 10);
console.log(niz);
console.log(novi);

