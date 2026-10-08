// This file owns the placeholder behavior. Add puzzle rules here as the idea develops.
const dot = document.querySelector('[data-testid="curious-dot"]');
const message = document.querySelector('#message');
const poke = document.querySelector('#poke');
const reset = document.querySelector('#reset');

poke.addEventListener('click', () => {
  // A class controls appearance; readable status text makes the outcome observable.
  dot.classList.add('is-poked');
  message.textContent = 'You poked it. It is considering its options.';
});

reset.addEventListener('click', () => {
  // Reset to a known starting state so a future puzzle can be replayed and tested.
  dot.classList.remove('is-poked');
  message.textContent = 'Nothing has happened. Yet.';
});
