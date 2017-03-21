/**
 * Created by Костя on 19.03.2017.
 */

$( document ).ready(function() {
    $('.header__menu--item').hover(function() {
        $(this).find(".header__menu--item-text").css('display','block');
    }, function() {
        $(this).find(".header__menu--item-text").css('display','none');
    });

    $('.burger-menu').click(function () {
        if($(this).hasClass('menu-on')) {
            $('.header__menu').animate({top: '-9000px'},400);
        } else {
            $('.header__menu').animate({top: '0px'},500);
        }

        //$('.header__menu').show('slow');
    });

    $(".burger-menu").click(function () {
        $(this).toggleClass("menu-on");
    });

    $(".owl-carousel").owlCarousel({
        items:1,
        nav:true,
        dots: true,
        touchDrag: true
    });

    // $(window).resize(function () {
    //     var imgHeight = $('.owl-carousel .owl-item img').height();
    //     $('.work__wrap--slider-item').height(imgHeight);
    // });
    //
    // var imgHeight = $('.owl-carousel .owl-item img').height();
    // $('.work__wrap--slider-item').height(imgHeight);

    $('.owl-prev, .owl-next').text(' ');

    $('.work__wrap--slider-zoom').click(function () {
        if($('.work__wrap--slider-item img').hasClass('animate-on')) {
            $('.work__wrap--slider-item img').removeClass('animate-on').addClass('animate-off');
            $('.owl-nav').css('display','block');
        } else {
            $('.work__wrap--slider-item img').removeClass('animate-off').addClass('animate-on');
            $('.owl-nav').css('display','none');
        }
    });

});