(function (app, $) {
    function Carousel() {}

    Carousel.prototype.init = function() {
        this.storeDOMElements();
        this.extractProductNames();
        this.setupCarousel();
        this.addEventListeners();
        this.setInitialProductName();
    }

    Carousel.prototype.storeDOMElements = function() {
        this.carousel = $('.owl-carousel');
        this.bannerElements = $('.products__banner');
        this.currentProductElement = $('.products__current-product');
    }

    Carousel.prototype.setupCarousel = function() {
        var options = {
            loop: true,
            margin: 30,
            dots: true,
            autoWidth: true,
            items: 1,
            center: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true
        };

        this.carousel.owlCarousel(options);
    }

    Carousel.prototype.addEventListeners = function() {
        this.carousel.on('changed.owl.carousel', function(event) {
            this.setCurrentProductByIndex(event.page.index);
        }.bind(this));

        this.carousel.on('click', '.products__banner', function (event) {
            window.location = event.target.dataset.href;
        });
    }

    Carousel.prototype.extractProductNames = function() {
        this.productNames = $.map(this.bannerElements, function(element) {
            return element.dataset.name;
        });
    }

    Carousel.prototype.setCurrentProductByIndex = function (index) {
        this.currentProductElement.html(this.productNames[index]);
    }

    Carousel.prototype.setInitialProductName = function () {
        this.setCurrentProductByIndex(0);
    }

    app.carousel = new Carousel();
})(app, $);
