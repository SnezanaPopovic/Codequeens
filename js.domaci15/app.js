const outer = document.querySelector(".outer");
const middle = document.querySelector(".middle");
const inner = document.querySelector(".inner");

outer.addEventListener("click", () => {
  outer.classList.toggle("clicked");
});

middle.addEventListener("click", (event) => {
  event.stopPropagation();
  middle.classList.toggle("clicked");
});

inner.addEventListener("click", (event) => {
  inner.classList.toggle("clicked");
});
