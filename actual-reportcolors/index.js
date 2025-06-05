const setReportColors = () => {
  for (const totals of document.querySelectorAll("#total")) {
    totals.classList.add("rowHeader");

    for (const c of totals.childNodes) {
      const value = parseFloat(
        c.textContent.replace(",", ".").replace(" ", "")
      );
      if (isNaN(value)) continue;

      if (value > 0) {
        c.classList.add("positive");
      } else {
        c.classList.add("negative");
      }
    }
  }
};

(() => {
  setInterval(() => {
    setReportColors();
  }, 200);
})();
