// // alert prompt confirm   POP UP BOX

// alert("Uspesno ste se ulogovali."); //blokira dalje izvrsavanjhe koda dok se ne taksne OK

// let podatak = Number(prompt("Unesite nesto: ")); //da bi sacuvali to sto se upise u prompt  koriste se varijable promenljive sa let ili const
// console.log(podatak, typeof podatak); // u PROMPT sta god se unelo UVEK se gleda kao string, ako hocemo number onda stavimo pre prompta number
// //NaN not a number

// let odgovor = confirm("Da li ste zadovoljni? ");
// console.log(odgovor); //vraca true ili false


// //unutar {} se naziva if block
// if(odgovor == true){
//     console.log("If je izvrsen.");
// }
// else{
//     console.log("Else je izvrsen.")
// }



// let number = Number(prompt("Unesite neki broj: "));

// if(number > 10){
//     console.log(`Broj ${number} je veci od 10.`);
// }
// else{
//     if(number == 10){
//         console.log("Brojevi su jednaki.");
//     }
//     else{
//         console.log(`Broj ${number} je manji od 10.`);
//     }
// }

// if (number > 1){
//     console.log("broj je veci od 1.");
// }
// if (number > 2){
//     console.log("broj je veci od 2.");
// }
// if (number > 3){
//     console.log("broj je veci od 3.");
// }
// if (number > 4){
//     console.log("broj je veci od 4.");
// }
// if (number > 5){
//     console.log("broj je veci od 5.");
// }



// else if
// if (broj == 10){
//     console.log("Broj je jednak 10.");
// }
// else if(broj > 10){
//     console.log("Broj je veci od 10.");
// }
// else{
//     console.log("Broj je manji od 10.");
// }


// if (true){
// } else if(false){
// } else if (true){
// }else if (true){
// } else{
// }

let number = Number(prompt("Unesite broj:"));

if (number % 3 == 0 & number % 5 == 0){
    console.log("Broj je deljiv i sa 3 i sa 5.");
}
else if (number % 3 == 0){
    console.log("Broj je deljiv sa 3.");
}
else if (number % 5 == 0){
    console.log("Broj je deljiv sa 5.");
}
