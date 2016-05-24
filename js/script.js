$(document).ready(() => {
  // fullPage.js init
  $('#fullpage').fullpage({
    scrollBar: true,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);

      //using index
      if(index == 2){
        setTimeout(() => {
          $('#earth-img').animate({ top: '300', right: '160'}, { duration: 1500,easing: "easeOutBounce"});
        }, 200);
      }
    }
  });
  /* Headroom.js code */
  // grab an element
  var myElement = document.querySelector("#header");
  // construct an instance of Headroom, passing the element
  var headroom  = new Headroom(myElement);
  // initialise
  headroom.init();
  // Navigation anchor links slow scroll animate on page
  $('.aboutNav').click((e) => {
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#profile').offset().top - 20 }, 800);
  });
  $('.workNav').click((e) => {
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#work').offset().top - 160 }, 800);
  });
  $('.contactNav').click((e) => {
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#contact').offset().top - 30 }, 800);
  });
  $('#contactHere').click((e) => {
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#contact').offset().top - 30 }, 800);
  });
});
