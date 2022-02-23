let menuBtn = document.querySelector(".menu-btn");
let navLink = document.querySelector(".nav-links");

// let initialScreenSize = -1;

if (menuBtn.style.display == "none") navLink.classList.remove("display-none");
else navLink.classList.add("display-none");

menuBtn.addEventListener("click", viewnavLink);

// onload fires on loading of the document
window.onload = () => {
  initialScreenSize = window.innerWidth;
  if (window.innerWidth >= 768) navLink.classList.remove("display-none");
  else {
    navLink.classList.add("display-none");
  }
};

// onresize event fires on resize of the window so whenever the innerwidth i.e available space in the window is greater then 768px the colum will appear and vice versa.
window.onresize = () => {
  if (
    (initialScreenSize <= 480 && window.innerWidth >= 480) ||
    (initialScreenSize >= 480 && window.innerWidth <= 480)
  ) {
    if (window.innerWidth >= 480) navLink.classList.remove("display-none");
    else {
      navLink.classList.add("display-none");
    }
    initialScreenSize = window.innerWidth;
  }
};

function viewnavLink() {
  if (navLink.classList.contains("display-none"))
    navLink.classList.remove("display-none");
  else navLink.classList.add("display-none");
}
