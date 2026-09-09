const birthdayList = document.querySelector(".list-area");
const viewAllBtn = document.querySelector(".view-all-btn");

viewAllBtn.addEventListener("click", () => {
  birthdayList.classList.toggle("expanded");

  if (birthdayList.classList.contains("expanded")) {
    viewAllBtn.textContent = "View Less";
  } else {
    viewAllBtn.textContent = "View All";
  }
});
