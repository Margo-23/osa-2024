import $ from 'jquery';

$(document).on('click', '[data-open]', function () {
    const $target = $($(this).data('open'));
    // $target.toggle(400);
    $target.toggle();
    $(this).toggleClass('open')
    $target.toggleClass('open');
});

$(document).on('click', '[data-tabs]', function () {
    const $target = $($(this).data('tabs'));
    $('[data-tabs]').each(function (){
        $(this).removeClass('active');
        }
    )
    $('[data-tabs-content]').each(function (){
            $(this).removeClass('active');
        }
    )
    $(this).toggleClass('active')
    $target.toggleClass('active');
});

import './modules/slider';
