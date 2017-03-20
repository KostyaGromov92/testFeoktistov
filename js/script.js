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
});