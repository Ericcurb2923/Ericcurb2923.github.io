function initializeMenu(
    selector,
    menu,
    horizontalPosition,
    verticalPosition,
    width
) {
    const $menuDropdown = $(`<div class="menu-dropdown">
        <div class="menu-items">
            <ul></ul>
        </div>
    </div>`);

    if (width) {
        $menuDropdown.find('.menu-items').css('width', width + 'px');
    }

    const horizontalClass = horizontalPosition ? horizontalPosition : 'right';
    const verticalClass = verticalPosition ? verticalPosition : 'top';

    $menuDropdown.addClass(`${horizontalClass} ${verticalClass}`);

    $.each(menu, function (index, item) {
        $menuDropdown.find('ul').append(item);
    });

    $(selector).append($menuDropdown);
}

function initializeMenuClick() {
    $('body').on('click', function (e) {
        const $target = $(e.target);

        if ($target.hasClass('menu-container')) {
            $target.find('.menu-dropdown').toggleClass('active');
        } else {
            $('.menu-dropdown').removeClass('active');
        }
    });
}
