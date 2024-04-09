let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let reseting = 0;
let count = reseting;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = reseting;
}

function reset() {
  saveEl.textContent = "Previous entries:";
  countEl.textContent = reseting;
}
