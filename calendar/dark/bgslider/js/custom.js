/* --------------------------------------------
Page Loader
-------------------------------------------- */
$(window).load(function() {
    'use strict';
    $(".loader-item").delay(700).fadeOut();
    $("#pageloader").delay(800).fadeOut("slow");
});


/* --------------------------------------------
Ready Function
-------------------------------------------- */

$(document).ready(function($) {
    'use strict';

    /* --------------------------------------------
	Animated Items
	-------------------------------------------- */
    $('.animated').appear(function() {
        var elem = $(this);
        var animation = elem.data('animation');
        if (!elem.hasClass('visible')) {
            var animationDelay = elem.data('animation-delay');
            if (animationDelay) {
                setTimeout(function() {
                    elem.addClass(animation + " visible");
                }, animationDelay);
            } else {
                elem.addClass(animation + " visible");
            }
        }
    });

    /* --------------------------------------------
	Testimonial Slider
	-------------------------------------------- */
    $('body').find('#testimonials-slider').owlCarousel({
        items: 1,
        autoPlay: 3000,
        slideSpeed: 500,
        //navigation: true,
        //navigationText: ['<i class="icon-arrow-left15"></i>','<i class="icon-arrow-right15"></i>'],  
        pagination: true,
        paginationText: ['<i class="icon-arrow-left15"></i>', '<i class="icon-arrow-right15"></i>'],
        singleItem: true,
        itemsDesktop: [1250, 1],
        itemsDesktopSmall: [991, 1],
        itemsMobile: [480, 1],
        transitionStyle: "fade"
    });

    /* --------------------------------------------
	Client Slider
	-------------------------------------------- */
    if ($('#clients-slider').length !== 0) {
        $('#clients-slider').owlCarousel({
            items: 5,
            itemsDesktop: [1250, 5],
            itemsDesktopSmall: [991, 3],
            itemsTablet: [768, 2],
            itemsMobile: [480, 1],
            autoPlay: 3000,
            slideSpeed: 500
        });
    }

    /* --------------------------------------------
	MixItup Filter Js 
	-------------------------------------------- */
    $('#mix-container').mixItUp();

    /* --------------------------------------------
	Video Script 
	-------------------------------------------- */
    $(".player").mb_YTPlayer();

    /* --------------------------------------------
	Pretty Photo
	-------------------------------------------- */
    $('body').find("a[data-rel^='prettyPhoto']").each(function() {
        $("a[data-rel^='prettyPhoto']").prettyPhoto({
            theme: "light_rounded",
            social_tools: false,
            deeplinking: false,
			hook: 'data-rel'
        });
    });

    /* --------------------------------------------
    Scroll Navigation
    -------------------------------------------- */
	$(document).on('click','.scroll',function(event){
		var $anchor = $(this);
		var headerH = $('#navigation').outerHeight();
		$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top + 2 + "px"
		}, 1200, 'easeInOutExpo');
		event.preventDefault();
	});

    /* --------------------------------------------
	Menus hide after click --  mobile devices
	-------------------------------------------- */
	$(document).on('click','.nav li a',function(){
		$('.navbar-collapse').removeClass('in');
	});

    /* --------------------------------------------
	Fixed Menu on Scroll
	-------------------------------------------- */
    $(function($) {
        $("#sticky-section").sticky({
            topSpacing: 0
        });
	});
       
	/* --------------------------------------------
	Active Navigation 
	-------------------------------------------- */
	$(function() {
		"use strict";
		$('body').scrollspy({
			target: '#topnav',
			offset: 95
		});
	});

    /* --------------------------------------------
	Contact Form
	-------------------------------------------- */
    $(function($) {
        $('#contactform').bootstrapValidator({
            message: '',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                contact_name: {
                    validators: {
                        notEmpty: {
                            message: ''
                        }
                    }
                },
                contact_email: {
                    validators: {
                        notEmpty: {
                            message: ''
                        },
                        emailAddress: {
                            message: ''
                        }
                    }
                },
                contact_message: {
                    validators: {
                        notEmpty: {
                            message: ''
                        }
                    }
                }
            },
            submitHandler: function(validator, form, submitButton) {
                $('.contact-form').addClass('ajax-loader');
                var data = $('#contactform').serialize();
                $.ajax({
                    type: "POST",
                    url: "process.php",
                    data: $('#contactform').serialize(),
                    success: function(msg) {
                        $('.contact-form').removeClass('ajax-loader');
                        $('.form-message').html(msg);
                        $('.form-message').show();
                        submitButton.removeAttr("disabled");
                        resetForm($('#contactform'));
                    },
                    error: function(msg) {
                        $('.contact-form').removeClass('ajax-loader');
                        $('.form-message').html(msg);
                        $('.form-message').show();
                        submitButton.removeAttr("disabled");
                        resetForm($('#contactform'));
                    }
                });
                return false;
            },
        });
        function resetForm($form) {
			$form.find('input:text, input:password, input, input:file, select, textarea').val('');
			$form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
        }
	});
	
	/* --------------------------------------------
	Google Map
	--------------------------------------------- */
	$(function() {
		"use strict";
		function initialize() {
			var myLatlng = new google.maps.LatLng(44.5403, -78.5463);
			var mapOptions = {
				zoom: 8,
				disableDefaultUI: false,
				scrollwheel: true,
				draggable: true,
				center: myLatlng
			};
			var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
			var contentString = '<div id="map-content">' +
				'<p>Envato Pvt Ltd.</p>' +
				'<div>NJ 07305,</div>' +
				'<div>New York,</div>' +
				'<div>USA</div>'
			'</div>';
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});
			var marker = new google.maps.Marker({
				position: map.getCenter(),
				icon: {
					path: google.maps.SymbolPath.CIRCLE,
					scale: 10
				},
				map: map
			});
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map, marker);
			});
		}
		$('.map').each(function() {
			google.maps.event.addDomListener(window, 'load', initialize);
		});
	});
	
	/* --------------------------------------------
	Text Slider 
	-------------------------------------------- */
	$(function() {
		var dd = $('.homeSlider').easyTicker({
			direction: 'up',
			easing: 'easeInOutBack',
			speed: 'slow',
			interval: 2500,
			height: 'auto',
			visible: 1,
			mousePause: 0,
			controls: {
				up: '.up',
				down: '.down',
				toggle: '.toggle',
				stopText: 'Stop !!!'
			}
		}).data('easyTicker');
	});
	
	/* --------------------------------------------
	Text Slider 
	-------------------------------------------- */
	$('#slides').superslides({
      animation: 'fade'
    });
});


/* --------------------------------------------
Count Factors
-------------------------------------------- */
$(function() {
    $(".fact-number").appear(function() {
        $('.fact-number').each(function() {
            dataperc = $(this).attr('data-perc'),
                $(this).find('.factor').delay(6000).countTo({
                    from: 10,
                    to: dataperc,
                    speed: 3000,
                    refreshInterval: 50
                });
        });
    });
});
(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };
    $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 100, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        onUpdate: null, // callback method for every time the element is updated,
        onComplete: null // callback method for when the element finishes updating
    };
})(jQuery);

/* --------------------------------------------
Progress Bar
-------------------------------------------- */
$('.progress-bar').appear(function() {
	datavl = $(this).attr('aria-valuenow'),
	$(this).animate({
		"width": datavl + "%"
	}, '25000');
});