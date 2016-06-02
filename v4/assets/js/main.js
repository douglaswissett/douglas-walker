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
			// $body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
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
	$('#four .inner').scrollfire({
		onBottomIn: function(elm, distance_scrolled) {
			$(elm).addClass('fadeInLeft'); 
		},
	});
	$('#footer .inner').scrollfire({
		onBottomIn: function(elm, distance_scrolled) {
			$(elm).addClass('zoomIn'); 
		}
	});
	// swap footer header with "Thank you" on email clik
  $('#emailed').click(function(event) {
  	$('#footer h2').text('Thank you');
  });


	// confetti canvas inits
  $('.confetti').each(function(i, elm) {
		var canvas = elm;
		var ctx = canvas.getContext("2d");
		
		//canvas dimensions
		var W = window.innerWidth;
		var H = window.innerHeight;
		canvas.width = W;
		canvas.height = H;
		
		//snowflake particles
		var mp = 25; //max particles
		var particles = [];
		for(var i = 0; i < mp; i++)
		{
			particles.push({
				x: Math.random()*W, //x-coordinate
				y: Math.random()*H, //y-coordinate
				r: Math.random()*4+1, //radius
				d: Math.random()*mp, //density
	            color: "rgba(" + Math.floor((Math.random() * 255)) +", " + Math.floor((Math.random() * 255)) +", " + Math.floor((Math.random() * 255)) + ", 0.8)"
			})
		}
		
		//Lets draw the flakes
		function draw()
		{
			ctx.clearRect(0, 0, W, H);
			
			
			
			for(var i = 0; i < mp; i++)
			{ 
				var p = particles[i];
	            ctx.beginPath();
	            ctx.fillStyle = p.color;
				ctx.moveTo(p.x, p.y);
				ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
	            ctx.fill();
			}
			
			update();
		}
		
		//Function to move the snowflakes
		//angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
		var angle = 0;
		function update()
		{
			angle += 0.01;
			for(var i = 0; i < mp; i++)
			{
				var p = particles[i];
				//Updating X and Y coordinates
				//We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
				//Every particle has its own density which can be used to make the downward movement different for each flake
				//Lets make it more random by adding in the radius
				p.y += Math.cos(angle+p.d) + 1 + p.r/2;
				p.x += Math.sin(angle) * 2;
				
				//Sending flakes back from the top when it exits
				//Lets make it a bit more organic and let flakes enter from the left and right also.
				if(p.x > W+5 || p.x < -5 || p.y > H)
				{
					if(i%3 > 0) //66.67% of the flakes
					{
	                    particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d, color : p.color};
					}
					else
					{
						//If the flake is exitting from the right
						if(Math.sin(angle) > 0)
						{
							//Enter from the left
	                        particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d, color: p.color};
						}
						else
						{
							//Enter from the right
	                        particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d, color : p.color};
						}
					}
				}
			}
		}
		
		//animation loop
		setInterval(draw, 33);
  })

})(jQuery);