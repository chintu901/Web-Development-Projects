const followBtn = document.querySelector(".follow-btn");
const followerCount = document.querySelector(".follow-count-num");

followBtn.addEventListener("click", () => {
  followBtn.classList.toggle("added");
  followerCount.textContent = "99";

  if (followBtn.classList.contains("added")) {
    followBtn.textContent = "Unfollow";
  } else {
    followBtn.textContent = "Follow";
    followerCount.textContent = "98";
  }
});
