const classesSlider = new Swiper('.classes-slider', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 700,
})


// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry
var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
  columnWidth: 160,
  itemSelector: '.grid-item'
});

var prependButton = document.querySelector('.prepend-button');
prependButton.addEventListener( 'click', function() {
  // create new item elements
  var elems = [];
  var fragment = document.createDocumentFragment();
  for ( var i = 0; i < 3; i++ ) {
    var elem = getItemElement();
    fragment.appendChild( elem );
    elems.push( elem );
  }
  // append elements to container
  grid.insertBefore( fragment, grid.firstChild );
  // add and lay out newly appended elements
  msnry.prepended( elems );
});

// create <div class="grid-item"></div>
function getItemElement() {
  var elem = document.createElement('div');
  var wRand = Math.random();
  var hRand = Math.random();
  var widthClass = wRand > 0.8 ? 'grid-item--width3' : wRand > 0.6 ? 'grid-item--width2' : '';
  var heightClass = hRand > 0.85 ? 'grid-item--height4' : hRand > 0.6 ? 'grid-item--height3' : hRand > 0.35 ? 'grid-item--height2' : '';
  elem.className = 'grid-item ' + widthClass + ' ' + heightClass;
  return elem;
}
