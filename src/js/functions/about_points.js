function aboutPoints() {
    $('.point_header').click(function () {
        if ($(this).find('.point_img img').attr('src') == 'images/about_hide.png'){
            $(this).siblings('.point_text').slideUp(1000);
            $('.point_img img').attr('src', 'images/about_open.png');
            $('.point_header h3').css('color', '#262626');
            return;
        }else{
            $('.point_text').slideUp(1000);
            $('.point_img img').attr('src', 'images/about_open.png');
            $('.point_header h3').css('color', '#262626');
            $(this).siblings('.point_text').slideDown(1000);
            $(this).find('.point_img img').attr('src', 'images/about_hide.png');
            $(this).find('h3').css('color', '#ff0036');
        }

    });

}

export default aboutPoints;