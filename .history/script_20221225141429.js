const button = Array.from(document.querySelector(".ratingCont").children);

button.forEach(function (el) {
  el.addEventListener("click", function () {
    button.forEach((el) => {
      el.classList.remove("checked");
    });
  });
});

document.querySelector("#submit").addEventListener("click", function () {
  //   el.preventDefault();
  document.querySelector(".rating").style.display = "none";
  document.querySelector(".thanks").style.display = "block";
});
