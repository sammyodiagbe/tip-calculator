const billInput = document.querySelector("#bill-input");
const numberOfPeople = document.querySelector("#people-input");
const nErrorSpan = document.querySelector("#bill-error");
const pErrorSpan = document.querySelector("#people-error");
const pContainer = document.querySelector("#pinput");
const bContainer = document.querySelector("#binput");
let bill = 0;
let people = 0;
let tipPercent = 0;
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
  });
}

// adding event listener to bill input
// billInput.addEventListener("change", (event) => {
//   const value = billInput.value;
//   if (value <= 0) {
//       billErrorMessage = "can't be zero or less";
//     return;
//   }

//   console.log(typeof bill);
// });

actionButton.addEventListener("click", (event) => {
  const billValue = Number(billInput.value);
  const nOfPeople = Number(numberOfPeople.value);
  console.log(billValue, " - ", nOfPeople);
  if (!billValue || !nOfPeople) {
    console.log("testing");
    nErrorSpan.hidden = !billValue ? false : true;
    pErrorSpan.hidden = !nOfPeople ? false : true;
    nErrorSpan.innerHTML = !billValue ? "can't be less or zero" : "";
    pErrorSpan.innerHTML = !nOfPeople ? "can't be less or zero" : "";
    bContainer.classList.add(`${!billValue ? "error" : "valid"}`);
    pContainer.classList.add(`${!nOfPeople ? "error" : "valid"}`);
    if (billValue) bContainer.classList.remove("error");
    if (nOfPeople) pContainer.classList.remove("error");

    return;
  }
  nErrorSpan.innerHTML = "";
  nErrorSpan.hidden = true;
  pErrorSpan.setAttribute("hidden", "true");
  pErrorSpan.setAttribute("hidden", "true");
  bContainer.classList.remove("error");
  pContainer.classList.remove("error");
});
