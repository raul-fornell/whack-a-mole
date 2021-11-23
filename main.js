const holes = Array.from(document.querySelector(".holes").children);
const toggle = (item) => item.classList.toggle("occupied");
[
  [00, 01, 02, 03, 04],
  [05, 06, 07, 08, 09],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
].forEach((row, rowIndex) => {
  row.forEach((col, colIndex) => {
    const hole = holes[col];
    hole.addEventListener("click", () => {
      toggle(hole);
      colIndex > 0 && toggle(holes[col - 1]); // left
      colIndex < 4 && toggle(holes[col + 1]); // right
      rowIndex > 0 && toggle(holes[col - 5]); // top
      rowIndex < 4 && toggle(holes[col + 5]); // bottom
      const total = 25 - document.querySelectorAll(".occupied").length;
      if (total === 0) {
        document.querySelector(".counter").textContent = "You win";
      } else {
        document.querySelector(".counter").textContent = total;
      }
    });
    Math.random() * 10 > 5 && toggle(hole);
  });
});
