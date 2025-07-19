// const outer = document.querySelector(".outer");
// const middle = document.querySelector(".middle");
// const inner = document.querySelector(".inner");

// const divs = document.querySelectorAll("div");
// divs.forEach((div) => {
//   div.addEventListener("click", (e) => {
//     console.log("kliknuli ste na div");
//     e.stopPropagation();
//   });
// });

//event delegation
// document.querySelector("button").addEventListener("click", () => {
//   const div = document.createComment("div");
//   div.classList.add("outer");
//   div.style.margin = "10px";
//   document.body.append(div);
// });

// document.addEventListener("click", (event) => {
//   if (event.target.matches("div")) {
//     console.log("kliknuli ste na div");
//   }
// });

// const inputTastatura = document.getElementById("inputTastatura");
// inputTastatura.addEventListener("keydown", (event) => {
//   console.log("Pritisnut taster: ", event.key);
// });

// const link = document.querySelector("a");
// link.onclick = (e) => {
//   e.preventDefault();
// };
