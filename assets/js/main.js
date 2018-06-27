(function($){

    // global var to check menu state
    var menuVisible = false;
    var menuBreakpoint = 900 + 1;

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
})(jQuery);