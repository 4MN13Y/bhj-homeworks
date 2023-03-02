const modalMain = document.querySelector("#modal_main");
const modalSuccess = document.querySelector("#modal_success");
const good = document.querySelector(".show-success");
const closed = document.querySelectorAll("div.modal__close");

modalMain.className = "modal modal_active";

good.onclick = () => {
  modalSuccess.className = "modal modal_active";
  modalMain.className = "modal";
};

closed[0].onclick = () => {
  modalMain.className = "modal";
};

closed[1].onclick = () => {
  modalSuccess.className = "modal";
};
