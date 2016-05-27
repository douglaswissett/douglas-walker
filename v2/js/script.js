$(document).ready(()=>{
  console.log('Version 2');
  $(".button-collapse").sideNav();
  // Init Parallax scenes
  $('#scene').parallax();



 $('#fullpage').fullpage({
    anchors: ['home', 'aboutme', 'about', 'skills', 'projects', 'contact'],
    scrollingSpeed: 700,
    responsiveWidth: 900,
    autoScrolling: false,
    fitToSection: false,
  });


    
  $('.parallax').parallax();
    






   // My work slideshow image cycles
  function fadeInLastImg(index) {
    var backImg = $('.ss'+index+' img:first');
    backImg.hide();
    backImg.remove();
    $('.ss'+index ).append( backImg );
    backImg.fadeIn({ duration: 1500 })
  };
  $('.work-img').each((index) => {
    setInterval(function(){
      fadeInLastImg(index + 1)
    }, 3000);
  });
});
