// PLACE HOLDER

const Timeout1 = setTimeout(placeholder, 3000);

function placeholder() {
  document.getElementById("place-item").style.display = "none";
}
const Timeout2 = setTimeout(spinner, 3000);

function spinner() {
  document.getElementById("spin").style.display = "none";
}
const Timeout3 = setTimeout(content, 3000);

function content() {
  document.getElementById("content").style.display = "block";
}
const Timeout4 = setTimeout(slider, 2500);

function slider() {
  document.getElementById("carouselExampleAutoplaying").style.display = "block";
}

//  NAVBAR JS

function myFunction(x) {
  x.classList.toggle("change");
}

function nav_toggle() {
  document.getElementById("nav_item2").classList.toggle("toggle");
}

// SHOW LESS AND MORE

function more() {
  let more = document.getElementById("more");
  document.getElementById("text").classList.toggle("text");
  if (more.innerText == "Show more") {
    more.innerText = "Show less";
  } else {
    more.innerText = "Show more";
  }
}

// SEARCH BAR SERACH JS

var searchBar = document.getElementById("search_bar");
var searchButton = document.getElementById("search_btn");

searchBar.addEventListener("input", function () {
  var searchText = searchBar.value.toLowerCase();

  if (searchText === "home" || searchText === "shoes") {
    searchButton.setAttribute("href", "#");
  } else if (searchText === "man shoes" || searchText === "men shoes") {
    searchButton.setAttribute("href", "#hero");
  } else if (searchText === "air force" || searchText === "air force shoes") {
    searchButton.setAttribute("href", "#airforce");
  } else if (searchText === "air max" || searchText === "air max shoes") {
    searchButton.setAttribute("href", "#airmax");
  } else if (searchText === "air jordan" || searchText === "air jordan shoes") {
    searchButton.setAttribute("href", "#airjordan");
  } else if (searchText === "nike" || searchText === "about") {
    searchButton.setAttribute("href", "#about");
  } else if (searchText === "service" || searchText === "services") {
    searchButton.setAttribute("href", "#services");
  } else if (searchText === "contact" || searchText === "payment") {
    searchButton.setAttribute("href", "#contact");
  } else if (searchText === "location" || searchText === "address") {
    searchButton.setAttribute("href", "#map");
  } else {
    searchButton.removeAttribute("href");
  }
});
