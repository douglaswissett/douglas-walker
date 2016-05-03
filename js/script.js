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



})