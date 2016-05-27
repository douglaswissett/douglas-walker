$(document).ready(()=>{
  console.log('Version 2');
  $(".button-collapse").sideNav();
  // Init Parallax scenes
  $('#scene').parallax();
  $('#scene2').parallax();



 $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    scrollingSpeed: 700,
    responsiveWidth: 900,
    autoScrolling: false,
  });











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
