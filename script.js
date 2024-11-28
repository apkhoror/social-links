const popup = document.querySelector(".popup");
const popupContainer = document.querySelector(".container");
const donasi = function (e) {
  e.preventDefault();

  popup.classList.add("show");
  popupContainer.classList.add("show");
  document.body.classList.add("no-scroll");
};

popup.addEventListener("click", function () {
  popup.classList.remove("show");
  popupContainer.classList.remove("show");
  document.body.classList.remove("no-scroll");
});
