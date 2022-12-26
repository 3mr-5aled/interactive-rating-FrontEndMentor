const button = Array.from(document.querySelector(".ratingCont").children);

button.forEach(function (el) {
  el.addEventListener("click", function () {
    button.forEach((el) => {
      el.classList.remove("checked");
    });
    el.classList.add("checked");
  });
});

document.querySelector("#submit").addEventListener("click", function () {
  //   el.preventDefault();
  document.querySelector(".rating").style.display = "none";
  document.querySelector(".thanks").style.display = "flex";
});

var e = document.getElementById("ratingCont");
var ratingvalue = e.value;
document.querySelector("#selectedNum").innerHTML = `${ratingvalue}`;
