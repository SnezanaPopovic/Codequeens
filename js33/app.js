// console.log("1");
// setTimeout(() => {
// console.log("2");
// }, 1000);
// console.log("3");

// console.log("1");

// setTimeout(() => {
// console.log("2");
// }, 0);

// console.log("3");

// console je sinhroni kod
// sinhroni kod u js - line by line
// setTimeout je asinhrona fja

// console.log("1");

// setTimeout(() => {
// console.log("2");
// }, 0);

// const prom = new Promise((resolve, reeject) => {
// const condition = true;
// if (console) {
// resolve("bravo");
// } else {
// reject("lose");
// }
// });

// prom
// .then((res) => {
// console.log(res);
// })
// .catch((e) => {
// console.log(e);
// });

// console.log("3");

// promise je mikro task
// settimeout i setinterval makro veci zadatak
// settimeout i promise u asinhroni
// prednost ima mikro tast
// i zato se prvo izvrsi promise bravo pa onda settimeout

// const idTimeOut = setTimeout(() => {
// console.log("2");}, 1000);

//fja settimeout fja ona pozove callback fju posle 1 sekunde i ona vraca neki ID da mozemo da znamo koji tacno brisemo
// id nam treba da pozovemo clear time out fju

// setTimeout(() => {
// clearTimeout(idTimeOut);
// }, 2000);

// clearTimeout(idTimeOut);
// ms su u pitanju

// let i = 0;
// setInterval(() => {
// console.log(i);
// i++;
// }, 1000);

// setinterval izvrsava dju na svakih nekioliko ms izvrsava ponovo ju dok setimout jednom izvsi

// let i = 0;
// const id = setInterval(() => {
// console.log(i);
// i++;
// if (i == 5) {
// // console.log(i);
// clearInterval(id);
// }
// }, 1000);

// if je sinhroni kod

console.log("1");

let i = 0;
while (i < 1000000000) i++;
console.log("2");
// posle duzeg vremena izvrsava broj 2
