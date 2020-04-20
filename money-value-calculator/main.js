// Hook up to the button
const computeButton = document.getElementById("button");

// Add event Listener
computeButton.addEventListener("click", computeMoneyValue);

const compoundInputWarning = () => {
  let warning = document.getElementById("warning");

  warning.style.display = "block";
};
const warningZone = document.getElementById("warning-zone");
warningZone.addEventListener("click", compoundInputWarning);

function computeMoneyValue() {
  //Convert all values to numbers
  let principal = parseInt(document.getElementById("principal").value);
  let interestRate = parseInt(document.getElementById("interest-rate").value);
  let time = parseInt(document.getElementById("time").value);
  let inflation = parseInt(document.getElementById("inflation").value);
  let compoundPeriod = parseInt(
    document.getElementById("compound-period").value
  );

  let effectiveRate = (1 + interestRate / 100) / (1 + inflation / 100) - 1;
  if (compoundPeriod > time) {
    return 0;
  }

  let amount =
    principal *
    Math.pow(
      1 + (effectiveRate * 100) / (compoundPeriod * 100),
      compoundPeriod * time
    );
  amount = amount.toFixed(2);
  document.getElementById(
    "display-result"
  ).innerHTML = ` <h2 id="display-result"># ${amount}</h2>`;
}
