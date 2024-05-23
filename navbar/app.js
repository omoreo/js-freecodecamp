//classlist - shows/gets all classes
// contains - checks classlist for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
    // if(links.classList.contains("show-links")){
    //     links.classList.remove("show-links");
    // } else {                                       Full Classes for toggle without DOM .toggle Cool
    //     links.classList.add("show-links")
    // }
    links.classList.toggle("show-links")
})