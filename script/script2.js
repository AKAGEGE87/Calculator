const screen = document.querySelector(".screen");

console.dir(screen);

function addNumber(num) {
  if (screen.innerText === "" && num === ".") {
    screen.innerText = "0.";
  } else {
    screen.innerText += num;
  }
}

function del() {
  screen.innerText = screen.innerText.slice(0, -1);
}

function reset() {
  screen.innerText = "";
}

function operator(op) {
  if (
    screen.innerText === "" ||
    screen.innerText.at(-1) === "+" ||
    screen.innerText.at(-1) === "-" ||
    screen.innerText.at(-1) === "x" ||
    screen.innerText.at(-1) === "/"
  ) {
    screen.innerText = screen.innerText;
  } else {
    screen.innerText += op;
  }
}

function calculate() {
  screen.innerText = eval(screen.innerText);
}

const x = 0b1111111111111111111111111111111111111111111111111111111111111111;
console.log(x);
