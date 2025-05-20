const NOTES_COLORS = {
  // ADD YOUR CUSTOM COLORS (see CSS file for available colors)
  // '#mytag': 'green',
};
const CUSTOM_NOTES = Object.keys(NOTES_COLORS);

const setNotesColors = () => {
  const transactionTable = document.querySelector(
    "div[data-testid=transaction-table]"
  );
  if (!transactionTable) return;

  for (const b of transactionTable.querySelectorAll(
    "div[data-testid=notes] button[type=button]"
  )) {
    if (CUSTOM_NOTES.includes(b.textContent)) {
      b.classList.add(`note-${NOTES_COLORS[b.textContent]}`);
    } else {
      b.classList.add(`note-default`);
    }
  }
};

(() => {
  setInterval(() => {
    setNotesColors();
  }, 200);
})();
