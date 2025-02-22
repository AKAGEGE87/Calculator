const keys = document.querySelector(".keys");
console.dir(keys);
const screen = document.querySelector(".screen");

for (let x = 0; x < 18; x++) {
  const button = document.createElement("button");

  keys.appendChild(button);
  button.innerText = x;

  button.className = "btn";

  let num1;
  let num2;
  let operator;

  switch (x) {
    case 0:
    case 1:
    case 2:
      button.innerText = x + 7;
      break;
    case 3:
      button.innerText = "DEL";
      button.className = "del_btn btn";
      break;
    case 7:
      button.innerText = "+";
      button.onClick = () => (operator = "+");
      //   screen.innerText += "+";
      break;
    case 8:
    case 9:
    case 10:
      button.innerText = x - 7;
      break;
    case 11:
      button.innerText = "-";
      button.onClick = () => (operator = "-");
      //   screen.innerText += "-";
      break;
    case 12:
      button.innerText = ".";
      break;
    case 13:
      button.innerText = 0;
      break;
    case 14:
      button.innerText = "/";
      button.onClick = () => (operator = "/");
      //   screen.innerText += "/";
      break;
    case 15:
      button.innerText = "X";
      button.onClick = () => (operator = "*");
      //   screen.innerText += "X";
      break;
    case 16:
      button.innerText = "RESET";
      button.className = "reset_btn btn";
      break;
    case 17:
      button.innerText = "=";
      button.className = "enter_btn btn";
      break;
  }

  button.addEventListener("click", () => {
    //     button.innerText !== "=" &&
    //     button.innerText != "DEL"
    // &&
    // button.innerText !== "-" &&
    // button.innerText !== "+" &&
    // button.innerText !== "X" &&
    // button.innerText !== "/"
    //   ? (screen.innerText += button.innerText)
    //   : "";
    if (operator) {
      num2 = screen.innerText;
      screen.innerText = num1 + operator + num2;
    } else {
      num1 = screen.innerText;
      screen.innerText += button.innerText;
    }

    button.innerText === "RESET" ? (screen.innerText = "") : "";

    button.innerText === "DEL"
      ? (screen.innerText = screen.innerText.slice(0, -1))
      : "";
  });
}

const buttons = document.querySelectorAll("button");
console.dir(buttons);
