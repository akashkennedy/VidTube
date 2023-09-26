var menuIcon = document.querySelector(".menuIcon");
var sideBar = document.querySelector(".sideBar");

menuIcon.addEventListener("click", () => {
    sideBar.classList.toggle("smallSideBar");
})
