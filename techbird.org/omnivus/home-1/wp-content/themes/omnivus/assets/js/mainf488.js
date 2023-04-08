(function ($) {
    jQuery(document).on('ready', function ($) {
        "use strict";

        /*---------------------------
            SMOOTH SCROLL
        -----------------------------*/
        $('ul#nav li a[href^="#"]').on('click', function (event) {
            var id = $(this).attr("href");
            var offset = 60;
            var target = $(id).offset().top - offset;
            $('html, body').animate({
                scrollTop: target
            }, 1500, "easeInOutExpo");
            event.preventDefault();
        });
        
        /*---------------------------
            MENU ALIGN CLASS
        ----------------------------*/
        var Menu_Has_Children = $('.menu-item-has-children');
        var window_width = $(window).width();

        if ( window_width < 1200 ) {
            Menu_Has_Children.addClass('drop-left');
        }else{
            Menu_Has_Children.removeClass('drop-left');        
        }
        $(window).on('resize', function () {
            var window_width = $(window).width();
            if ( window_width < 1200 ) {
                Menu_Has_Children.addClass('drop-left');
            }else{
                Menu_Has_Children.removeClass('drop-left');        
            }
        });

        /*----------------------------
            LANGUAGE SELECTOR
        -----------------------------*/
        var language_changer = $('.language-button');
        language_changer.on('click',function(){
            $('.language__list').slideToggle();
        });

        /*----------------------------
            MOBILE & DROPDOWN MENU
        ------------------------------*/
        jQuery('.stellarnav').stellarNav({
            theme: 'light',
            breakpoint: 991,
        });

        /*-----------------------------
            MENU HAMBERGER ICON
        ------------------------------*/
        var hamberger = $('.header-top-area svg');
        $('.menu-toggle.full').on('click', function () {
            var menuclass = $('#main-nav').attr('class');
            if ('stellarnav light mobile active' == menuclass) {
                hamberger.addClass('active');
            } else if ('stellarnav light mobile' == menuclass) {
                hamberger.removeClass('active');
            }
        });
        $(window).on('resize', function () {
            var menuclass = $('#main-nav').attr('class');
            if ('stellarnav light desktop' == menuclass) {
                hamberger.removeClass('active');
            }
        });

        /*-----------------------------
            SEARCH FORM
        ------------------------------*/
        var searchForm = $(document).find('#search-form-one').attr('class');
        if ( 'search-form-one' == searchForm ) {            
            $('.search-button').on('click',function() {
                $('body').addClass('mode-search');
                $('.search-form-one input[type="text"]').focus();
                $(this).addClass('close-search');
                return false;
            });
            $('.search-mode-close').on('click',function() {
                $('body').removeClass('mode-search');
                $('.search-button').removeClass('close-search');
                return false;
            });
        }

        /*----------------------------
            HEADER SIDEBAR
        -----------------------------*/
        $('body').css('overflow-x','hidden');
        $('a.menu-button').on('click',function(){
            $('.header-widget-area').toggleClass('open_widget');
            $('.open_widget .close-header-widget').on('click',function(){
                $('.header-widget-area').removeClass('open_widget');
            });
            $(window).on('scroll',function(){
                $('.header-widget-area').removeClass('open_widget');
            });
            return false;
        });

        /*----------------------------
            SCROLL TO TOP
        ------------------------------*/
        $(window).on('scroll', function () {
            var $totalHeight = $(window).scrollTop();
            var $scrollToTop = $(".scrolltotop");
            if ($totalHeight > 300) {
                $(".scrolltotop").fadeIn();
            } else {
                $(".scrolltotop").fadeOut();
            }

            if ($totalHeight + $(window).height() === $(document).height()) {
                $scrollToTop.css("bottom", "90px");
            } else {
                $scrollToTop.css("bottom", "20px");
            }
        });

        /*----------------------------
            BLOG MASONRY
        ------------------------------*/
        var $container = $('.blog__grid');
        $container.imagesLoaded( function() {
            $container.masonry();    
        });

        /*-----------------------------
            VIDEO RESPONSIVE
        -------------------------------*/
        $(".post-media,.post-content").fitVids();

        /*-----------------------------
            SELECT DROPDOWN STYLE
        -------------------------------*/
        $(".single-widgets select").selectbox({
            speed: 200,
            effect: "slide", /*"slide" or "fade"*/
        });

        /*---------------------------
            PLACEHOLDER ANIMATION
        ----------------------------*/
        Placeholdem(document.querySelectorAll('[placeholder]'));

        /*---------------------------
            BLOG GALLERY SLIDER
        -----------------------------*/
        var postCarousel = $('.posts-gallery');
        if (postCarousel.length > 0) {
            postCarousel.owlCarousel({
                merge: true,
                smartSpeed: 1000,
                loop: true,
                nav: true,
                center: false,
                dots: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplay: true,
                autoplayTimeout: 3000,
                margin: 0,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                }
            });
        }

    }(jQuery));
})(jQuery);

(function ($) {
    jQuery(window).on('load', function () {
        "use strict";
        /*--------------------------
            PRE LOADER
        ----------------------------*/
        $(".preeloader").fadeOut(1000);

        /*--------------------------
            ACTIVE WOW JS
        ----------------------------*/
        new WOW().init({
            boxClass: 'wow',
            offset: 50,
            mobile: false,
            live: true
        });
    });
})(jQuery);