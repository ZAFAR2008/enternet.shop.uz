(function($) {
    "use strict";

    jQuery(document).on('ready',function(){

        /*-------------------------------
            GOAL AMOUNT ANIMATION
        --------------------------------*/
        $("[data-progress-animation]").each(function () {
            var $this = $(this);
            $this.appear(function () {
                var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);
                if (delay > 1) $this.css("animation-delay", delay + "ms");
                setTimeout(function () {
                    $this.animate({
                        width: $this.attr("data-progress-animation")
                    }, 800);
                }, delay);
            }, {
                accX: 0,
                accY: -50
            });
        });

        /*------------------------------
            EVENT COUNTDOWN TIMER
        -------------------------------*/
        if($('.event_lounch_time').length){  
            $('.event_lounch_time').each(function() {
            var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
                var $this = $(this).html(event.strftime('' + '<div class="counter-column"><div class="inner"><span class="count">%D</span>Days</div></div> ' + '<div class="counter-column"><div class="inner"><span class="count">%H</span>Hours</div></div>  ' + '<div class="counter-column"><div class="inner"><span class="count">%M</span>Min</div></div>  ' + '<div class="counter-column"><div class="inner"><span class="count">%S</span>Sec</div></div>'));
            });
         });
        }

        /*-----------------------------
            COUNTER FAN FACT
        -------------------------------*/
        var odo = $(".odometer");
        odo.each(function () {
            $(this).appear(function (e) {
                var countNumber = $(this).attr("data-fact-count");
                $(this).html(countNumber);
            });
        });

    });

})( jQuery );