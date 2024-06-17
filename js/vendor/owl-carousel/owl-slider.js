/// JavaScript Document
$(document).on('ready', function() {
	  var owl = $("#owl-demo");	 
	  owl.owlCarousel({
		  autoPlay: 4000,
		  items : 3, //2 items above 1000px browser width
		  itemsDesktop : [1920,1], //2 items between 1920px and 901px
		  itemsDesktopSmall : [900,1], // 2 items betweem 900px and 641px
		  itemsTablet: [640,1], //1 item between 640 and 0
		  itemsMobile : [380,1] 
	  });
	 
	  // Custom Navigation Events
	  $(".next").click(function(){
		owl.trigger('owl.next');
	  })
	  $(".prev").click(function(){
		owl.trigger('owl.prev');
	  })
	  $(".play").click(function(){
		owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
	  })
	  $(".stop").click(function(){
		owl.trigger('owl.stop');
	  })
	 


	// TESTIMONIAL CAROUSEL
	var owl = $("#owl-demo1");	 
	owl.owlCarousel({
		 autoPlay: 4000,
		 items : 3, //10 items above 1000px browser width
		 itemsDesktop : [1920,2], //5 items between 1000px and 901px
		 itemsDesktopSmall : [900,1], // betweem 900px and 601px
		 itemsTablet: [600,1], //2 items between 600 and 0
		 itemsMobile : [380,1] 
	});
	 
	// Custom Navigation Events
	$(".next").click(function(){
	  owl.trigger('owl.next');
	})
	$(".prev").click(function(){
	   owl.trigger('owl.prev');
	})
	$(".play").click(function(){
	owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
	})
	$(".stop").click(function(){
	owl.trigger('owl.stop');
	})
	 
});


