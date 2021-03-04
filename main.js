const cursor = document.querySelectorAll(".cursor");
document.addEventListener("mousemove", (i) => {
  Array.from(cursor).map((item) => {
    return cursorMove(item, i);
  });
});

function cursorMove(value, e) {
  value.setAttribute(
    "style",
    "top: " +
      (e.pageY - value.offsetHeight / 2) +
      "px; left: " +
      (e.pageX - value.offsetWidth / 2) +
      "px;"
  );
}
