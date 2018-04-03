/*
  Theme Name: CAM
  Theme URL: http://www.themewar.com/html/camland
  Author: Warshape
  Author URI: http://www.themewar.com
  Description: CAM - Responsive Photography & Portfolio Template
  Version: 1.0
*/

(function ($) {
    'use strict';
    //========================
    // Loader AND Ribbon Slider
    //========================
    $(window).load(function() {
        if($(".loader").length > 0)
        {
            $(".loader").delay(500).fadeOut("slow");
        }

        if($(".ribbonSliderWrapper").length > 0)
        {
            ribbon_setup();
        }
    });
    
    
    if($(".revSlider").length > 0)
    {
        $('.tp-banner').revolution({
            delay:6000,                                                
            startheight:675,                            
            startwidth:1140,

            hideThumbs:200,

            thumbWidth:100,                            
            thumbHeight:50,
            thumbAmount:5,

            navigationType:"bullet",                  
            navigationArrows:"none",        
            navigationStyle:"round",                
            touchenabled:"on",                      
            onHoverStop:"on",                        

            navOffsetHorizontal:0,
            navOffsetVertical:20,

            shadow:0,
            fullWidth:"on"    
        });
    }
    
    if($(".bxslider").length > 0)
    {
        $('.bxslider').bxSlider({
            pagerCustom: '#bx-pager'
        });
    }
    if($("#home3_carousel").length > 0)
    {
        var owl = $("#home3_carousel");

        owl.owlCarousel({
        autoPlay: true,
        items : 4, //10 items above 1000px browser width
        itemsDesktop : [1000,4], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
        itemsTablet: [600,2], //2 items between 600 and 0;
        itemsMobile : [480,1], // itemsMobile disabled - inherit from itemsTablet option
        stopOnHover:true,
        responsive: true
        });

        // Custom Navigation Events
        $(".h3next").on('click', function(){
          owl.trigger('owl.next');
        });
        $(".h3prev").on('click', function(){
          owl.trigger('owl.prev');
        });
    }
    
    //=======================================================
    // Gallery Mixing
    //=======================================================
    if ($('#Grid').length > 0)
    {
        $('#Grid').themeWar();
    }
    
    if($(".flow").length > 0)
    {
        if($(window).width()>= 1200)
        {
            $('.flow').carousel({
                carouselWidth:1140,
                carouselHeight:400,
                directionNav:true,
                shadow:true,
                buttonNav:false,
                reflection:true,
                frontWidth: 370,
                frontHeight: 370,
                hMargin: .5,
                backZoom: .831,
                reflectionOpacity:0.6
            });
        }
        else if ($(window).width() > 767 && $(window).width() < 1200)
        {
            $('.flow').carousel({
                carouselWidth:700,
                carouselHeight:300,
                directionNav:true,
                shadow:true,
                buttonNav:false,
                reflection:true,
                frontWidth: 300,
                frontHeight: 300,
                hMargin: .5,
                backZoom: .731,
                reflectionOpacity:0.6
            });
        }
        else
        {
            $('.flow').carousel({
                carouselWidth:320,
                carouselHeight:150,
                directionNav:true,
                shadow:true,
                buttonNav:false,
                reflection:true,
                frontWidth: 150,
                frontHeight: 150,
                hMargin: .5,
                backZoom: .631,
                reflectionOpacity:0.6
            });
        }
    }
    
    if($(".gall4Cusom").length > 0)
    {
        $(".g4Img a").on('click', function(e){
            e.preventDefault();
        });
        $(".g4Img").on('click', function(){
            var sr = $(this).attr('data-srcbig');
            $("#gallThumb .g4Img").removeClass('iamActive');
            $(this).addClass('iamActive');
            $(".changeGall").fadeOut(400, function() {
                $(".changeGall").attr('src',sr);
            }).fadeIn(400);
        });
    }
    
    
    /*=======================
    // Our Team
    //=======================*/
    if($(".ourteam").length > 0)
    {
        $(' .teamMember ').each( function() { 
            $(this).hoverdir({
                hoverDelay : 90
            }); 
        });
    }
    if($(".teamSample").length > 0)
    {
        $(' .teamMember ').each( function() { 
            $(this).hoverdir({
                hoverDelay : 90
            }); 
        });
    }
    
    
    /*=======================
    // Home One Gallery
    //=======================*/
    if($(".homeGallery").length > 0)
    {
        $(' .hGalItem ').each( function() { 
            $(this).hoverdir({
                hoverDelay : 90
            }); 
        });
    }
    /*=======================
    // Contact Map
    //=======================*/
    if($("#map").length > 0)
    {
        var map;

		map = new GMaps({
			el: '#map',
			lat: 45.494447,
			lng: -73.5697587,
			scrollwheel:false,
			zoom: 16,
			zoomControl : true,
			panControl : false,
			streetViewControl : false,
			mapTypeControl: false,
			overviewMapControl: false,
			clickable: false
		});

		var image = '';
		map.addMarker({
			lat: 45.494447,
			lng: -73.5697587,
			icon: 'images/marker.png',
			animation: google.maps.Animation.DROP,
			verticalAlign: 'bottom',
			horizontalAlign: 'center',
			backgroundColor: '#d3cfcf'
		});

                
                
		var styles = [ 

		{
			"featureType": "road",
			"stylers": [
			{ "color": "#ffffff" }
			]
		},{
			"featureType": "water",
			"stylers": [
			{ "color": "#FFFFFF" }
			]
		},{
			"featureType": "landscape",
			"stylers": [
			{ "color": "#f5f5f5" }
			]
		},{
			"elementType": "labels.text.fill",
			"stylers": [
			{ "color": "#2d2d2d" }
			]
		},{
			"featureType": "poi",
			"stylers": [
			{ "color": "#a3a3a3" }
			]
		},{
			"elementType": "labels.text",
			"stylers": [
			{ "saturation": 1 },
			{ "weight": 0.1 },
			{ "color": "#2d2d2d" }
			]
		}

		];
                
                
                
		map.addStyle({
			styledMapName:"Styled Map",
			styles: styles,
			mapTypeId: "map_style"  
		});

		map.setStyle("map_style");
    }
    
    
    /*************************************
     *  Single Folio Carousel
     **************************************/
    if($("#sFolioSlide").length > 0)
    {
        var owl = $("#sFolioSlide");

        owl.owlCarousel({
            autoPlay: true,
            singleItem:true
        });

        // Custom Navigation Events
        $(".sfNext").on('click', function(e){
            e.preventDefault();
            owl.trigger('owl.next');
        });
        $(".sfPrev").on('click', function(e){
            e.preventDefault();
            owl.trigger('owl.prev');
        });
        $(".sfPlay").on('click', function(e){
            e.preventDefault();
            owl.trigger('owl.play',4000);
        });
        $(".sfStop").on('click', function(e){
            e.preventDefault();
            owl.trigger('owl.stop');
        });
    }
    /*************************************
     *  Home 5
     **************************************/
    if($("#home5Slider").length > 0)
    {
        var owl = $("#home5Slider");

        owl.owlCarousel({
            autoPlay: true,
            singleItem:true
        });

         //Custom Navigation Events
        $(".h5Next").on('click', function(e){
            e.preventDefault();
            owl.trigger('owl.next');
        });
        $(".h5Prev").on('click', function(e){
            e.preventDefault();
            owl.trigger('owl.prev');
        });
        $(".playh5").on('click', function(e){
            e.preventDefault();
            if($(this).hasClass('pauseit'))
            {
                owl.trigger('owl.play',4000);
                $(this).removeClass('pauseit');
                $("i", this).removeClass('fa-play').addClass('fa-pause');
            }
            else
            {
                owl.trigger('owl.stop');
                $(this).addClass('pauseit');
                $("i", this).removeClass('fa-pause').addClass('fa-play');
            }
        });
    }
    
    
    
    /***********************************
     * Menu Modal
     ***********************************/
    if($(".menuButon").length > 0)
    {
        $("#openMenu").animatedModal({
                modalTarget:'menuModal',
                animatedIn:'bounceInDown',
                animatedOut:'bounceOutUp',
                color:'#3498db'
                
        });
    }
    if($(".mainMenu").length > 0)
    {
        var subStatus = true;
        $(".hasChildItem > a").on('click', function(e){
           e.preventDefault();
           if($(this).parent('li').hasClass('active'))
           {
               $(this).parent('li').removeClass('active');
               $(this).next('ul.subMenu').slideUp('slow');
           }
           else
           {
                $(".mainMenu ul li.hasChildItem.active ul.subMenu").slideUp('slow');
                $(".mainMenu ul li.hasChildItem.active").removeClass("active");
                $(this).parent().toggleClass('active');
                $(this).next('ul.subMenu').slideToggle('slow');
            }
        });
    }
    /***********************************
     * Prettyphoto
     ***********************************/
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
     });
    
    /*************************************
     *  Gallery Carousel
     **************************************/
    $('.myGalleryModal').on('show.bs.modal', function (event) {
        
        var totalItems = $('#galleryCarousel .item').length;
        var currentIndex = $('#galleryCarousel div.active').index() + 1;
        $('.counts').html(''+currentIndex+' of '+totalItems+'');

        $('#galleryCarousel').on('slide.bs.carousel', function() {
            currentIndex = $('#galleryCarousel div.active').index() + 1;
           $('.counts').html(''+currentIndex+' of '+totalItems+'');
        });
    });
    
    /*************************************
     *  Gallery 3 Ribbon Slider
     **************************************/
    if($(".ribbonSliderWrapper").length > 0)
    {
        var window_h = $(window).height();
        var window_w = $(window).width();

        $('#ribbon_swipe').on("swipeleft",function(e){
            next_slide();
        });
        $('#ribbon_swipe').on("swiperight",function(e){
            prev_slide();
        });			
        $('.ltl_prev').on('click', function(){
            prev_slide();
        });
        $('.ltl_next').on('click', function(){
            next_slide();
        });
        $('.btn_prev').on('click', function(){
            prev_slide();
        });
        $('.btn_next').on('click', function(){
            next_slide();
        });

        $('.slide1').addClass('currentStep');
        $('.slider_caption').text($('.currentStep').attr('data-title'));

        ribbon_setup();

        $(window).resize(function($){
                ribbon_setup();			
        });	
        
    }
    function ribbon_setup() {
            var window_h = $(window).height();
            var window_w = $(window).width();
            var setHeight = window_h - $(".header").height() - 20;
            var setHeight2 = window_h - $(".header").height() - $('.slider_info').height() - 20;
            $('.fs_grid_gallery').height(530);
            $('.currentStep').removeClass('currentStep');
            $('.slide1').addClass('currentStep');
            $('.slider_caption').text($('.currentStep').attr('data-title'));
            $('.num_current').text('1');

            $('.num_all').text($('.ribbon_list li').size());			
            $('.ribbon_wrapper').height(465);
            $('.ribbon_list .slide_wrapper').height(443);// change Height: setHeight2
            $('.ribbon_list').height(443).width(210).css('left', '-30px');// change Height: setHeight2
            $('.fs_grid_gallery').width($(".fullscreen-gallery").width());
            $('.ribbon_list').find('li').each(function(){
                    $('.ribbon_list').width($('.ribbon_list').width()+$(this).width());
                    $(this).attr('data-offset',$(this).offset().left);
                    $(this).width(500);
            });
            var max_step = -1*($('.ribbon_list').width()-window_w);
    }
    function prev_slide() {
            var window_h = $(window).height();
            var window_w = $(window).width();
            var max_step = -1*($('.ribbon_list').width()-window_w);
            var current_slide = parseInt($('.currentStep').attr('data-count'), 10);
            current_slide--;
            if (current_slide < 1) {
                    current_slide = $('.ribbon_list').find('li').size();
            }
            $('.currentStep').removeClass('currentStep');
            $('.num_current').text(current_slide);
            $('.slide'+current_slide).addClass('currentStep');
            $('.slider_caption').text($('.currentStep').attr('data-title'));
            if (-1*$('.slide'+current_slide).attr('data-offset') > max_step) {
                    $('.ribbon_list').css('left', -1*$('.slide'+current_slide).attr('data-offset') + 30);
            } else {
                    $('.ribbon_list').css('left', max_step);
            }
    }
    function next_slide() {
            var window_h = $(window).height();
            var window_w = $(window).width();
            var max_step = -1*($('.ribbon_list').width()-window_w);
            var current_slide = parseInt($('.currentStep').attr('data-count'), 10);
            current_slide++;
            if (current_slide > $('.ribbon_list').find('li').size()) {
                    current_slide = 1
            }
            $('.currentStep').removeClass('currentStep');
            $('.num_current').text(current_slide);
            $('.slide'+current_slide).addClass('currentStep');
            $('.slider_caption').text($('.currentStep').attr('data-title'));
            if (-1*$('.slide'+current_slide).attr('data-offset') > max_step) {
                    $('.ribbon_list').css('left', -1*$('.slide'+current_slide).attr('data-offset'));
            } else {
                    $('.ribbon_list').css('left', max_step);
            }
    }
    
    
    //========================
    // About Skill
    //========================
    if($(".singleskill").length > 0)
    {
        $('.singleskill').appear();
        $('.singleskill').on('appear', loadSkills);
    }
    var coun = true;
    function loadSkills()
    {
        $(".singleskill").each(function(){
           var datacount = $(this).attr("data-limit");
           $(".skillarea", this).animate({'width': datacount+'%'}, 2000);
           if(coun)
           {
                $(this).find('.dataparcentange').each(function () {
                         var $this = $(this);
                         $({ Counter: 0 }).animate({ Counter: datacount }, {
                                 duration: 2000,
                                 easing: 'swing',
                                 step: function () {
                                         $this.text(Math.ceil(this.Counter)+'%');
                                 }
                         });
                 });
                 
            }
        });
        coun = false;
    }
    
    //========================
    // About Funfacts
    //========================
    if($(".funfacts").length > 0)
    {    
        $('.funfacts').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                    $(this).find('.timer').each(function () {
                            var $this = $(this);
                            $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                                    duration: 2000,
                                    easing: 'swing',
                                    step: function () {
                                            $this.text(Math.ceil(this.Counter));
                                    }
                            });
                    });
                $(this).unbind('inview');
            }
        });
    }
    //========================
    // About 2 Skill
    //========================
    if($(".singleSkill2").length > 0)
    {
        $('.singleSkill2').appear();
        $('.singleSkill2').on('appear', loadSkills2);
    }
    var coun = true;
    function loadSkills2()
    {
        $(".singleSkill2").each(function(){
           var datacount = $(this).attr("data-limit");
           $(".s2Mainroller", this).animate({'width': datacount+'%'}, 2000);
           if(coun)
           {
                $(this).find('.sparcent').each(function () {
                         var $this = $(this);
                         $({ Counter: 0 }).animate({ Counter: datacount }, {
                                 duration: 2000,
                                 easing: 'swing',
                                 step: function () {
                                         $this.text(Math.ceil(this.Counter)+'%');
                                 }
                         });
                 });
                 
            }
        });
        coun = false;
    }
    
    //========================
    // Fixed Header
    //========================
    if($("#header").length > 0)
    {
        $(window).on('scroll', function(){
            if($(window).scrollTop() > 5)
            {
                $("#header").addClass('fixedHeader');
            }
            else
            {
                $("#header").removeClass('fixedHeader');
            }
        });
    }
    
    
    //========================
    // Back To Top
    //========================
    if($("#backToTop").length > 0)
    {
        $(window).on('scroll', function(){
            if($(window).scrollTop() > 200)
            {
                $("#backToTop").fadeIn('slow');
            }
            else
            {
                $("#backToTop").fadeOut('slow');
            }
        });
        

        $("body, html").on("click", "#backToTop", function(e){
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, 800);
        });
    }
    
    
    
    //========================
    // Contact Form Submit
    //========================
    if ($("#contactForm").length > 0)
    {
	$("#contactForm").submit(function(e) {
	    e.preventDefault();
	    var allData = $(this).serialize();
	    var required = 0;
	    $("#con_submit").val('Sending...');
	    $(".required", this).each(function() {
		if ($(this).val() == '')
		{
		    $(this).addClass('reqError');
		    required += 1;
		}
		else
		{
		    if ($(this).hasClass('reqError'))
		    {
			$(this).removeClass('reqError');
			if (required > 0)
			{
			    required -= 1;
			}
		    }
		}
	    });
	    //alert(required);
	    if (required === 0)
	    {
		$("#con_submit").val('Sending...');
		$.ajax({
		    type: "POST",
		    url: 'ajax/mail.php',
		    data: {allData: allData},
		    success: function(data)
		    {
			$("#contactForm input[type='text'], #contactForm input[type='email'], #contactForm textarea").val('');
			$("#con_submit").val('Message successfully sent!');
		    }
		});
	    }
	    else
	    {
		$("#con_submit").val('Send');
	    }
	});
    }
    
    //========================
    // WOW INIT
    //========================
    if($(window).width() > 766)
    {
         var wow = new WOW({
             mobile: false 
         });
         wow.init();
    }
    
    //========================
    // Nice Scroll
    //========================
    // $("html").niceScroll({
    //     scrollspeed: 60,
    //     mousescrollstep: 60
    // });
    
    
    
})(jQuery);

