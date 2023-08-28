/**
 * 24/08/23
 */

const body = document.body;
const imageSet = body.getElementsByClassName("carousel-img");
const leftButton = document.getElementById("left-btn");
const rightButton = document.getElementById("right-btn");

/**
 * Assign Events
 */
leftButton.addEventListener("click", (e) => {
  console.log("click Left");
  moveRight();
});

rightButton.addEventListener("click", (e) => {
  console.log("click Right");
  moveLeft();
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
}

function moveRight() {
  console.log("click Right");

  for (i = 0; i < imageSet.length; i++) {
    imageSet.item(i).classList.remove("carousel-img-left");
    imageSet.item(i).classList.add("carousel-img-right");
    checkImageClassList(imageSet.item(i));
  }
}

function checkImageClassList(element) {
  console.log(element.classList);
}
