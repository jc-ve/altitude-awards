"use strict";

const categoryBtns = document.querySelector(".categories-btns");
const categoryBtn = document.querySelectorAll(".category-btn");
const categoriesContent = document.querySelectorAll(".categories");

if (window.location.pathname.endsWith("categories.html")) {
  categoryBtns.addEventListener("click", (e) => {
    const clicked = e.target.closest(".category-btn");

    if (!clicked) return;

    categoryBtn.forEach((btn) => btn.classList.remove("active"));
    categoriesContent.forEach((content) => content.classList.remove("active"));

    clicked.classList.add("active");

    document
      .querySelector(`.categories-${clicked.dataset.tab}`)
      .classList.add("active");
  });
}
