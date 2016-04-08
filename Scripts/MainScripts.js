$(document).ready(function () {
    $('section').first().addClass('active');
    $("#name, #nameHr, #nameIntro").fadeIn(2200);
    $('#nav').css({"margin-top": '-90px', opacity: 0}).animate({"margin-top": '0px', opacity: 1}, 2000);

    $('button#hamburger').on('click', function () {
        if ($('button#hamburger.navbar-toggle').hasClass('collapsed')) {
            $('#navigation-div').addClass('background-collapse').removeClass('navigation-div-background');
        }
        else {
            $('#navigation-div').removeClass('background-collapse').removeClass('navigation-div-background');
        }
    });


    var animation_elements = $('.characterContainer, .skills-line_percentage');
    var web_window = $(window);

    //check to see if any animation containers are currently in view
    function check_if_in_view() {
        //get current window information
        var window_height = web_window.height();
        var window_top_position = web_window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);


        //iterate through elements to see if its in view
        $.each(animation_elements, function () {

            //get the elements information
            var element = $(this);
            var element_height = $(element).outerHeight();
            var element_top_position = $(element).offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                if(element.hasClass('skills-line_percentage')){
                    $(this).each(function(){
                        $(this).animate({
                            width:$(this).attr('data-percentage')
                        },3000);
                    });
                }
                element.addClass('in-view');
            }
            // else {
            //     element.removeClass('in-view');
            // }
        });

    }






    $(window).scroll(function () {
        check_if_in_view();
       // animate_skills_width();
    });
    //trigger our scroll event on initial load
    $(window).trigger('scroll');


});

//skrolując pojawianie/znikanie elementów
$(window).scroll(function () {
    var scroll = $(this).scrollTop();

    $("#name, #nameHr, #nameIntro").css({
        'opacity': 1 - (scroll / 150)
    });


    if (scroll < 200) {
        $('#navigation-div').removeClass("navigation-div-background");
    }
    else {
        $('#navigation-div').addClass("navigation-div-background");
    }

});


//Wolne zjeżdżanie strony po kliknięciu łącza z odnośnikiem do sekcji strony
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        $('a').removeClass('activate');
        $(this).addClass('activate');

        var a_href = $(this).attr('href');

        $('section').removeClass("active");
        $(a_href).parent().addClass("active");

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({scrollTop: target.offset().top}, 1000);
                return false;
            }
        }
    });
});


$(function () {
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').on('click touchstart', function () {
        $('.navbar-toggle:visible').click();
    });
});

