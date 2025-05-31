const getDailyBalance = (balanceText) => {
  const balance = parseFloat(balanceText.replace(",", ".").replace(" ", ""));
  const today = new Date();
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const remainingDays = lastDay.getDate() - today.getDate();

  let perTomorrow;
  if (remainingDays > 0) {
    perTomorrow = balance / remainingDays;
  }

  const perDay = balance / (remainingDays + 1);

  let dailyBalance = `${perDay.toFixed(2)}`;
  if (perTomorrow) {
    dailyBalance += ` | ${perTomorrow.toFixed(2)}`;
  }

  return dailyBalance;
};

const displayDailyBalance = () => {
  const balanceBtn = document.querySelector("*[data-testid=account-balance]");

  if (balanceBtn) {
    const detailsNode = balanceBtn.nextSibling;

    if (detailsNode && detailsNode.tagName === "DIV") {
      let dailyNode;
      if (detailsNode.childElementCount === 3) {
        dailyNode = detailsNode.lastChild;
      } else {
        dailyNode = detailsNode.firstChild.cloneNode(true);
        detailsNode.appendChild(dailyNode);
      }

      dailyNode.childNodes[0].textContent = "Daily:";
      dailyNode.lastChild.textContent = getDailyBalance(balanceBtn.textContent);
    }
  }
};

(() => {
  setInterval(() => {
    displayDailyBalance();
  }, 200);
})();
