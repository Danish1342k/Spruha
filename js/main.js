
var menu = document.getElementById("sidebar-menu");
var toggle = document.getElementById("menu-toggle");
var main = document.getElementById("right-side");
var mainnav = document.getElementById("rightsideNav");
var headers = document.getElementsByClassName("nav-header");
var chevron = document.querySelectorAll(".fa-solid.fa-chevron-right");


function toggleMenu() {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    menu.style.width = "65px";
    main.style.marginLeft = "80px";
    mainnav.style.left = "65px";
    for (var i = 0; i < headers.length; i++) {
      headers[i].style.display = "none";
    }
    for (var i = 0; i < chevron.length; i++) {
      chevron[i].classList.add("hide");
    }


  } else {
    menu.style.width = "240px";
    main.style.marginLeft = "240px";
    mainnav.style.left = "240px";
    for (var i = 0; i < headers.length; i++) {
      headers[i].style.display = "block";
    }
    for (var i = 0; i < chevron.length; i++) {
      chevron[i].classList.remove("hide");
    }


  }
}

function opensidebaratmedia() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    document.getElementById("sidebar-menu").style.width = "240px";
  }
}

function closeicon() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    document.getElementById("sidebar-menu").style.width = "0";
  }
}