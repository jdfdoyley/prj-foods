const icons = document.querySelectorAll(".section-1-icons i");
let counter = 1;
setInterval(() => {
  // select the icon that currently has the change class
  // remove the change class after 4s
  // select the next icon
  // add the change class to it
  const icon = document.querySelector(".section-1-icons i.change");
  icon.classList.remove("change");
  
  counter++;

  if (counter > icons.length) {
    counter = 1;
    icons[0].classList.add("change");
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 4000);
