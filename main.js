const container = document.querySelector('.holes');
const holes = Array.from(container.children);
const toggle = (item) => item.classList.toggle('occupied');

container.addEventListener('click', (ev) => {
  toggle(ev.target);
  const holeIndex = Array.prototype.indexOf.call(holes, ev.target);
  holeIndex % 5 !== 0 && toggle(holes[holeIndex - 1]); // left
  (holeIndex - 4) % 5 !== 0 && toggle(holes[holeIndex + 1]); // right
  holeIndex - 5 >= 0 && toggle(holes[holeIndex - 5]); // top
  holeIndex + 5 < holes.length && toggle(holes[holeIndex + 5]); // bottom
  const total = holes.length - document.querySelectorAll('.occupied').length;
  document.querySelector('.counter').textContent =
    total === 0 ? 'You win' : total;
});

holes.forEach((hole) => Math.random() > 0.5 && toggle(hole));