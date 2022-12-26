const button = document.querySelector;

button.forEach(function (el) {
  el.addEventListener("click", function () {
    for (let i = 0; i < button.length; i++) {
      button[i].classList.remove("filter");
    }
    for (let i = 0; i < port.length; i++) {
      if (el.innerHTML != "الكل") {
        port[i].style.display = "none";
        if (port[i].getAttribute("data-filter") == el.innerHTML) {
          port[i].style.display = "block";
          el.classList.add("filter");
        }
      } else {
        el.classList.add("filter");
        port[i].style.display = "block";
      }
    }
  });
});
