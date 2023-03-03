const dropLink = document.querySelectorAll(".dropdown");
console.log(dropLink);
document.querySelector(".dropdown").addEventListener("click", function (event) {
  console.log(event.target);
  event.target.nextElementSibling.classList.toggle("dropdown__list_active");
 
});


