let sandwich = new Sandwich();
let steak = new Steak();
let cherries = new Cherries();
let popsicle = new Popsicle();

const sandwichHandler = () => {
  sandwich = new Sandwich();
  sandwich.total();
};

const steakHandler = () => {
  steak = new Steak();
  steak.total();
};

const cherriesHandler = () => {
  cherries = new Cherries();
  cherries.total();
};

const popsicleHandler = () => {
  popsicle = new Popsicle();
  popsicle.total();
};

const totalHandler = () => {
  let total =
    sandwich.total() + steak.total() + cherries.total() + popsicle.total();
  if (total > 1000) total = total * 0.15;
  document.getElementById("grand_total").innerHTML = total.toLocaleString();
  setTimeout(() => {
    let response = confirm(
      "Please confirm the total cost of $" +
        total.toLocaleString() +
        " for payment"
    );
    if (response) {
      alert("Thank you for your patronage!!!");
    } else {
      alert("Application withdraw");
    }
  }, 1000);
};

function Sandwich() {
  this.selected = document.getElementById("item1").checked;
  let tag = document.querySelector("input[name=sandwich]:checked").id;
  let rate = "0";
  let amt = document.getElementById(tag).nextElementSibling.firstElementChild;
  if (amt != null) rate = amt.textContent;
  this.rate = parseInt(rate.replace(",", ""));
  let qty = document.getElementById("sandwich_qty").value;
  this.qty = parseInt(qty);
  this.total = () => {
    let total = 0;
    if (this.selected) total = this.rate * this.qty;
    document.getElementById(
      "sandwich_total"
    ).innerHTML = total.toLocaleString();
    return total;
  };
}

function Steak() {
  this.selected = document.getElementById("item2").checked;
  let tag = document.querySelector("input[name=steak]:checked").id;
  let rate = "0";
  let amt = document.getElementById(tag).nextElementSibling.firstElementChild;
  if (amt != null) rate = amt.textContent;
  this.rate = parseInt(rate.replace(",", ""));
  let qty = document.getElementById("steak_qty").value;
  this.qty = parseInt(qty);
  this.total = () => {
    let total = 0;
    if (this.selected) total = this.rate * this.qty;
    document.getElementById("steak_total").innerHTML = total.toLocaleString();
    return total;
  };
}

function Cherries() {
  this.selected = document.getElementById("item3").checked;
  let tag = document.querySelector("input[name=cherries]:checked").id;
  let rate = "0";
  let amt = document.getElementById(tag).nextElementSibling.firstElementChild;
  if (amt != null) rate = amt.textContent;
  this.rate = parseInt(rate.replace(",", ""));
  let qty = document.getElementById("cherries_qty").value;
  this.qty = parseInt(qty);
  this.total = () => {
    let total = 0;
    if (this.selected) total = this.rate * this.qty;
    document.getElementById(
      "cherries_total"
    ).innerHTML = total.toLocaleString();
    return total;
  };
}

function Popsicle() {
  this.selected = document.getElementById("item4").checked;
  let tag = document.querySelector("input[name=popsicle]:checked").id;
  let rate = "0";
  let amt = document.getElementById(tag).nextElementSibling.firstElementChild;
  if (amt != null) rate = amt.textContent;
  this.rate = parseInt(rate.replace(",", ""));
  let qty = document.getElementById("popsicle_qty").value;
  this.qty = parseInt(qty);
  this.total = () => {
    let total = 0;
    if (this.selected) total = this.rate * this.qty;
    document.getElementById(
      "popsicle_total"
    ).innerHTML = total.toLocaleString();
    return total;
  };
}
