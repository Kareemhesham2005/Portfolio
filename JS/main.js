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

// Scroll Active Link Section

const links = document.querySelectorAll(".nav_link");
const home = document.querySelector("#home").scrollHeight;
const about = document.querySelector("#about").scrollHeight;
const skills = document.querySelector("#skills").scrollHeight;
const services = document.querySelector("#services").scrollHeight;
window.onscroll = () => {
  let section = "home";
  if (window.scrollY >= 0 && window.scrollY <= home + 50) {
    section = "home";
  } else if (
    window.scrollY > home + 50 &&
    window.scrollY <= home + 50 + about
  ) {
    section = "about";
  } else if (
    window.scrollY > home + 50 + about &&
    window.scrollY <= home + about + 50 + skills
  ) {
    section = "skills";
  } else if (
    window.scrollY > home + about + 50 + skills &&
    window.scrollY <= home + about + 50 + skills + services
  ) {
    section = "services";
  } else if (
    window.scrollY > home + about + 50 + skills + services &&
    window.scrollY <=
      home +
        about +
        skills +
        50 +
        services +
        document.querySelector("#work").scrollHeight
  ) {
    section = "work";
  } else {
    section = "";
  }

  links.forEach((link) => {
    if (link.dataset.section === section) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
};

// Light/Dark Theme Change

const themeChanger = document.querySelector("#theme-button");

let selectedTheme = localStorage.getItem("selected-theme");
let selectedIcon = localStorage.getItem("selected-icon");

function getCurrentTheme() {
  return document.body.classList.contains("light-theme") ? "dark" : "light";
}

function getCurrentIcon() {
  return themeChanger.classList.contains("bx-sun") ? "bx bx-moon" : "bx bx-sun";
}

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    "light-theme"
  );

  themeChanger.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    "bx-sun"
  );
}

themeChanger.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  themeChanger.classList.toggle("bx-sun");

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// Scroll Reveal Animation

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home_data`);
sr.reveal(`.home_handle`, { delay: 700 });
sr.reveal(`.home_social, .home_scroll`, {
  delay: 900,
  origin: "bottom",
});
