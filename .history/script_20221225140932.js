const button = Array.from(document.querySelector(".ratingCont").children);

button.forEach(function (el) {
  el.addEventListener("click", function () {
    el.classList.add("filter");
  });
});

document.querySelector("#submit").addEventListener("click", function () {
  //   el.preventDefault();
  document.getElementsByClassName("card").style.display = "none";
  document.getElementsByClassName("thanks").style.display = "block";
});
