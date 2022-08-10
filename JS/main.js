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

// Work Filter

const filters = document.querySelectorAll(".work_item");
const cards = document.querySelectorAll(".work_card");

filters.forEach((f) => {
  f.addEventListener("click", () => {
    filters.forEach((fi) => {
      fi.classList.remove("work_item-active");
    });

    const type = f.attributes["data-type"].value;
    f.classList.add("work_item-active");

    cards.forEach((c) => {
      if (c.attributes["data-type"].value === type) {
        c.classList.add("work_card-active");
        c.style.animation = "portfolio 0.3s 1 linear";
      } else if (type === "all") {
        c.style.animation = "";
        c.classList.add("work_card-active");
      } else {
        c.classList.remove("work_card-active");
        c.style.animation = "";
      }
    });
  });
});

// Form

const inputs = document.querySelectorAll(".contact_form-input");
const labels = document.querySelectorAll(".contact_form-tag");

inputs.forEach((input, i) => {
  input.addEventListener("focus", () => {
    labels.forEach(() => {
      labels[i].style.animation = "inputFocus 0.2s linear forwards";
    });
  });
});

inputs.forEach((input, i) => {
  input.addEventListener("blur", () => {
    labels.forEach(() => {
      labels[i].style.animation = "inputBlur 0.2s linear forwards";
    });
  });
});
