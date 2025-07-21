// localStorage.setItem("name", "snezana");

// localStorage.setItem("surname", "popovic");
// localStorage.setItem("name", "mirela");

// console.log(localStorage.getItem("name"));

// localStorage.setItem("item1", "1");
// localStorage.setItem("item2", "2");
// localStorage.setItem("item3", "3");

//local storage je memorija ZAUVEK sve dok ne obrise korisnik
//session storage je memorija PRIVREMENA sve dok je dokument otvoren

// localStorage.removeItem("item1");
// localStorage.clear();

// sessionStorage.setItem("item1", "1");
// sessionStorage.setItem("item2", "2");
// sessionStorage.setItem("item3", "3");

//session storage brise se sve cim se izadje iz dokuenta

// localStorage.getItem("name");

// const submit = document.getElementById("submit");

// submit.addEventListener("click", () => {
//   const name = document.getElementById("name").value.trim();
//   localStorage.setItem("name", `${name}`);
// });
// document.writeln(`Cao ${localStorage.getItem("name")}`);

// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   if (document.body.style.backgroundColor === "black") {
//     document.body.style.backgroundColor = "white";
//     localStorage.setItem("mode", "light");
//   } else {
//     document.body.style.backgroundColor = "black";
//     localStorage.setItem("mode", "dark");
//   }
// });

// if (localStorage.getItem("theme") == "black") {
//   document.body.style.backgroundColor = "black";
// } else {
//   document.body.style.backgroundColor = "white";
// }

// const user = {
//   ime: snezana,
//   prezime: popovic,
// };

// localStorage.setItem("user",JSON.stringify(user));
// const obj = JSON.parse(localStorage.getItem("user"));
// console.log(obj);
