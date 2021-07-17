
// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             window.webkitRequestAnimationFrame ||
             window.mozRequestAnimationFrame ||
             window.msRequestAnimationFrame ||
             window.oRequestAnimationFrame ||
             // IE Fallback, you can even fallback to onscroll
             function(callback){ window.setTimeout(callback, 1000/60) };
var elementsToShow = document.querySelectorAll('.zoom-on-scroll'); 

function loop() {

    elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        if(!element.classList.contains("active")){
          element.classList.add('active');
        }
        
      } else {
        element.classList.remove('active');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();
  var elTopExpectOnVP=(window.innerHeight/2);
  return (
    (elTopExpectOnVP >= rect.top
      && elTopExpectOnVP <= rect.bottom)
   
  );
}