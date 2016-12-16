$(document).ready(function() {
    $( "button[name='submit']" ).bind('tap', function( event ) {
        alert("Form submitted");
    });

    $( "body" ).on( "pagechange", function( event ) {
        $("main").css({'backgroundColor' : 'lightblue'});
        $("main").fadeOut( 2000, function( event) {
            $("main").fadeIn( 2000, function() {
                $("main").css({'backgroundColor' : 'white'});
                //done
            });
        });
    });
}); // end ready
