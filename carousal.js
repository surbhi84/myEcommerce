let label = document.querySelectorAll(".manual-btn");

// function clearManualBtnStyle() {
//   label.forEach((manualBtn) => {
//     manualBtn.style.backgroundColor = "transparent";
//   });
// }

// label.forEach((manualBtn) => {
//   manualBtn.addEventListener("click", () => {
//     // manualBtn.classList.add("active");
//     clearManualBtnStyle();
//     manualBtn.style.backgroundColor = "var(--primary-color)";
//   });
// });

function clearManualBtnStyle() {
  label.forEach((manualBtn) => {
    // manualBtn.style.backgroundColor = "transparent";
    manualBtn.classList.remove("active");
  });
}

// label.forEach((manualBtn) => {
//   manualBtn.addEventListener("click", () => {
//     // manualBtn.classList.add("active");
//     clearManualBtnStyle();
//     manualBtn.style.backgroundColor = "var(--primary-color)";
//   });
// });

let manualBtns = document.querySelector(".manual-navigation");

manualBtns.addEventListener("click", (e) => {
  //   removeBg();
  clearManualBtnStyle();
  if (e.target.className == "manual-btn") {
    // e.target.style.backgroundColor = "var(--primary-color)";
    e.target.classList.add("active");
  }
});
