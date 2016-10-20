
$(document).ready(function () {

    $('section').first().addClass('active');
    //$("#name, #nameHr, #nameIntro").fadeIn( 2000);
    //$('#nav').css({"margin-top": '-90px', opacity: 0}).animate({"margin-top": '0px', opacity: 1}, 2000);

    $('#hamburger').on('click', function () {

        // if ($('button#hamburger.navbar-toggle').hasClass('collapsed')) {
        //     $('#navigation-div').addClass('background-collapse').removeClass('navigation-div-background');
        // }
        // else {
        //     $('#navigation-div').removeClass('background-collapse').removeClass('navigation-div-background');
        // }
        $('#navigation').toggleClass('navigation-hidden');
        $(this).toggleClass('open');
        $('.page-scale').toggleClass('navbar-open');
    });

    $('#navigation a').on('click',function () {
        $('#hamburger').click();
    });

    var animation_elements = $('.aboutSection, .skills-line_percentage, .contactList, .development-container, .portfolioSection, .skills-container, .github-container');
    var web_window = $(window);

    function check_if_in_view() {
        var window_height = web_window.height();
        var window_top_position = web_window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each(animation_elements, function () {
            var element = $(this);
            var element_height = $(element).outerHeight();
            var element_top_position = $(element).offset().top + 150;
            var element_bottom_position = (element_top_position + element_height);

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
        });
    }


    if(web_window.width() < 768 ){
        $('.portfolio-myWork__element').addClass('hover');
    }else{
        $('.portfolio-myWork__element').removeClass('hover');

    }

    $(window).resize(function () {
        if(web_window.width() < 768 ){
            $('.portfolio-myWork__element').addClass('hover');
        }else{
            $('.portfolio-myWork__element').removeClass('hover');

        }
    });


    $(window).scroll(function () {
        check_if_in_view();
        var scroll = $(this).scrollTop();

        $("#name, #nameHr, #nameIntro").css({
            'opacity': 1 - (scroll / 150)
        });


        if (scroll < 50) {
            $('#hamburger').addClass("hamburger-hide");
        }
        else {
            $('#hamburger').removeClass("hamburger-hide");
        }

    });

    $(window).trigger('scroll');


});

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

