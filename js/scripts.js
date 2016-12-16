$(document).ready(function() {
    $( "button[name='submit']" ).bind('tap', function( event ) {
        alert("Form submitted");
    });

    $( "body" ).on( "pagechange", function( event ) {
        alert("Navigation Changed");
    });
}); // end ready
