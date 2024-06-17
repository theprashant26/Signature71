/*========================================== MASTER JAVASCRIPT ===================================================================

	Project     :	CONSTRUCTION TEMPLATE
	Version     :	1.0
	Last Change : 	14/03/2020
	Primary Use :   CONSTRUCTION TEMPLATE

=================================================================================================================================*/

$(document).on('ready', function() {
    "use strict"; //Start of Use Strict
    var menu_li = $('.navbar-nav li a');
    var collapse = $('.navbar-collapse');   
    var top_nav = $('#top-nav');


    //MENU SCROLL
    if (top_nav.length) {
        var x = top_nav.offset().top;
        if (x > 50) {
            top_nav.fadeIn();
        } else {
            top_nav.fadeOut();
        }
        $(document).on('scroll', function() {
            var y = $(this).scrollTop();
            if (y > 50) {
                top_nav.fadeIn();
            } else {
                top_nav.fadeOut();
            }
        });
    }

    //RESPONSIVE MENU SHOW AND HIDE FUNCTION
    if (menu_li.length) {
        menu_li.on("click", function(event) {
			var disp = $(".navbar-toggler").css('display'); 
			if( !$(".navbar-toggler").hasClass('collapsed') ){			
				if(collapse.hasClass('show')){
					collapse.removeClass('show').slideUp( "slow");
				}
			}            
        });    
    }	
	

    //MENU BAR SMOOTH SCROLLING FUNCTION
    var menu_list = $('.navbar-nav');
    if (menu_list.length) {
        menu_list.on("click", ".pagescroll", function(event) {
            event.stopPropagation();
            event.preventDefault();
            var hash_tag = $(this).attr('href');
            if ($(hash_tag).length) {
                $('html, body').animate({
                    scrollTop: $(hash_tag).offset().top - 0
                }, 2000);
            }
            return false;
        });
    }
	
	// ===== Scroll to Top ==== 
	$(window).on('scroll', function() {
		if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
			$('#return-to-top').fadeIn(200);    // Fade in the arrow
		} else {
			$('#return-to-top').fadeOut(200);   // Else fade out the arrow
		}
	});
	$('#return-to-top').on("click", function() {      // When arrow is clicked
		$('body,html').animate({
			scrollTop : 0                       // Scroll to top of body
		}, 500);
	});
	
    //COUNTER
    var counter = $('.count');
    if (counter.length) {
        counter.counterUp({
            delay: 10,
            time: 1000
        });
    }
	//GALLERY POPUP
    var gallery = $('.popup-gallery, .popup-portfolio');
    if (gallery.length) {
        $('.popup-gallery, .popup-portfolio').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });
    }
		
    // YOUTUBE BACKGROUND VIDEO FUNCTION	  
    var player = $('.player');
    if (player.length) {
        player.mb_YTPlayer();
    }
	
	 //CONTACT FORM VALIDATION	
    if ($('.contact-form').length) {
        $('.contact-form').each(function() {
            $(this).validate({
                errorClass: 'error',
                submitHandler: function(form) {
                    $.ajax({
                        type: "POST",
                        url: "mail/mail.php",
                        data: $(form).serialize(),
                        success: function(data) {
                            if (data) {
                                $(form)[0].reset();
								$('.sucessMessage').html('Mail Sent Successfully!!!');
                                $('.sucessMessage').show();
                                $('.sucessMessage').delay(3000).fadeOut();
                            } else {
                                $('.failMessage').html(data);
                                $('.failMessage').show();
                                $('.failMessage').delay(3000).fadeOut();
                            }
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            $('.failMessage').html(textStatus);
                            $('.failMessage').show();
                            $('.failMessage').delay(3000).fadeOut();
                        }
                    });
                }
            });
        });
    }
	
    return false;
    // End of use strict
});