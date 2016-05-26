$(document).ready(() => {
  // init hide animate.css elements
  $('.about-col').hide();
  $('.about-col-header').hide();
  $('#work h1').hide();
  $('.row-design').hide();
  $('.row-dev').hide();
  $('.about-btn').hide();
  // fullPage.js init
  $('#fullpage').fullpage({
    scrollBar: true,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    scrollingSpeed: 700,
    loopHorizontal: false,

    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);
      //using index
      if(index == 1) {
        // hide fixed nav arrows  
        $('.nav-arrow').fadeOut();
        setTimeout(() => {
          $('.kurama h1').addClass('animated flipInY');
        }, 200 );
        $('.float-1').addClass('animated bounceInLeft');
        $('.float-2').addClass('animated bounceInLeft');
        $('.obito h1').addClass('animated bounceInLeft');
        $('.minato h1').addClass('animated bounceInLeft')
        $('#findMore').addClass('animated bounceInUp');
      }
      if(index == 2){
        // show fixed nav arrows
        $('.arrow-bottom').fadeIn();
        $('.arrow-bottom').addClass('flipInX');
        // animate.css
        $('.about-col').fadeIn();
        $('.about-col-header').fadeIn();
        $('.about-col').addClass('animated bounceInUp');
        $('.about-col-header').addClass('animated bounceInDown');
      }
      if(index == 3) {
        // display fixed nav arrows
        $('.nav-arrow').fadeIn();
        $('.nav-arrow').addClass('flipInX')
        // animate.css
        setTimeout(() => { $('#work h1').fadeIn(); $('#work h1').addClass('animated zoomIn');
        }, 200 );
        $('.row-design').fadeIn();
        $('.web-design').addClass('animated fadeInLeft');
        $('.section-image.design').addClass('animated bounceInLeft');
        $('.row-dev').fadeIn();
        $('.row-dev').addClass('animated rollIn');
      }
      if(index == 4) {
        // display fixed nav arrows
        $('.nav-arrow').fadeIn();
        $('.nav-arrow').addClass('flipInX')
      }
      if(index == 5) {
        // display fixed nav arrows
        $('.nav-arrow').fadeIn();
        $('.nav-arrow').addClass('flipInX')
      }
      if(index == 6) {
        $('.arrow-bottom').fadeOut();
      }
    },
    onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
      let leavingSlide = $(this);
      //leaving the first slide of the 2nd Section to the right
      if(index == 4 && slideIndex == 0 && direction == 'right'){
        $('.special-line').removeClass('zoomInRight');
        $('.special-line').addClass('zoomOutLeft');
      }
      //leaving the 3rd slide of the 2nd Section to the left
      if(index == 4 && slideIndex == 1 && direction == 'left'){
        $('.special-line').removeClass('zoomOutLeft');
        $('.special-line').addClass('zoomInRight');
      }
    }
  });
  // fullPage.js btn navigation
  $('.arrow-top').click((e) => {
    $.fn.fullpage.moveSectionUp();
  });
  $('.arrow-bottom').click((e) => {
    $.fn.fullpage.moveSectionDown();
  });
  $('#findMore').click((e) => {
    $.fn.fullpage.moveTo(2);
  });
  $('.about-btn').click((e) => {
    $.fn.fullpage.moveTo(3);
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
    $.fn.fullpage.moveTo(2);
  });
  $('.workNav').click((e) => {
    e.preventDefault();
    $.fn.fullpage.moveTo(4);
  });
  $('.contactNav').click((e) => {
    e.preventDefault();
    $.fn.fullpage.moveTo(5);
  });
  $('#contactHere').click((e) => {
    e.preventDefault();
    $.fn.fullpage.moveTo(5);
  });
  // Init Parallax scenes
  $('#scene').parallax();
  $('#scene2').parallax();
  // My work slideshow image cycles
  function fadeInLastImg(index) {
    var backImg = $('.ss'+index+' img:first');
    backImg.hide();
    backImg.remove();
    $('.ss'+index ).append( backImg );
    backImg.fadeIn({ duration: 1500 })
  };
  $('.my-work-img').each((index) => {
    setInterval(function(){
      fadeInLastImg(index + 1)
    }, 4000);
  })
});
