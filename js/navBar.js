const cards = document.querySelector("#show-more-1");
const showMoreButton1 = document.querySelector("#showMoreButton1");

showMoreButton1.addEventListener("click", () => {
  if (cards.style.display === "none" || cards.style.display === "") {
    cards.style.display = "block";
  } else {
    cards.style.display = "none";
  }
});

const cards2 = document.querySelector("#show-more-2");
const showMoreButton2 = document.querySelector("#showMoreButton2");

showMoreButton2.addEventListener("click", () => {
  if (cards2.style.display === "none" || cards2.style.display === "") {
    cards2.style.display = "block";
  } else {
    cards2.style.display = "none";
  }
});

const moreButton = document.querySelector("#more");
const navbar = document.querySelector("#navegation");
