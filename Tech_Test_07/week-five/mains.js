window.onload = () => filterProjects("all");

const filterProjects = (selection) => {
  const items = document.getElementsByClassName("portfolio-item");
  Array.from(items).forEach((item) => {
    if (selection === "all" || item.contains(selection)) {
      item.classList.add("filtered");
      highlight();
    } else {
      item.classList.remove("filtered");
    }
  });
};

const highlight = () => {
  const buttons = document.getElementsByClassName("btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove("active");
      }
      buttons[i].classList.add("active");
    });
  }
}
