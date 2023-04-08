;(function ($) {

    var Ultimate_Adv_Accordion_Script_Handle = function($scope, $) {
        var $advanceAccordion     = $scope.find(".ultimate__adv__accordion"),
            $accordionHeader      = $scope.find(".ultimate__accordion__header"),
            $accordionType        = $advanceAccordion.data("accordion-type"),
            $accordionSpeed       = $advanceAccordion.data("toogle-speed");

        /*--------------------------------
            OPEN DEFAULT ACTIVED TAB
        ----------------------------------*/
        $accordionHeader.each(function() {
            if ($(this).hasClass("active-default")) {
                $(this).addClass("show active");
                $(this).next().slideDown($accordionSpeed);
            }
        });

        /*--------------------------------------------------
            REMOVE MULTIPLE CLICK EVENT FOR NESTED ACCORDION
        ----------------------------------------------------*/
        $accordionHeader.unbind("click");
        $accordionHeader.click(function(e) {
            e.preventDefault();
            var $this = $(this);

            if ($accordionType === "accordion") {
                if ($this.hasClass("show")) {
                    $this.removeClass("show active");
                    $this.next().slideUp($accordionSpeed);
                }else{
                    $this.parent().parent().find(".ultimate__accordion__header").removeClass("show active");
                    $this.parent().parent().find(".ultimate__accordion__content").slideUp($accordionSpeed);
                    $this.toggleClass("show active");
                    $this.next().slideToggle($accordionSpeed);
                }
            }else{
                /*-------------------------------
                    FOR ACCCORDION TYPE 'TOGGLE'
                --------------------------------*/
                if ($this.hasClass("show")) {
                    $this.removeClass("show active");
                    $this.next().slideUp($accordionSpeed);
                } else {
                    $this.addClass("show active");
                    $this.next().slideDown($accordionSpeed);
                }
            }
        });
    };

    /*---------------------------------
        OWL CAROUSEL HANDLER
    ---------------------------------*/
	var Carousel_Script_Handle_Data = function ($scope, $){

		var carousel_elem     = $scope.find('.ultimate-carousel-active').eq(0);
        
    	if ( carousel_elem.length > 0 ) {
    		var settings          = carousel_elem.data('settings');
    		var item_on_large     = settings['item_on_large'] ? settings['item_on_large'] : 1;
    		var item_on_medium    = settings['item_on_medium'] ? settings['item_on_medium'] : 1;
    		var item_on_tablet    = settings['item_on_tablet'] ? settings['item_on_tablet'] : 1;
    		var item_on_mobile    = settings['item_on_mobile'] ? settings['item_on_mobile'] : 1;
    		var stage_padding     = settings['stage_padding'];
    		var item_margin       = settings['item_margin'];
    		var autoplay          = settings['autoplay'];
    		var autoplaytimeout   = settings['autoplaytimeout'];
    		var slide_speed       = settings['slide_speed'];
    		var slide_animation   = settings['slide_animation'];
    		var slide_animate_in  = settings['slide_animate_in'];
    		var slide_animate_out = settings['slide_animate_out'];
    		var nav               = settings['nav'];
    		var nav_position      = settings['nav_position'];
    		var next_icon         = ( settings['next_icon'] ) ? settings['next_icon'] : 'fa fa-angle-right';
    		var prev_icon         = ( settings['prev_icon'] ) ? settings['prev_icon'] : 'fa fa-angle-left';
    		var dots              = settings['dots'];
    		var loop              = settings['loop'];
    		var hover_pause       = settings['hover_pause'];
    		var center            = settings['center'];
    		var rtl               = settings['rtl'];

    		if ( 'yes' == slide_animation ) {
    			var animateIn  = slide_animate_in;
    			var animateOut = slide_animate_out;
    		}else{
    			var animateIn  = '';
    			var animateOut = '';
    		}

			carousel_elem.owlCarousel({
				merge             : true,
				smartSpeed        : slide_speed,
				loop              : loop,
				nav               : nav,
				dots              : dots,
				autoplayHoverPause: hover_pause,
				center            : center,
				rtl               : rtl,
				navText           : ['<i class ="' + prev_icon + '"></i>', '<i class="' + next_icon + '"></i>'],
				autoplay          : autoplay,
				autoplayTimeout   : autoplaytimeout,
				stagePadding      : stage_padding,
				margin            : item_margin,
				animateIn         : ''+ animateIn +'',
				animateOut        : ''+ animateOut +'',
				responsiveClass   : true,
				responsive        : {
			        0: {
			            items: item_on_mobile
			        },
			        600: {
			            items: item_on_tablet
			        },
			        1000: {
			            items: item_on_medium
			        },
			        1200: {
			            items: item_on_medium
			        },
			        1900: {
			            items: item_on_large
			        }
			    }
			});
    	}
	}
    
    /*-----------------------------
        SLICK CAROUSEL HANDLER
    ------------------------------*/
    var Slick_Carousel_Script_Handle_Data = function ($scope, $) {

        var carousel_elem = $scope.find( '.ultimate-carousel-activation' ).eq(0);

        if ( carousel_elem.length > 0 ) {

            var settings               = carousel_elem.data('settings');
            var slideid                = settings['slideid'];
            var arrows                 = settings['arrows'];
            var arrow_prev_txt         = settings['arrow_prev_txt'];
            var arrow_next_txt         = settings['arrow_next_txt'];
            var dots                   = settings['dots'];
            var autoplay               = settings['autoplay'];
            var autoplay_speed         = parseInt(settings['autoplay_speed']) || 3000;
            var animation_speed        = parseInt(settings['animation_speed']) || 300;
            var pause_on_hover         = settings['pause_on_hover'];
            var center_mode            = settings['center_mode'];
            var center_padding         = settings['center_padding'] ? settings['center_padding']+'px' : '50px';
            var rows                   = settings['rows'] ? parseInt(settings['rows']) : 0;
            var fade                   = settings['fade'];
            var focusonselect          = settings['focusonselect'];
            var vertical               = settings['vertical'];
            var infinite               = settings['infinite'];
            var rtl                    = settings['rtl'];
            var display_columns        = parseInt(settings['display_columns']) || 1;
            var scroll_columns         = parseInt(settings['scroll_columns']) || 1;
            var tablet_width           = parseInt(settings['tablet_width']) || 800;
            var tablet_display_columns = parseInt(settings['tablet_display_columns']) || 1;
            var tablet_scroll_columns  = parseInt(settings['tablet_scroll_columns']) || 1;
            var mobile_width           = parseInt(settings['mobile_width']) || 480;
            var mobile_display_columns = parseInt(settings['mobile_display_columns']) || 1;
            var mobile_scroll_columns  = parseInt(settings['mobile_scroll_columns']) || 1;
            var carousel_style_ck      = parseInt(settings['carousel_style_ck']) || 1;

            if( carousel_style_ck == 4 ){
                carousel_elem.slick({
                    appendArrows: '.ultimate-carousel-nav'+slideid,
                    appendDots  : '.ultimate-carousel-dots'+slideid,
                    arrows      : arrows,
                    prevArrow   : '<div class="ultimate-carosul-prev owl-prev"><i class="'+arrow_prev_txt+'"></i></div>',
                    nextArrow   : '<div class="ultimate-carosul-next owl-next"><i class="'+arrow_next_txt+'"></i></div>',
                    dots        : dots,
                    customPaging: function( slick,index ) {
                        var data_title = slick.$slides.eq(index).find('.ultimate-data-title').data('title');
                        return '<h6>'+data_title+'</h6>';
                    },
                    infinite      : infinite,
                    autoplay      : autoplay,
                    autoplaySpeed : autoplay_speed,
                    speed         : animation_speed,
                    rows          : rows,
                    fade          : fade,
                    focusOnSelect : focusonselect,
                    vertical      : vertical,
                    rtl           : rtl,
                    pauseOnHover  : pause_on_hover,
                    slidesToShow  : display_columns,
                    slidesToScroll: scroll_columns,
                    centerMode    : center_mode,
                    centerPadding : center_padding,
                    responsive    : [
                        {
                            breakpoint: tablet_width,
                            settings  : {
                                slidesToShow  : tablet_display_columns,
                                slidesToScroll: tablet_scroll_columns
                            }
                        },
                        {
                            breakpoint: mobile_width,
                            settings  : {
                                slidesToShow  : mobile_display_columns,
                                slidesToScroll: mobile_scroll_columns
                            }
                        }
                    ]
                });
            }else{
                carousel_elem.slick({
                    appendArrows  : '.ultimate-carousel-nav'+slideid,
                    appendDots    : '.ultimate-carousel-dots'+slideid,
                    arrows        : arrows,
                    prevArrow     : '<div class="ultimate-carosul-prev owl-prev"><i class="'+arrow_prev_txt+'"></i></div>',
                    nextArrow     : '<div class="ultimate-carosul-next owl-next"><i class="'+arrow_next_txt+'"></i></div>',
                    dots          : dots,
                    infinite      : infinite,
                    autoplay      : autoplay,
                    autoplaySpeed : autoplay_speed,
                    speed         : animation_speed,
                    rows          : rows,
                    fade          : fade,
                    focusOnSelect : focusonselect,
                    vertical      : vertical,
                    rtl           : rtl,
                    pauseOnHover  : pause_on_hover,
                    slidesToShow  : display_columns,
                    slidesToScroll: scroll_columns,
                    centerMode    : center_mode,
                    centerPadding : center_padding,
                    responsive    : [
                        {
                            breakpoint: tablet_width,
                            settings  : {
                                slidesToShow  : tablet_display_columns,
                                slidesToScroll: tablet_scroll_columns
                            }
                        },
                        {
                            breakpoint: mobile_width,
                            settings  : {
                                slidesToShow  : mobile_display_columns,
                                slidesToScroll: mobile_scroll_columns
                            }
                        }
                    ]
                    
                });
            }
        }
    }

    /*-------------------------------
        MAILCHIMP HANDLER
    --------------------------------*/
    var MailChimp_Subscribe_Form_Script_Handle = function ($scope, $) {

        var mailchimp_data = $scope.find('.mailchimp_from__box').eq(0);
        var settings       = mailchimp_data.data('value');               // Data Value Also can get by attr().
        var random_id      = settings['random_id'];
        var post_url       = settings['post_url'];
        
        $( "#mc__form__" + random_id ).ajaxChimp({
            url     : ''+ post_url +'',
            callback: function (resp) {
                if (resp.result === "success") {
                    $("#mc__form__" + random_id + " input" ).hide();
                    $("#mc__form__" + random_id + " button" ).hide();
                }
            }
        });
        //console.log(post_url);
    }

    /*------------------------------
        SLICK CAROUSEL HANDLER
    -------------------------------*/
    var Swiper_Carousel_Script_Handle_Data = function ($scope, $) {

        var carousel_elem = $scope.find( '.ultimate-carousel-activation' ).eq(0);

        var settings          = carousel_elem.data('settings');
        var slideid           = settings['slideid'];
        var slide_item_margin = parseInt(settings['slide_item_margin']);
        var autoplay          = settings['autoplay'];
        var autoplay_speed    = parseInt(settings['autoplay_speed']) || 3000;
        var animation_speed   = parseInt(settings['animation_speed']) || 300;
        var center_mode       = settings['center_mode'];
        var rows              = settings['rows'] ? parseInt(settings['rows']) : 1;
        var focusonselect     = settings['focusonselect'];
        var vertical          = settings['vertical'];
        var infinite          = settings['infinite'];
        
        var desktop_item        = parseInt(settings['desktop_item']) || 1;
        var desktop_item_scroll = parseInt(settings['desktop_item_scroll']) || 1;

        var medium_item        = parseInt(settings['medium_item']) || 1;
        var medium_item_margin = parseInt(settings['medium_item_margin']) || 800;
        var medium_item_scroll = parseInt(settings['medium_item_scroll']) || 1;

        var tablet_item        = parseInt(settings['tablet_item']) || 1;
        var tablet_item_margin = parseInt(settings['tablet_item_margin']) || 800;
        var tablet_item_scroll = parseInt(settings['tablet_item_scroll']) || 1;

        var mobile_item        = parseInt(settings['mobile_item']) || 1;
        var mobile_item_margin = parseInt(settings['mobile_item_margin']) || 480;
        var mobile_item_scroll = parseInt(settings['mobile_item_scroll']) || 1;

            /* ARROW */
            var arrows = settings['arrows'];
            if ( arrows === true ) {                
               var  navigation = {
                    nextEl: '.ultimate-carosul-next'+slideid,
                    prevEl: '.ultimate-carosul-prev'+slideid,
                };
            }else{
                var navigation = '';
            }

            /* DOTS */
            var dots         = settings['dots'];
            var dots_type    = settings['dots_type']
            var dynamic_dots = settings['dynamic_dots']
            if ( dots === true ) {
                var dots_type 
                var pagination = {
                    el                : '.ultimate-carousel-dots'+slideid,
                    type              : dots_type,              /* String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom" */
                    dynamicBullets    : dynamic_dots,
                    dynamicMainBullets: 1,
                    clickable         : true,
                    bulletElement     : 'div',
                };
            }else{
                var pagination = '';
            }

            /* SCROLL BAR */
            var slide_scrollbar          = settings['slide_scrollbar'];
            var slide_scrollbar_dragable = settings['slide_scrollbar_dragable'];
            var slide_scrollbar_hide     = settings['slide_scrollbar_hide'];
            if ( slide_scrollbar === true ) {
                var scrollbar = {
                    el       : '.swiper-scrollbar'+slideid,
                    draggable: slide_scrollbar_dragable,
                    hide     : slide_scrollbar_hide,
                };
            }else{
                var scrollbar = '';
            }

            /* SLIDE STYLE */
            var slide_style = settings['slide_style'];

            /* FADE */
            var cross_fade = settings['cross_fade'];

            /* CUBE */
            var cube_shadow        = settings['cube_shadow'];
            var cube_item_shadow   = settings['cube_item_shadow'];
            var cube_shadow_offset = parseInt(settings['cube_shadow_offset']);
            var cube_shadow_scale  = parseInt(settings['cube_shadow_scale']);

            /* COVERFLOW */
            var coverflow_rotate   = parseInt(settings['coverflow_rotate']) || 0;
            var coverflow_stretch  = parseInt(settings['coverflow_stretch']) || 80;
            var coverflow_depth    = parseInt(settings['coverflow_depth']) || 200;
            var coverflow_modifier = parseInt(settings['coverflow_modifier']) || 1;
            var coverflow_shadow   = settings['coverflow_shadow'];

            /* FLIP */
            var flip_rotate = parseInt(settings['flip_rotate']);
            var flip_shadow = settings['flip_shadow'];

            if ( 'slide' === slide_style ) {
                var effect = 'slide';
            }else if ( 'fade' === slide_style ) {
                var effect     = 'fade';
                var fadeEffect = {
                    crossFade: cross_fade,
                };
            }else if ( 'cube' === slide_style ) {
                var effect     = 'cube';
                var cubeEffect = {
                    shadow      : cube_shadow,
                    slideShadows: cube_item_shadow,
                    shadowOffset: cube_shadow_offset,
                    shadowScale : cube_shadow_scale,
                };
            }else if ( 'coverflow' === slide_style ) {
                var effect          = 'coverflow';
                var coverflowEffect = {
                    rotate      : coverflow_rotate,
                    stretch     : coverflow_stretch,
                    depth       : coverflow_depth,
                    modifier    : coverflow_modifier,
                    slideShadows: coverflow_shadow,
                };
            }else if ( 'flip' === slide_style ) {
                var effect     = 'flip';
                var flipEffect = {
                    rotate      : flip_rotate,
                    slideShadows: flip_shadow,
                };
            }else{
                var effect          = 'slide';
                var fadeEffect      = '';
                var cubeEffect      = '';
                var coverflowEffect = '';
                var flipEffect      = '';
            }
            
            if ( vertical === true ) {
                var direction = 'vertical';
            }else{
                var direction = 'horizontal';
            }

            if ( autoplay === true ) {
                var autoplay = {
                    delay: autoplay_speed,
                };
            }else{
                var autoplay = '';
            }
            

        var swipeSlide = new Swiper(carousel_elem, {
            /*breakpointsInverse:true,
            reverseDirection   : true,
            mousewheelControl  : true*/
            navigation         : navigation,
            pagination         : pagination,
            scrollbar          : scrollbar,
            loop               : infinite,
            autoplay           : autoplay,
            speed              : animation_speed,
            slideToClickedSlide: focusonselect,
            freeModeSticky     : true,
            direction          : direction,
            grabCursor         : true,
            freeMode           : false,
            centeredSlides     : center_mode,
            effect             : effect,
            coverflowEffect    : coverflowEffect,
            fadeEffect         : fadeEffect,
            flipEffect         : flipEffect,
            cubeEffect         : cubeEffect,
            slidesPerColumn    : rows,
            slidesPerGroup     : desktop_item_scroll,
            slidesPerView      : desktop_item,
            spaceBetween       : slide_item_margin,
            breakpoints        : {
                1024: {
                    slidesPerView : medium_item,
                    spaceBetween  : medium_item_margin,
                    slidesPerGroup: medium_item_scroll,
                },
                768: {
                    slidesPerView : tablet_item,
                    spaceBetween  : tablet_item_margin,
                    slidesPerGroup: tablet_item_scroll,
                },
                640: {
                    slidesPerView : mobile_item,
                    spaceBetween  : mobile_item_margin,
                    slidesPerGroup: mobile_item_scroll,
                }
            },
        });
    }

    /*-------------------------------
        VIDEO POPUP HANDLER
    --------------------------------*/
    var Video_Popup_Button_Script_Handle = function ($scope, $) {
        var video_popup  = $scope.find('.video__popup__button').eq(0);
        var settings     = video_popup.data('value');
        var random_id    = parseInt(settings['random_id']);
        var channel_type = settings['channel_type'];
        var videoModal   = $("#video__popup__button" + random_id);
        videoModal.modalVideo({
            channel: channel_type
        });
    }

    /*---------------------------------
        COUNTDOWN CIRCLE TIMER
    ----------------------------------*/
    var Ultimate_Countdown_Circle_Timer_Script = function ($scope, $) {
        var countdown_time_circle = $scope.find('.ultimate__circle__countdown').eq(0);
        var settings              = countdown_time_circle.data('settings');
        var random_id             = parseInt(settings['random_id']);
        var animation             = settings['animation'];
        var start_angle           = parseInt(settings['start_angle']);
        var circle_bg_color       = settings['circle_bg_color'];
        var counter_width         = settings['counter_width'];
        var bg_width              = settings['bg_width'];
        var days_circle_color     = settings['days_circle_color'];
        var hours_circle_color    = settings['hours_circle_color'];
        var minutes_circle_color  = settings['minutes_circle_color'];
        var seconds_circle_color  = settings['seconds_circle_color'];
        var countdown             = $("#ultimate__circle__countdown__"+random_id+"");

        /*console.log(settings);*/
        createTimeCicles();

        $(window).on("resize", windowSize);
        function windowSize(){
            countdown.TimeCircles().destroy();
            createTimeCicles();
            countdown.on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function() {
                countdown.removeClass("animated fadeIn");
            });
        }

        function createTimeCicles() {
            countdown.addClass("animated fadeIn");
            countdown.TimeCircles({
                animation      : ""+animation+"",/*smooth , ticks*/
                circle_bg_color: ""+circle_bg_color+"",
                use_background : true,
                fg_width       : counter_width,/*0.01 to 0.15*/
                bg_width       : bg_width,
                start_angle    : start_angle,
                time           : {
                    Days   : {color: ""+days_circle_color+""},
                    Hours  : {color: ""+hours_circle_color+""},
                    Minutes: {color: ""+minutes_circle_color+""},
                    Seconds: {color: ""+seconds_circle_color+""},
                }
            });
            countdown.on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function() {
                countdown.removeClass("animated fadeIn");
            });
        }
    }

    /*--------------------------------
        GIVE DONATION CAMPAIGN
    ---------------------------------*/
    var Ultimate_Give_Campains_Widget_Script = function () {
        $('.campain__prgressbar').each(function () {
            $(this).appear(function () {
                $(this).find('.count__bar').animate({
                    width: $(this).attr('data-percent')
                }, 1000);
                var percent = $(this).attr('data-percent');
                $(this).find('.count').html('<span>' + percent + '</span>');
            });
        });
    }

    /*---------------------------------
        TIMELINE SCRIPT HANDLE
    ----------------------------------*/
    var Timeline_Script_Handle_Data = function ( $scope, $ ){

        var timeline_content         = $scope.find('.ultimate__timeline__activation').eq(0);
        var settings                 = timeline_content.data('settings');
        var timeline_id              = settings['timeline_id'];
        var mode                     = settings['mode'];
        var horizontal_start_postion = settings['horizontal_start_postion'];
        var vertical_start_postion   = settings['vertical_start_postion'];
        var force_vartical_in        = settings['force_vartical_in'] ? parseInt(settings['force_vartical_in']) : 700;
        var move_item                = settings['move_item'] ? parseInt(settings['move_item']) : 1;
        var start_index              = settings['start_index'] ? parseInt(settings['start_index']) : 0;
        var vartical_trigger         = settings['vartical_trigger'] ? settings['vartical_trigger'] : "15%";
        var show_item                = settings['show_item'] ? parseInt(settings['show_item']) : 3;

        $('#ultimate__timeline__'+timeline_id+' .timeline').timeline({
            forceVerticalMode       : force_vartical_in,
            horizontalStartPosition : horizontal_start_postion,
            mode                    : mode,
            moveItems               : move_item,
            startIndex              : start_index,
            verticalStartPosition   : vertical_start_postion,
            verticalTrigger         : vartical_trigger,
            visibleItems            : show_item,
        });
    }

    /*-----------------------------------
        TIMELINE ROADMAP HANDALAR
    ------------------------------------*/
    var Timeline_Roadmap_Script_Handle_Data = function ( $scope, $ ){
        var roadmap_content = $scope.find('.ultimate__roadmap__activation').eq(0);
        var settings        = roadmap_content.data('settings');
        var random_id       = settings['random_id']
        var content         = settings['content'];
        var eventsPerSlide  = settings['eventsPerSlide'] ? parseInt(settings['eventsPerSlide']) : 4 ;
        var slide           = settings['slide'] ? parseInt(settings['slide']) : 1 ;
        var prevArrow       = settings['prevArrow'] ? settings['prevArrow'] : '<i class="ti ti-left"></i>' ;
        var nextArrow       = settings['nextArrow'] ? settings['nextArrow'] : '<i class="ti ti-right"></i>' ;
        var orientation     = settings['orientation'] ? settings['orientation'] : 'auto' ;

        $( '#ultimate__roadmap__timeline__'+random_id ).roadmap(content, {
            eventsPerSlide: eventsPerSlide,
            slide         : slide,
            prevArrow     : prevArrow,
            nextArrow     : nextArrow,
            orientation   : orientation,
            eventTemplate : '<div class="single__roadmap__event event">' + '<div class="roadmap__event__icon">####ICON###</div>' + '<div class="roadmap__event__title">####TITLE###</div>' + '<div class="roadmap__event__date">####DATE###</div>' + '<div class="roadmap__event__content">####CONTENT###</div>' + '</div>'
        });
    }

    /*------------------------------------
        PROGRESSBAR HANDALER
    -------------------------------------*/
    var Ultimate_Progressbar_Script = function () {
        $('.ultimate__prgressbar').each(function () {
            $(this).appear(function () {
                $(this).find('.count__bar').animate({
                    width: $(this).attr('data-percent')
                }, 1000);
                var percent = $(this).attr('data-percent');
                $(this).find('.count').html('<span>' + percent + '</span>');
            });
        });
    }

    /*------------------------------------
        POST GROUP FILTER
    -------------------------------------*/
    var Ultimate_Post_Group_Script = function(){

        /*var container = $('#posts__masonry');
        container.imagesLoaded( function() {
            container.masonry({
                itemSelector: '.single__masonry__item',
                columnWidth:'.single__masonry__item',
                percentPosition: true,
                gutter: 0
            });
        });*/


        /*var postMasonry = $('#posts__masonry');
        if (typeof imagesLoaded === 'function') {
            imagesLoaded(postMasonry, function () {
                setTimeout(function () {
                    postMasonry.isotope({
                        itemSelector    : '.single__masonry__item',
                        percentPosition: true,
                        layoutMode      : 'masonry',
                    });
                }, 500);
            });
        };*/
    }

	$(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/Ultimate_Adv_Accordion.default', Ultimate_Adv_Accordion_Script_Handle);

        elementorFrontend.hooks.addAction('frontend/element_ready/UltimateTestmonial.default', Carousel_Script_Handle_Data);

        elementorFrontend.hooks.addAction('frontend/element_ready/UltimateTeams.default', Carousel_Script_Handle_Data);

        elementorFrontend.hooks.addAction('frontend/element_ready/Ultimate_Post_Carousel.default', Slick_Carousel_Script_Handle_Data);

        elementorFrontend.hooks.addAction('frontend/element_ready/Ultimate_Post_Group.default', Ultimate_Post_Group_Script);

        elementorFrontend.hooks.addAction('frontend/element_ready/Ultimate_Portfolio_Carousel.default', Slick_Carousel_Script_Handle_Data);

        elementorFrontend.hooks.addAction('frontend/element_ready/Ultimate_Image_Carousel.default', Slick_Carousel_Script_Handle_Data);

        elementorFrontend.hooks.addAction('frontend/element_ready/Ultimate_Subscriber_Widget.default', MailChimp_Subscribe_Form_Script_Handle);

        elementorFrontend.hooks.addAction('frontend/element_ready/Ultimate_Image_Carousel_Alt.default', Swiper_Carousel_Script_Handle_Data);

        elementorFrontend.hooks.addAction('frontend/element_ready/Ultimate_Video_Button.default', Video_Popup_Button_Script_Handle);

        elementorFrontend.hooks.addAction('frontend/element_ready/Ultimate_Countdown_Circle_Widget.default', Ultimate_Countdown_Circle_Timer_Script);

        elementorFrontend.hooks.addAction('frontend/element_ready/Ultimate_Give_Campains_Widget.default', Ultimate_Give_Campains_Widget_Script);

        elementorFrontend.hooks.addAction('frontend/element_ready/Ultimate_Give_Campains_Widget.default', Slick_Carousel_Script_Handle_Data);

        elementorFrontend.hooks.addAction('frontend/element_ready/Ultimate_Timeline_Widget.default', Timeline_Script_Handle_Data);

        elementorFrontend.hooks.addAction('frontend/element_ready/Ultimate_Timeline_Roadmap_Widget.default', Timeline_Roadmap_Script_Handle_Data);

        elementorFrontend.hooks.addAction('frontend/element_ready/Ultimate_Step_Timeline_Widget.default', Slick_Carousel_Script_Handle_Data);
        
        elementorFrontend.hooks.addAction('frontend/element_ready/Ultimate_Progress_Roadmap_Widget.default', Ultimate_Progressbar_Script);

    });

})(jQuery);