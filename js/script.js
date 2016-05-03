/*
  AUTHER: DOUGLAS WISSETT WALKER
  TITLE:  PERSONAL SITE for douglas-walker.com
*/

$(document).ready(() => {
  console.log('js loaded');

  
  // grab an element
  var myElement = document.querySelector("#header");
  // construct an instance of Headroom, passing the element
  var headroom  = new Headroom(myElement);
  // initialise
  headroom.init(); 



  // Header navigation link slow scroll animate on page
  $('#aboutNav').click((e) => {
    e.preventDefault();

    $('html, body').animate({scrollTop:610}, 1000);
  });

  $('#workNav').click((e) => {
    e.preventDefault();

    $('html, body').animate({scrollTop:1900}, 1000);
  });

  $('#contactNav').click((e) => {
    e.preventDefault();

    $('html, body').animate({scrollTop:3000}, 1000);
  });

  // Paragraph contact here link slow scroll to page
  $('#contactHere').click((e) => {
    e.preventDefault();

    $('html, body').animate({scrollTop:3000}, 1000);
  });



});