
$('html').addClass('js');

        $(window).ready(function() {
            setTimeout(
                function() {
                    $("#loader-wrapper").fadeOut();
                }, 1000);
        });

//bez timeouta na stronę

//$('html').addClass('js');
//$(window).ready(function() {
//    $("#loader-wrapper").fadeOut();
//});

