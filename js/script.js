/*
  AUTHER: DOUGLAS WISSETT WALKER
  TITLE:  PERSONAL SITE for douglas-walker.com
*/

$(document).ready(() => {
  console.log('js loaded');




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

    $('html, body').animate({scrollTop: $('#profile').offset().top }, 1500);
  });

  $('.workNav').click((e) => {
    e.preventDefault();

    $('html, body').animate({scrollTop: $('#work').offset().top - 120}, 1500);
  });

  $('.contactNav').click((e) => {
    e.preventDefault();

    $('html, body').animate({scrollTop: $('#contact').offset().top - 120}, 1500);
  });

  $('#contactHere').click((e) => {
    e.preventDefault();

    $('html, body').animate({scrollTop: $('#contactForm').offset().top - 120}, 1500);
  });



});