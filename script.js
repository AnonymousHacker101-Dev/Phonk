const welcomePopup = document.getElementById("welcomePopup");
const continueBtn = document.getElementById("continueBtn");
const mainSite = document.getElementById("mainSite");

continueBtn.addEventListener("click", () => {
  welcomePopup.classList.remove("active");
  mainSite.classList.remove("hidden");
});

const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("liked");

    if (button.classList.contains("liked")) {
      button.textContent = "💙 Liked";
    } else {
      button.textContent = "💙 Like";
    }
  });
});
