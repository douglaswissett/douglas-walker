/*
  AUTHER: DOUGLAS WISSETT WALKER
  TITLE:  PERSONAL SITE for douglas-walker.com
*/

$(document).ready(() => {
  console.log('js loaded');


  // // fiddle to hide nav bar
  // (function($) {
  //   var ost = 0;
  //   $(window).scroll(function() {
  //     var cOst = $(this).scrollTop();

  //     if(cOst > ost) {
  //        $('nav').addClass('fixed').removeClass('default');
  //     }
  //     else {
  //        $('nav').addClass('default').removeClass('fixed');
  //     }

  //     ost = cOst;
  //   });
  // })(jQuery);

  // grab an element
  var elem = document.querySelector("#header");
  // construct an instance of Headroom, passing the element
  var headroom = new Headroom(elem, {
    "offset": 205,
    "tolerance": 5,
    "classes": {
      "initial": "animated",
      "pinned": "slideDown",
      "unpinned": "slideUp"
    }
  });
  headroom.init();



})