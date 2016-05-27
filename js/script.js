$(document).ready(() => {
  // init hide animate.css elements
  $('.about-col').hide();
  $('.about-col-header').hide();
  $('#work h1').hide();
  $('.web-design').hide();
  $('.section-image.design').hide();
  $('.row-dev').hide();
  $('.about-btn').hide();
  $('.my-work-header').hide();
  $('.work-ul').hide();
  // fullPage.js init
  $('#fullpage').fullpage({
    scrollBar: true,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    scrollingSpeed: 700,
    responsiveWidth: 900,

    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);
      //using index
      if(index == 1) {
        // hide fixed nav arrows  
        $('.nav-arrow').fadeOut();
        $('.kurama h1').fadeIn();
        $('.float-1').fadeIn();
        $('.float-2').fadeIn();
        $('.obito h1').fadeIn();
        $('.minato h1').fadeIn();
        $('#findMore').fadeIn();
        $('.kurama h1').addClass('animated slideInLeft');
        $('.float-1').addClass('animated slideInLeft');
        $('.float-2').addClass('animated slideInRight');
        $('.obito h1').addClass('animated slideInLeft');
        $('.minato h1').addClass('animated slideInRight')
        $('#findMore').addClass('animated slideInUp');
      }
      if(index == 2){
        // show fixed nav arrows
        $('.nav-arrow').fadeIn();
        $('.nav-arrow').addClass('flipInX');
        // animate.css
        
        $('.about-col-header').fadeIn();
        setTimeout(()=>{
          $('.about-col').fadeIn();
          $('.about-col').addClass('animated slideInUp');
        },1000);
        $('.about-col-header').addClass('animated slideInLeft');
      }
      if(index == 3) {
        // display fixed nav arrows
        $('.nav-arrow').fadeIn();
        $('.nav-arrow').addClass('flipInX')
        // animate.css
        $('#work h1').fadeIn(); 
        $('#work h1').addClass('animated slideInLeft');
        

        setTimeout(()=>{
          $('.web-design').fadeIn();
          $('.web-design').addClass('animated fadeInLeft');
        },1000);
        $('.section-image.design').fadeIn();
        $('.section-image.design').addClass('animated bounceInLeft');
        $('.row-dev').fadeIn();
        $('.row-dev').addClass('animated rollIn');
      }
      if(index == 4) {
        // display fixed nav arrows
        $('.nav-arrow').fadeIn();
        $('.nav-arrow').addClass('flipInX')
        // animate.css
        $('.my-work-header').fadeIn();
        $('.my-work-header').addClass('animated slideInRight');
        setTimeout(()=>{
          $('.work-ul').fadeIn();
          $('.work-ul').addClass('animated slideInUp');
        },1000);
      }
      if(index == 5) {
        // display fixed nav arrows
        $('.nav-arrow').fadeIn();
        $('.nav-arrow').addClass('flipInX')

        $('.container.contact-container').addClass('animated tada')
      }
      if(index == 6) {
        $('.arrow-bottom').fadeOut();
      }
    },
    onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
      let leavingSlide = $(this);
      // $('.special-line').removeClass('zoomInRight');
      // $('.special-line').addClass('zoomOutLeft');
      //leaving the first slide of the 2nd Section to the right
      // if(index == 4 && slideIndex == 0 && direction == 'right'){
      //   $('.vertical-line').removeClass('slideOutRight slideInRight');
      //   $('.special-line').removeClass('fadeInRightBig');
      //   $('.special-line').addClass('fadeOutLeftBig');
      // }
      // //leaving the 3rd slide of the 2nd Section to the left
      // if(index == 4 && slideIndex == 1 && direction == 'left'){
      //   $('.special-line').removeClass('fadeOutLeftBig');
      //   $('.special-line').addClass('fadeInRightBig');
      // }
    },
    onLeave: function(index, nextIndex, direction){
      let leavingSection = $(this);
      // hide all animated elements
      $('.kurama h1').fadeOut();
      $('.float-1').fadeOut();
      $('.float-2').fadeOut();
      $('.obito h1').fadeOut();
      $('.minato h1').fadeOut();
      $('#findMore').fadeOut();
      $('.about-col').fadeOut();
      $('.about-col-header').fadeOut();
      $('#work h1').fadeOut();
      $('.web-design').fadeOut();
      $('.section-image.design').fadeOut();
      $('.row-dev').fadeOut();
      $('.about-btn').fadeOut();
      $('.my-work-header').fadeOut();
      $('.work-ul').fadeOut();
      // vertical black line animation
      $('.vertical-line').addClass('animated fadeOutRightBig');
      setTimeout(() => {
        $('.vertical-line').removeClass('fadeOutRightBig');
        $('.vertical-line').addClass('fadeInRightBig');
      },1000);
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
    }, 3000);
  })
});
