// Change Background Header

const changeBgHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", changeBgHeader);

// Services Card More Details

const seeMore = document.querySelectorAll(".services_button");
const modalActiveClass = "services_modal-active";
const closeIcons = document.querySelectorAll(".services_modal-close");
const servicesModals = document.querySelectorAll(".services_modal");

servicesModals.forEach((modal, i) => {
  seeMore[i].addEventListener("click", () => {
    modal.classList.add(modalActiveClass);
  });

  closeIcons[i].addEventListener("click", () => {
    modal.classList.remove(modalActiveClass);
  });
});
