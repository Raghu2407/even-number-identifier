function checkEvenOdd(n) {
  const remainder = Math.abs(n % 2);
  const result = ["Even", "Odd"];

  return {
    remainder,
    label: result[remainder],
  };
}

if (typeof document !== "undefined") {
  const form = document.getElementById("checker-form");
  const input = document.getElementById("number-input");
  const resultBox = document.getElementById("result-box");
  const remainderText = document.getElementById("remainder-text");
  const resultText = document.getElementById("result-text");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = Number(input.value);

    if (!Number.isInteger(value)) {
      resultBox.classList.remove("hidden");
      resultBox.classList.add("border-red-200", "bg-red-50");
      remainderText.textContent = "Please enter a whole number (integer).";
      resultText.textContent = "";
      return;
    }

    const { remainder, label } = checkEvenOdd(value);

    resultBox.classList.remove("hidden", "border-red-200", "bg-red-50");
    resultBox.classList.add("border-slate-200", "bg-slate-50");
    remainderText.textContent = `Remainder when ${value} is divided by 2 is: ${remainder}`;
    resultText.textContent = `Result: ${label}`;
  });
}

if (typeof module !== "undefined") {
  module.exports = { checkEvenOdd };
}
