const popup = document.querySelector(".popup");
const donasi = function (e) {
  e.preventDefault();

  popup.classList.add("show");
  document.body.classList.add("no-scroll");
};

popup.addEventListener("click", function () {
  popup.classList.remove("show");
  document.body.classList.remove("no-scroll");
});
