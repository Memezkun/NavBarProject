// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
// let count = 0;

// navToggle.addEventListener("click", function () {
//     links.classList.toggle("show-links");
//     console.log(count);
//   } else if (count % 2 !== 0) {
//     links.classList.remove("show-links");
//     count++;
//     console.log(count);
//   }
// });

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
