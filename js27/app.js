//change,input,setTimeout,Date

// const input1 = document.getElementById("search");
// input1.addEventListener("change", () => {
//   console.log("CHANGE");
// }); // menja se kad se makne fokus odnosno mis za inputa

// const input2 = document.getElementById("myInput");
// input2.addEventListener("input", () => {
//   console.log("INPUT");
// }); //menja se odmah sve tjst odmah ispisuje razliku

// const email = document.getElementById("email");
// email.addEventListener("change", function () {
//   if (!this.value.includes("@")) {
//     alert("Unesite validnu email adresu");
//   } else {
//     console.log("Email:", email.value);
//   }
// });

// const btnBrojac = document.getElementById("btnBrojac");
// const brojKLikova = document.getElementById("brojKlikova");
// let brojac = 0;
// function povecajFn() {
//   brojac++;
//   brojKLikova.textContent = brojac;
// }

// btnBrojac.addEventListener("click", povecajFn);

// setTimeout(() => {
//   btnBrojac.removeEventListener("click", povecajFn); //uklanja odredjenu funkciju,zaustavlja
// }, 5000); ///desavanje se desi nakon pet sekundi, BROJ JE U MILISKUNDE (ovo 5000 je 5sek)

// const datum = new Date();
// console.log(datum);

// console.log(datum.getDay()); //drugi dan u nedelji
// console.log(datum.getMonth()); //meseci pocinju od 0 i za jul vraca 6
// console.log(datum.getFullYear()); //vraca godinu

// const juce = new Date("2025-07-14T14:00:03"); //separator je T,valjda se zove ISO 81 FORMAT
// console.log(juce);
