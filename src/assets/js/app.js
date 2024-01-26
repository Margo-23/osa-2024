import $ from 'jquery';

$(document).on('click', '[data-open]', function () {
    const $target = $($(this).data('open'));
    // $target.toggle(400);
    $target.toggle();
    $(this).toggleClass('open');
    $target.toggleClass('open');
});

$(document).on('click', '[data-close]', function () {
    const $target = $($(this).data('close'));
    $target.toggle();
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
    $(this).addClass('active')
    $target.addClass('active');
});


$(document).on('click', '[data-reset]', function () {
    const $target = $($(this).data('reset'));
    $target.val('')
        .attr('type', 'text')
        .attr('type', 'date');
});


import './modules/slider';
import './modules/cookies';
import './modules/filter';
