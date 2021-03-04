const cursor = document.querySelectorAll(".cursor");
// const cursor1 = document.querySelector(".cursor1");
console.log(cursor);
document.addEventListener("mousemove", (i) => {
  Array.from(cursor).map((item) => {
    return cursorMove(item, i);
  });
});

function cursorMove(value, element) {
  value.setAttribute(
    "style",
    "top: " +
      (element.pageY - value.offsetHeight / 2) +
      "px; left: " +
      (element.pageX - value.offsetWidth / 2) +
      "px;"
  );
}
