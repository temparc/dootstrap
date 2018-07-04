(function($){
    /**
     * Carousel jQuery
     */
    var temparcCarousel = $('.temparc-carousel');
    var temparcSlide = '.slide';

    temparcCarousel.each( function(){

        $(this).find('.controls span').click( function(){

            // DOM vars
            var isNext = $(this).hasClass('next');
            var slides = $(this).closest('.temparc-carousel').find(temparcSlide);
            var slideNo;
            var nextSlide;

            // hide current slide
            $('.slide').each( function( index ) {
                if( $(this).hasClass('visible') ) {
                    slideNo = parseInt( $(this).data('slide-count') );
                    $(this).removeClass('visible');
                }
            });

            // next slide
            if(isNext){
                // last slide && next
                if(slideNo == slides.length){
                    nextSlide = $(temparcSlide + '[data-slide-count="1"]');
                } else {
                    nextSlide = $(temparcSlide + '[data-slide-count="' + (slideNo + 1) +'"]');
                }
            }
            // previous slide
            else{
                // first slide && previous
                if(slideNo == 1){
                    nextSlide = $(temparcSlide + '[data-slide-count="' + slides.length + '"]');
                } else {
                    nextSlide = $(temparcSlide + '[data-slide-count="' + (slideNo - 1) +'"]');
                }
            }

            nextSlide.addClass('visible');

            return;
        });
    });
})(jQuery);