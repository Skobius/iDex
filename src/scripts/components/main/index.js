const main = {
    init() {
        let dayHover = $('.js-day-hover');

        dayHover
            .mouseover(function() {
                if ($(this).closest('.month').find('.people-info').length > 0) {
                    $(this).closest('.month').find('.people-info').addClass('people-info--active');
                } else {
                    $(this).closest('.month').prev('.month').find('.people-info').addClass('people-info--active');
                }
            })
            .mouseout(function() {
                if ($(this).closest('.month').find('.people-info').length > 0) {
                    $(this).closest('.month').find('.people-info').removeClass('people-info--active');
                } else {
                    $(this).closest('.month').prev('.month').find('.people-info').removeClass('people-info--active');
                }
            });
    }
};

export default main;
