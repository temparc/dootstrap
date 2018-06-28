(function($){

    // event handlers
    $(document).ready(
      function(){

          //set up responsive menu
          temparc_responsive_nav_menu();

          // load responsive images
          temparc_reponsive_image_loader();
      }
    );

    /**
     * Responsive Menu
     *
     * Also checks for width resize and adjusts accordingly
     * @param menuBreakpoint int
     * @param menuVisible bool
     * @return void;
     */
    function temparc_responsive_nav_menu( menuBreakpoint, menuVisible ) {

        // set default vars
        if ( ! menuVisible ) {
            menuVisible = false;
        }

        if ( ! menuBreakpoint ){
            menuBreakpoint = 900 + 1;
        }

        // mobile menu button click
        $('#menu-toggle').click( function(){
            // menu state
            var menuOpen = $('#menu-toggle').hasClass('open');

            if( menuOpen ){
                menuVisible = false;
                $(this).removeClass('open');
                $('nav').hide();
            }else{
                menuVisible = true;
                $(this).addClass('open');
                $('nav').css('display', 'block');
            }
        });

        // mobile menu width listener for resets
        var fullWidth = window.innerWidth;
        $(window).resize( function(){

            fullWidth =  window.innerWidth;

            // menu open resize resets
            if( ( fullWidth > menuBreakpoint  ) && menuVisible ){
                $('nav').css( 'display', 'inline-block');
            }
            if( ( fullWidth < menuBreakpoint ) && menuVisible ){
                $('nav').css( 'display', 'block');
            }

            // menu closed resize resets
            if( ! menuVisible && ( fullWidth > ( menuBreakpoint - 1 ) ) ) {
                $('nav').css( 'display', 'inline-block');
            }
            if( ! menuVisible && ( fullWidth < ( menuBreakpoint ) ) ) {
                $('nav').hide();
            }
        });

        return;
    }

    /**
     * Responsive Image Loading
     *
     * Based on pixel ratio (retina = 2, normal = 1)
     * @return void;
     */
    function temparc_reponsive_image_loader() {

        // get resolution of window
        var pixelRatio = window.devicePixelRatio;

        // error check, default to non-retina screens
        if( ! pixelRatio ) {
            pixelRatio = 1;
        }

        // loop through images that can be replaced
        $('img[data-img]').each( function() {

            var imgLarge = $(this).data('img-lg');
            var imgSmall = $(this).data('img-sm');

            if( parseInt( pixelRatio ) === 2 ) {
                $(this).attr('src', imgLarge );
            } else {
                $(this).attr('src', imgSmall);
            }
        });

        return;
    }

})(jQuery);