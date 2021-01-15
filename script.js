let selected = false;
let qty = 1;

let sandwich = new Items("sandwich");
let steak = new Items("steak");
let cherries = new Items("cherries");
let popsicle = new Items("popsicle");

const sandwichHandler = () => {
  selected = document.getElementById("item1").checked;
  qty = document.getElementById("sandwich_qty").value;
  sandwich = new Items("sandwich");
  document.getElementById(
    "sandwich_total"
  ).innerHTML = sandwich.total().toLocaleString();
};

const steakHandler = () => {
  selected = document.getElementById("item2").checked;
  qty = document.getElementById("steak_qty").value;
  steak = new Items("steak");
  document.getElementById(
    "steak_total"
  ).innerHTML = steak.total().toLocaleString();
};

const cherriesHandler = () => {
  selected = document.getElementById("item3").checked;
  qty = document.getElementById("cherries_qty").value;
  cherries = new Items("cherries");
  document.getElementById(
    "cherries_total"
  ).innerHTML = cherries.total().toLocaleString();
};

const popsicleHandler = () => {
  selected = document.getElementById("item4").checked;
  qty = document.getElementById("popsicle_qty").value;
  popsicle = new Items("popsicle");
  document.getElementById(
    "popsicle_total"
  ).innerHTML = popsicle.total().toLocaleString();
};

const totalHandler = () => {
  let total =
    sandwich.total() + steak.total() + cherries.total() + popsicle.total();
  let discount = 0;
  if (total > 1000) {
    discount = total * 0.15;
    total = total - discount;
  }
  document.getElementById("grand_total").innerHTML = total.toLocaleString();
  if (total > 0)
    setTimeout(() => {
      let response = confirm(
        "Please confirm the total cost of $" +
          total.toLocaleString() +
          " for payment.\nWith discounted amount of $" +
          discount.toLocaleString()
      );
      if (response) {
        alert("Thank you for your patronage!!!");
      } else {
        alert("Application withdraw");
      }
    }, 1000);
};

function Items(tagName) {
  this.selected = selected;
  let rate = "0";
  let tag = document.querySelector(`input[name=${tagName}]:checked`).id;
  let amt = document.getElementById(tag).nextElementSibling.firstElementChild;
  if (amt != null) rate = amt.textContent;
  this.rate = parseInt(rate.replace(",", ""));
  this.qty = parseInt(qty);
  this.total = () => {
    let total = 0;
    if (this.selected) total = this.rate * this.qty;
    return total;
  };
}
