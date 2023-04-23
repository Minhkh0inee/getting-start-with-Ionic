const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const expensesList = document.querySelector("#expenses-list");
const totalOutput = document.querySelector("#total-expense");
let total = 0;
const alertCtrl = document.querySelector("ion-alert-controller");

const clear = () => {
  reasonInput.value = "";
  amountInput.value = "";
};

confirmBtn.addEventListener("click", () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (
    enteredReason.trim().length <= 10 ||
    enteredAmount <= 0 ||
    enteredAmount.trim() <= 0
  ) {
    alertCtrl.create({
      message: "Please enter valid reason and amount!",
      header: "Invalid input",
      button: ["Okay"],
    }).then(alertElement=>{
        alertElement.present()
    });
    return;
  }

  const newItem = document.createElement("ion-item");
  newItem.textContent = enteredReason + ": $" + enteredAmount;

  expensesList.appendChild(newItem);

  total += +enteredAmount;
  totalOutput.textContent = total;
  clear();
});

cancelBtn.addEventListener("click", clear);
