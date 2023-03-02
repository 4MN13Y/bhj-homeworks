// document.querySelector(".menu_main").onclick = (event) => {
//   if (event.target.nextElementSibling) {
//     event.target.nextElementSibling.classList.toggle("menu_active");
//     return false;
//   }
// };

//======== закрыть через функцию ===================

document.querySelector(".menu_main").onclick = (event) => {
  subMenuClose();
  if (event.target.nextElementSibling) {
    event.target.nextElementSibling.classList.add("menu_active");
    return false;
  }
};

function subMenuClose() {
  const subMenu = document.querySelectorAll(".menu_sub");
  Array.from(subMenu).forEach((item) => {
    item.classList.remove("menu_active");
  });
}
