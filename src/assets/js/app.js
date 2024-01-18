import $ from 'jquery';

$(document).on('click', '[data-open]', function () {
    const $target = $($(this).data('open'));
    // $target.toggle(400);
    $target.toggle();
    $(this).toggleClass('open')
    $target.toggleClass('open');
});

import './modules/slider';
