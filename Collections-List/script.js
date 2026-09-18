const categoryBtns = document.querySelectorAll(".category-btn");

categoryBtns.forEach((button) => {
  button.addEventListener("click", () => {
    categoryBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  });
});
