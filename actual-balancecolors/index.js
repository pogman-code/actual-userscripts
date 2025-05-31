const setAccountBalanceColors = () => {
  var searchPattern = /^\-\d+/;

  for (const b of document.querySelectorAll(
    "span[data-testid^='__global!balance-']:not([data-testid^='__global!balance-query']), span[data-testid$='-balance']"
  )) {
    if (searchPattern.test(b.textContent)) {
      b.classList.add("error");
    } else {
      b.classList.remove("error");
    }
  }
};

(() => {
  setInterval(() => {
    setAccountBalanceColors();
  }, 200);
})();
