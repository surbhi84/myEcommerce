let label = document.querySelectorAll(".manual-btn");

function clearManualBtnStyle() {
  label.forEach((manualBtn) => {
    manualBtn.classList.remove("active");
  });
}

let manualBtns = document.querySelector(".manual-navigation");

manualBtns.addEventListener("click", (e) => {
  clearManualBtnStyle();
  if (e.target.className == "manual-btn") {
    e.target.classList.add("active");
  }
});
