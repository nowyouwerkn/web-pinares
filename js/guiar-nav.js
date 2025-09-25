$(document).ready(function () {
    $('.guiar').on("click", function () {
        $('.guiar-menu').addClass('active');
    });

    $('.close-menu').on("click", function () {
        $('.guiar-menu').removeClass('active');
    });
});