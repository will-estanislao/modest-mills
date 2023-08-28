/**
 * 24/08/23
 */

const body = document.body;
const imageSet = body.getElementsByClassName("carousel-img");
const leftButton = document.getElementById("left-btn");
const rightButton = document.getElementById("right-btn");

leftButton.onload = leftButton.style.visibility = "hidden";

/**
 * Assign Events
 */
leftButton.addEventListener("click", (e) => {
  console.log("click Left");
  moveLeft();
});

rightButton.addEventListener("click", (e) => {
  console.log("click Right");
  moveRight();
});

/**
 * Functions
 */

// Moves the images in the carousel
// Determine the button clicked
// Depending on which button is clicked move
function moveLeft() {
  for (i = 0; i < imageSet.length; i++) {
    imageSet.item(i).classList.remove("carousel-img-right");
    imageSet.item(i).classList.add("carousel-img-left");
    checkImageClassList(imageSet.item(i));
  }

  rightButton.style.visibility = "visible";
  leftButton.style.visibility = "hidden";
}

function moveRight() {
  console.log("click Right");

  for (i = 0; i < imageSet.length; i++) {
    imageSet.item(i).classList.remove("carousel-img-left");
    imageSet.item(i).classList.add("carousel-img-right");
    checkImageClassList(imageSet.item(i));
  }

  leftButton.style.visibility = "visible";
  rightButton.style.visibility = "hidden";
}

function checkImageClassList(element) {
  console.log(element.classList);
}
