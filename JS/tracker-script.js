const AREA = document.body;
const CIRCLE = document.querySelector(".circle");
const CIRCLE_1 = document.querySelector(".circle-1");

var count = 0;
var para = document.createElement("h2");
CIRCLE_1.append(para);
CIRCLE_1.setAttribute("style", "width: 5%;");
para.setAttribute("style", "position: relative; left: 40%;");
para.append(count);

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
  // Capture the event object (mouse movement).
  // Get X coordinate (distance from left viewport edge) via clientX property.
  // Take total window width, subtract current coordinate and width of circle.
  // Do the same for Y coordinate (distance from top viewport edge).
  var horizontalPosition = windowWidth - e.clientX - 26;
  var verticalPosition = windowHeight - e.clientY - 26;

  // Set horizontal and vertical position.
  CIRCLE.style.left = horizontalPosition + "px";
  CIRCLE.style.top = verticalPosition + "px";
}

function changeColorOnTouch() {
  CIRCLE.style.backgroundColor = "green";
  CIRCLE.style.borderColor = "green";
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener("mousemove", mouseCoordinates, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener("mouseenter", changeColorOnTouch, false);

CIRCLE.addEventListener(
  "mouseenter",
  function () {
    para.innerHTML = ++count;
  },
  false
);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener(
  "mouseleave",
  function () {
    CIRCLE.removeAttribute("style");
  },
  false
);
