$(document).ready(function()
{
    $('#menu').click(function()
    {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scrolllood', function
    {
        $('#menu').removeclass('fa-times');
        $('header').removeclass('toggle');

    });

});