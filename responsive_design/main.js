/**
 * Created by Sebastian on 10-03-2016.
 */
$(function() {
    $('ul li a').on('click', function() {
        $(this).parent().addClass('current').siblings().removeClass('current');

    }
    );
});

$(function() {
    $(".menu-link").click(function() {
        $("#menu").toggleClass("active");
        $(".container").toggleClass("active");
    });
});
