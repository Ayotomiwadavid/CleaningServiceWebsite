// import details from "./detailscontainer";

let bars = document.querySelector("#bars");
let times = document.querySelector("#times");
let sideBar = document.querySelector("#sideBar");
let benefitContainer = document.querySelector("#benefitContainer");
let copyRightowner = document.querySelector("#copyRight");
let navItem = document.querySelector("#navItem");
let header = document.querySelector(".header");
let footer = document.querySelector(".footer");
let navItems = document.querySelectorAll('#navItem');
let navList = document.querySelectorAll('.navList li');

//making navBar dynamic
header.innerHTML += ` `;

//making sidebar navigations functions
let handleBarsClick = () => {
  sideBar.classList.add("showSideBar");
};

let handleTimesClick = () => {
  sideBar.classList.remove("showSideBar");
};

//making the footer all right reserve year dynamic
let date = new Date();
let year = date.getFullYear();
copyRightowner.innerHTML +=
  "© copy right elisa house cleaning service | all right reserved " + year;

//start making navItems dynamic
navItems.forEach((navItem) =>{
    navItem.addEventListener('click', () =>{
        location.href = `${navItem.textContent}.html`
    })
})
navList.forEach((navListItem) =>{
    navListItem.addEventListener('click', () =>{
        location.href = `${navListItem.textContent}.html`
        this.classList.add('active');
    })
})