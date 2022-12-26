const button = Array.from(document.querySelector(".ratingCont").children);

button.forEach(function (el) {
  el.addEventListener("click", function () {
    for (let i = 0; i < button.length; i++) {
      button[i].classList.remove("checked");
    }
    el.classList.add("filter");
  });
});

document.querySelector("#submit").addEventListener("click", (el) => {
  el.preventDefault();
  document.getElementsByClassName("card").style.display = "none";
  document.getElementsByClassName("thanks").style.display = "block";
});
