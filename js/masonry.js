var elem = document.querySelector('.products__wrapper');
var msnry = new Masonry(elem, {
    // options
    itemSelector: '.products__elem',
    columnWidth: 200
});