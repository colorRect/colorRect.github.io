/*
 * Each Color Rect is a link <a>.
 * You need to make these links clickable, 
 * each link should color its own container (parent element with class name ‘.container’) 
 * into the color from data-color attribute.
 * 
 * Link ".animate-all" should animate color switching of each container, from left to right  
 * with time interval of 2 seconds.
 */

var a = document.querySelectorAll('li a');
var container = document.querySelectorAll('.container');
var animateAll = document.querySelector('.animate-all');
for (var i = 0; i < a.length; i++) {
  a[i].addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.parentNode.style.backgroundColor = this.dataset.color;
  });
}

animateAll.addEventListener('click', function () {
  var l;
  for (l = 0; l < a.length; l++) {
    setTimeout(function (l) {
      for (var j = 0; j < container.length; j++) {
        container[j].style.backgroundColor = a[l].dataset.color;
      };
    }, 2000 * l + 1, l);
  }
});