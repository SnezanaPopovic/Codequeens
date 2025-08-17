// fetch("https://jsonplaceholder.typicode.com/posts")
//   //fetch uvek vraca promise
//   //404 error je kad nije pronadjeno
//   //headers bitno

//   //   .then((res) => {
//   //     console.log("Then", res);
//   //   })
//   //   .then((res) => res.json()) //da bi uzeli tacne podatke koje zelimo koristimo json
//   //   .then((res) => console.log(res))
//   .catch((res) => {
//     console.log("Catch", res);
//   });

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST", //obavezno za slanje,metoda za koriscenje
//   body: JSON.stringify({
//     //body i sadrzava sve ovo
//     id: 101,
//     userId: 21,
//     title: "Hello",
//     body: "nwkmdjdwi dinwdqw dwjiqo",
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   }, //tip kontenta koji saljemo
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res));

//ZADACI
//1. dohvati sve postove
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((res) => console.log(res));

//2. dohvati korisnika po id-u
// fetch("https://jsonplaceholder.typicode.com/users/37") // ovo /broj uzima pod tim brojem
//   .then((res) => res.json())
//   .then((res) => console.log(res));

//3. prikaz to-do zadatka koji nisu izvrseni
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((res) => {
//     const neIzvrseni = res.filter((zadatak) => !zadatak.completed);
//     console.log("Neizvrseni:", neIzvrseni);
//   });

//4.Dodaj novi post

//5.posalji komentar na post
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((res) => res.json())
  .then((res) => {});
