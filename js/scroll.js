// const slidePages = document.querySelectorAll('section[(id*="")]');

// for (let slidePage of slidePages) {
//   slidePage.addEventListener("scroll", (e) => {
//     lastKnownScrollPosition = window.scrollY;
//     e.preventDefault();
//     const blockSection = slidePage.getAttribute("id");

//     document.querySelector("" + blockSection).scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   });
// }
function scrollTo(e) {
  window.scroll({
    left: 0,
    top: 1000,
    behavior: "smooth",
  });
}

const scrollPages = document.querySelector("#page");
scrollPages.addEventListener("scroll", () => {
  scrollTo(page);
});
