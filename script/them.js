const menuButton = document.querySelector(".menu_btn_btn");
const oval = document.querySelectorAll(".oval");

const conteiner = document.querySelector(".conteiner");
console.dir(oval);
console.dir(menuButton);
oval[0].style.opacity = "1";

// let x = 0;

// oval.addEventListener("click", () => {
//   if (x === 0) {
//     menuButton.style.justifyContent = "center";
//     x = 1;
//   } else if (x === 1) {
//     menuButton.style.justifyContent = "end";
//     x = 2;
//   } else if (x === 2) {
//     menuButton.style.justifyContent = "start";
//     x = 0;
//   }
// });

menuButton.addEventListener("click", (e) => {
  console.log(e);
  if (e.target === oval[0]) {
    oval[0].style.opacity = "1";
    oval[1].style.opacity = "0";
    oval[2].style.opacity = "0";
  } else if (e.target === oval[1]) {
    oval[0].style.opacity = "0";
    oval[1].style.opacity = "1";
    oval[2].style.opacity = "0";
  document.documentElement.style.setProperty("--conteiner", "red")
  } else if (e.target === oval[2]) {
    oval[0].style.opacity = "0";
    oval[1].style.opacity = "0";
    oval[2].style.opacity = "1";
  }
});
