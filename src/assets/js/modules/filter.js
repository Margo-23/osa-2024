import $ from 'jquery';

$(document).on('click', '[data-filter-item]', function () {
    const $parent = $(this).closest('[data-filter]');
    const $items = $parent.find('[data-filter-item]');
    const $btn = $parent.find('[data-filter-btn]');

    $items.each(function (){
            $(this).removeClass('active');
        }
    )

    $(this).addClass('active');
    const $itemActiveText = $(this).html();
    $btn.find('span').html($itemActiveText);
    $parent.find('ul').toggle();
});