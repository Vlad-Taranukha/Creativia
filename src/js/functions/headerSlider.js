function headerSlider() {
    $('.slider_right_arr').click(function () {
        $('.slide').eq(0).animate({'margin-left' : '-100%'}, 1000, function () {
            let firstSlide = $('.slide').eq(0).detach();
            $(firstSlide).removeAttr('style');
            $('.slider').append(firstSlide);
        });
    });
    $('.slider_left_arr').click(function () {
        let firstSlide = $('.slide').eq(0);
        let lastSlide = $('.slide').eq($('.slide').length-1).detach();
        $(lastSlide).insertBefore(firstSlide).css('margin-left', '-100%').animate({'margin-left' : 0}, 1000);
    });

}

export default headerSlider;