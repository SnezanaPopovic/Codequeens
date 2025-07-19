const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

document.addEventListener("click", () => {
  console.log("Document");
});
grandparent.addEventListener("click", (event) => {
  //event je objekat koji opisuje sta se desilo
  //   console.log((event, "= target")); //ispisuje se klasa onamo gde se klikne
  //   console.log((event.currentTarget, "= current target")); // uvek ispisuje ono gde pripada gde je zapisan
  console.log("Grandparent");
});

parent.addEventListener("click", () => {
  console.log("Parent");
  event.stopPropagation(); //TU STAJE I NE IDE DALJE
});

child.addEventListener("click", () => {
  console.log("Child");
});
