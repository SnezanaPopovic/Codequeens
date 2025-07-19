
// * 
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
// for(let i=1; i<=5; i++){
//     let red="";
//     for(let j=1; j<=i; j++){
//         red +="*";
//     }
//     console.log(red);
// }
// for(let i=5; i>1; i--){
//     let red="";
//     for(let j=i; j>1; j--){
//         red +="*";
//     }
//     console.log(red);
// }




// * 
// **
// ***
// ****
// *****
// * 
// **
// ***
// ****
// *****
// * 
// **
// ***
// ****
// *****

// for(let k=1; k<=3; k++){
//     for(let i=1; i<=5; i++){
//         let red="";
//         for(let j=1; j<=i; j++){
//             red +="*";
//         }
//         console.log(red);
//     }
// }



// 1 
// 1 2
// 1 2 3
// 1 2 3 4





// FUNKCIJE

// function ispisiZdravo() {
//     console.log("Zdravo");
// }   

// ispisiZdravo();

// function ispisi(tekst = "niste poslali nista"){
//     console.log(tekst);
// }
// ispisi("ajsa");
// ispisi("besirovic");
// ispisi();


//proveri funkicjom da li je broj paran
function jeParan(broj){
    if(broj % 2 == 0){
        console.log(`Broj ${broj} je paran`);
    }else{
        console.log(`Broj ${broj} je neparan`);
    }
}

jeParan(5);
jeParan(10);
jeParan(1);