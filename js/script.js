
const callapsibles = document.querySelectorAll(".callapsible");
callapsibles.forEach((item) =>
  item.addEventListener("click", function() {
    this.classList.toggle("callapsible--expanded");
  })
);
