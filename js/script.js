const billInput = document.querySelector("#bill-input");
const numberOfPeople = document.querySelector("#people-input");
const nErrorSpan = document.querySelector("#bill-error");
const pErrorSpan = document.querySelector("#people-error");
const pContainer = document.querySelector("#pinput");
const bContainer = document.querySelector("#binput");
const tipPerPerson = document.querySelector("#tip-amount");
const totalPerPerson = document.querySelector("#t-amount");
const customPercent = document.querySelector("#custom-percent");

let bill = 0;
let people = 0;
let tipPercent = 10;
let tipAmountPerPerson = 0;
let totalAmountPerPerson = 0;
let billErrorMessage = "";
let numberOfPeopleErrorMessage = "";
const tipsButtons = document.getElementsByClassName("percent");
const actionButton = document.querySelector("#action-btn");

// add click event listener to the buttons

for (let a = 0; a < tipsButtons.length; a++) {
  tipsButtons[a].addEventListener("click", (event) => {
    const target = event.target;
    let value = Number(target.dataset.value);
    tipPercent = value;
    calculate();
    for (let b = 0; b < tipsButtons.length; b++) {
      if (tipsButtons[b].classList.contains("active")) {
        tipsButtons[b].classList.remove("active");
        break;
      }
    }
    tipsButtons[a].classList.add("active");
  });
}

// adding event listener to bill input
billInput.addEventListener("keyup", (event) => {
  Validate(billInput, nErrorSpan, bContainer);
});

numberOfPeople.addEventListener("keyup", (event) => {
  Validate(numberOfPeople, pErrorSpan, pContainer);
});

function Validate(field, errorField, parentContainer) {
  const value = Number(field.value);
  if (!value || value <= 0) {
    errorField.innerHTML = "can't be less or zero";
    parentContainer.classList.add(`${!value ? "error" : "valid"}`);
  } else {
    errorField.innerHTML = "";
    parentContainer.classList.remove("error");
  }
  calculate();
}

function calculate() {
  let billval = Number(billInput.value);
  let peopleval = Number(numberOfPeople.value);
  if (!billval || !peopleval || !tipPercent) {
    tipPerPerson.innerHTML = "$0.00";
    totalPerPerson.innerHTML = "$0.00";
    actionButton.classList.add("disabled");
    return;
  }
  actionButton.classList.remove("disabled");
  let percentPerhead = (tipPercent / 100) * billval;
  let amtPerHead = billval / peopleval;
  tipPerPerson.innerHTML = `$${percentPerhead.toFixed(2)}`;
  totalPerPerson.innerHTML = `${(amtPerHead + percentPerhead).toFixed(2)}`;
}

customPercent.addEventListener("keyup", (event) => {
  for (let b = 0; b < tipsButtons.length; b++) {
    if (tipsButtons[b].classList.contains("active")) {
      tipsButtons[b].classList.remove("active");
      break;
    }
  }
  tipPercent = event.target.value;
  calculate();
});

actionButton.addEventListener("click", (event) => {
  billInput.value = "";
  numberOfPeople.value = "";
  customPercent.value = "";
  tipPercent = 0;
  bill = 0;
  people = 0;
  tipPercent = 10;
  tipAmountPerPerson = 0;
  totalAmountPerPerson = 0;
  for (let b = 0; b < tipsButtons.length; b++) {
    if (tipsButtons[b].classList.contains("active")) {
      tipsButtons[b].classList.remove("active");
      break;
    }
  }
  tipPerPerson.innerHTML = "$0.00";
  totalPerPerson.innerHTML = "$0.00";
  actionButton.classList.add("disabled");
});
