const holes = Array.from(document.querySelector('.holes').children);
const toggle = (item) => item.classList.toggle('occupied');

holes.forEach((hole, holeIndex) => {
  hole.addEventListener('click', () => {
    toggle(hole);
    holeIndex % 5 !== 0 && toggle(holes[holeIndex - 1]); // left
    (holeIndex - 4) % 5 !== 0 && toggle(holes[holeIndex + 1]); // right
    holeIndex - 5 >= 0 && toggle(holes[holeIndex - 5]); // top
    holeIndex + 5 < 25 && toggle(holes[holeIndex + 5]); // bottom
    const total = holes.length - document.querySelectorAll('.occupied').length;
    document.querySelector('.counter').textContent =
      total === 0 ? 'You win' : total;
  });
  Math.random() > 0.5 && toggle(hole);
});
