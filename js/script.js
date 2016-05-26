$(document).ready(() => {
  // init hide animate.css elements
  $('.about-col').hide();
  $('.about-col-header').hide();
  $('#work h1').hide();
  $('.row-design').hide();
  $('.row-dev').hide();
  // fullPage.js init
  $('#fullpage').fullpage({
    scrollBar: true,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    scrollingSpeed: 700,

    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);

      //using index
      if(index == 1) {
        setTimeout(() => {
          $('.kurama h1').addClass('animated flipInY');
        }, 200 );
        $('.float-1').addClass('animated bounceInLeft');
        $('.float-2').addClass('animated bounceInRight');
        $('.obito h1').addClass('animated bounceInLeft');
        $('.minato h1').addClass('animated bounceInLeft')
        $('#findMore').addClass('animated bounceInUp');
      }
      if(index == 2){
        $('.about-col').show();
        $('.about-col-header').show();
        $('.about-col').addClass('animated bounceInUp');
        $('.about-col-header').addClass('animated bounceInDown');
      }
      if(index == 3) {
        setTimeout(() => {
          $('#work h1').show();
          $('#work h1').addClass('animated zoomIn');
        }, 200 );
        $('.row-design').show();
        $('.web-design').addClass('animated fadeInLeft');
        $('.section-image.design').addClass('animated bounceInLeft');
        $('.row-dev').show();
        $('.row-dev').addClass('animated rollIn');
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
  $('#findMore').click((e) => {
    $.fn.fullpage.moveTo(2);
  });  
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
