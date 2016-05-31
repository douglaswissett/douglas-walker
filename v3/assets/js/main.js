/*
	Solid State by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	"use strict";

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
					$('.dark-overlay').fadeOut();
				}, 300);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}

		// Menu.
			var $menu = $('#menu');

			$menu._locked = false;

			$menu._lock = function() {

				if ($menu._locked)
					return false;

				$menu._locked = true;

				window.setTimeout(function() {
					$menu._locked = false;
				}, 350);

				return true;

			};

			$menu._show = function() {

				if ($menu._lock())
					$body.addClass('is-menu-visible');

			};

			$menu._hide = function() {

				if ($menu._lock())
					$body.removeClass('is-menu-visible');

			};

			$menu._toggle = function() {

				if ($menu._lock())
					$body.toggleClass('is-menu-visible');

			};

			$menu
				.appendTo($body)
				.on('click', function(event) {

					event.stopPropagation();

					// Hide.
						$menu._hide();

				})
				.find('.inner')
					.on('click', '.close', function(event) {

						event.preventDefault();
						event.stopPropagation();
						event.stopImmediatePropagation();

						// Hide.
							$menu._hide();

					})
					.on('click', function(event) {
						event.stopPropagation();
					})
					.on('click', 'a', function(event) {

						var href = $(this).attr('href');

						event.preventDefault();
						event.stopPropagation();

						// Hide.
							$menu._hide();

						// Redirect.
							window.setTimeout(function() {
								window.location.href = href;
							}, 350);

					});

			$body
				.on('click', 'a[href="#menu"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Toggle.
						$menu._toggle();

				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$menu._hide();

				});
	});

		// fullpage for hero image
		$('#fullpage').fullpage({
			autoScrolling: false,
			fitToSection: false,
			scrollingSpeed: 1000,
		});

		// loading page

		$('.dark-overlay').show();

	// page load animate banner down

	$('#banner .inner').addClass('fadeInDown');


	// scrollfire animate.css
	$('#banner .inner').scrollfire({
    onTopOut: function( elm, distance_scrolled ) {
			$(elm).removeClass('fadeInDown');
			$(elm).addClass('fadeOutUp');
    },
    onTopIn: function( elm, distance_scrolled ) {
			$(elm).removeClass('fadeOutUp');
			$(elm).addClass('fadeInDown');
    },
	});
	$('#one .inner').scrollfire({
    onTopOut: function( elm, distance_scrolled ) {
			$(elm).removeClass('fadeInRight');
			$(elm).addClass('fadeOutRight');
    },
    onTopIn: function( elm, distance_scrolled ) {
			$(elm).removeClass('fadeOutRight');
			$(elm).addClass('fadeInRight');
    },
		onBottomIn: function(elm, distance_scrolled) {
			$(elm).removeClass('fadeOutRight');
			$(elm).addClass('fadeInRight'); 
		},
    onBottomOut: function( elm, distance_scrolled ) {
			$(elm).removeClass('fadeInRight');
			$(elm).addClass('fadeOutRight');
    },
	});
	$('#two .inner').scrollfire({
    onTopOut: function( elm, distance_scrolled ) {
			$(elm).removeClass('fadeInLeft');
			$(elm).addClass('fadeOutLeft');
    },
    onTopIn: function( elm, distance_scrolled ) {
			$(elm).removeClass('fadeOutLeft');
			$(elm).addClass('fadeInLeft');
    },
		onBottomIn: function(elm, distance_scrolled) {
			$(elm).removeClass('fadeOutLeft');
			$(elm).addClass('fadeInLeft'); 
		},
    onBottomOut: function( elm, distance_scrolled ) {
			$(elm).removeClass('fadeInLeft');
			$(elm).addClass('fadeOutLeft');
    },
	});
	$('#three .inner').scrollfire({
    onTopOut: function( elm, distance_scrolled ) {
			$(elm).removeClass('fadeInRight');
			$(elm).addClass('fadeOutRight');
    },
    onTopIn: function( elm, distance_scrolled ) {
			$(elm).removeClass('fadeOutRight');
			$(elm).addClass('fadeInRight');
    },
		onBottomIn: function(elm, distance_scrolled) {
			$(elm).removeClass('fadeOutRight');
			$(elm).addClass('fadeInRight'); 
		},
    onBottomOut: function( elm, distance_scrolled ) {
			$(elm).removeClass('fadeInRight');
			$(elm).addClass('fadeOutRight');
    },
	});
	$('#four .inner').scrollfire({
		onBottomIn: function(elm, distance_scrolled) {
			$(elm).addClass('fadeInUp'); 
		}
	});
	$('#footer .inner').scrollfire({
		onBottomIn: function(elm, distance_scrolled) {
			$(elm).addClass('fadeIn'); 
		}
	});

	// Project page

		// Back button
		$('.p-back').click(function(event) { 
			event.preventDefault();

			$('.project-page').fadeOut();
			$('.p-list').fadeIn();
		});

		$('.p-link').click(function(event) {
			event.preventDefault();

		  $('html, body').animate({
		      scrollTop: $('#four').offset().top -100
		  },300);
		});

	$('.link-1').click(function(event) {
		event.preventDefault();
		$('.p-list').fadeOut();
		$('.project-1').fadeIn();
	});
	$('.link-2').click(function(event) {
		event.preventDefault();
		$('.p-list').fadeOut();
		$('.project-2').fadeIn();
	});
	$('.link-3').click(function(event) {
		event.preventDefault();
		$('.p-list').fadeOut();
		$('.project-3').fadeIn();
	});
	$('.link-4').click(function(event) {
		event.preventDefault();
		$('.p-list').fadeOut();
		$('.project-4').fadeIn();
	});


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
  });

})(jQuery);