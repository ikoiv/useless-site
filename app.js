// Placeholder until there is an actual puzzle.
const dot = document.querySelector('#dot');
const message = document.querySelector('#message');
const poke = document.querySelector('#poke');
const reset = document.querySelector('#reset');

poke.addEventListener('click', () => {
  dot.classList.add('is-poked');
  message.textContent = "You poked it. That's pretty much it.";
});

reset.addEventListener('click', () => {
  dot.classList.remove('is-poked');
  message.textContent = 'Just a dot.';
});
