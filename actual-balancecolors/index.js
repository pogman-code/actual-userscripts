const setAccountBalanceColors = () => {
  var searchPattern = /^\-\d+/;
  
  for (const b of document.querySelectorAll(
    "span[data-testid^='__global!balance-']:not([data-testid^='__global!balance-query']), span[data-testid$='-balance']"
  )) {
    if (searchPattern.test(b.textContent)) {
      b.style.color = 'var(--color-errorText)';
    }
  }
};

(() => {
  setInterval(() => {
    setAccountBalanceColors();
  }, 200);
})();
