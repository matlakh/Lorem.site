$('.like-link').click(function(event) {
    console.log('Show selected products');
});
$('.cart-link').click(function(event) {
    console.log('Show cart');
});
$('.profile-link').click(function(event) {
    console.log('Go to profile page');
});
$('.card__link').click(function(event) {
    console.log('Go to product page');
});


function showPropertyAdd() {
    console.log('Add product to cart');
};

function showPropertyShare() {
    console.log('Share a link to this product');
};

function showPropertyLike() {
    console.log('Select product');
};


$('.form__button').click(function(event) {
    console.log('Sends customer data');
});
$(document).ready(function() {
    getRequest(8, fillProducts);
    $('.products__button').click(paginationProducts);
})

function getRequest(countNumber, callback) {
    $('.overlay, .preloader').show();
    $.getJSON('https://fakestoreapi.com/products', { limit: countNumber },
        callback.bind(this, countNumber)).always(function() { $('.overlay, .preloader').hide(); });
}

function fillProducts(countNumber, jsonData) {
    jsonData.slice(countNumber - 8).forEach(element => {
        createProduct(element);
    });
    if (jsonData.length < countNumber) {
        $('.products__button').addClass('delete');
    }
}

function createProduct(productData) {
    let productsElem = $('<div/>', {
        class: 'products__elem'
    });

    $(productsElem).append(
        $('<div/>', {
            class: 'elem__inner'
        }).append(
            $('<img/>', {
                class: 'elem__img',
                src: productData.image,
                alt: 'produst-img'
            }),
            $('<div/>', {
                class: 'elem__info'
            }).append(
                $('<h3/>', {
                    class: 'elem__title',
                    text: productData.title
                }),
                $('<p/>', {
                    class: 'elem__desc',
                    text: productData.description
                }),
                $('<div/>', {
                    class: 'elem__cost'
                }).append(
                    $('<p/>', {
                        class: 'elem__price',
                        text: 'Rp ' + productData.price
                    })
                )
            )
        ),
        $('<div/>', {
            class: 'elem__hover'
        }).append(
            $('<div/>', {
                class: 'elem__action'
            }).append(
                $('<button class="action__button" onclick="showPropertyAdd()">Add to cart</button>'),
                $('<ul/>', {
                    class: 'action__nav'
                }).append(
                    $('<li/>', {
                        class: 'action__item'
                    }).append(
                        $('<img/>', {
                            src: './img/share.svg',
                            alt: 'share'
                        }),
                        $('<button class="share-button" onclick="showPropertyShare()">Share</button>')
                    ),
                    $('<li/>', {
                        class: 'action__item'
                    }).append(
                        $('<img/>', {
                            src: './img/white_heart.svg',
                            alt: 'white_heart'
                        }),
                        $('<button class="like-button" onclick="showPropertyLike()">Like</button>')
                    )
                )
            )
        )
    )
    $('.products__wrapper').append(productsElem);
}

function paginationProducts(event) {
    let currentProductsCount = $(".products__wrapper > div ").length;
    getRequest(currentProductsCount + 8, fillProducts);
    console.log('Loads products from the database until they run out, after which the button disappears');
}
$(document).ready(function() {
    $('.overlay').fadeOut();
});
const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.slider__pagination',
    },
    navigation: {
        nextEl: '.slider__button-next',
        prevEl: '.slider__button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1
        },
        447: {
            slidesPerView: 2
        },
        710: {
            slidesPerView: 3
        }
    }
});
