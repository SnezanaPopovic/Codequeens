// do while

// let i=1;
// do{
//     console.log(i);
//     i++;
// }
// while(i<11);


//vezbe

// let lozinka = "tajna123";
// let unos;
// do{
//     unos = prompt("unesite lozinku:");
// }
// while(unos !== lozinka);
// console.log("dobrodosli");


// let pokusaji=0;
// let unos;
// do{
//     unos = prompt("unesite lozinku");
//     pokusaji++;
//     if( unos == "js123"){
//         console.log("dobrodosli");
//         break;
//     }else if(pokusaji === 3){
//         console.log("pristup odbijen");
//     }
// }while(pokusaji < 3);


// let broj;
// let tajni = 6;
// do{
//    unos = +prompt("unesi broj:");
// }while(unos != tajni);
// console.log("pogodili ste");

// let broj = Math.floor(Math.random() * 10 + 1);
// let pogodak = false;
// do{
//   let unos = +prompt("unesi broj:");
//   if(unos == broj){
//     console.log("pogodili ste broj");
//   }else{
//     console.log("niste pogodili broj");
//   }
// }while(pogodak != broj);


//ugnjezdene petlje

// for(let i=1; i<11; i++){
//     console.log("SPOLJASNJA PETLJA");//izvrsava se 10 puta
//     for(let j=1; j<11; j++){
//         console.log("UNUTRASNJA PETLJA");//izvrsava se 100 puta
        
//     }
// }



// for(let i=1; i<4; i++){
//     for(let j=1; j<4; j++){
//         console.log(`${i}*${j}=${i*j}`);
//     }
// }

// for(let i=5; i<=15; i+=5){
//     for(let j=1; j<=3; j++){
//         console.log(`${i}*${j}=${i*j}`);
//     }
// }
