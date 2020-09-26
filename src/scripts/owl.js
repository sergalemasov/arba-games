(function (app, $) {
    function Owl() {}

    Owl.prototype.init = function() {
        this.storeDOMElements();
        this.extractProductNames();
        this.setupCarousel();
        this.addEventListeners();
        this.setInitialProductName();
    }

    Owl.prototype.storeDOMElements = function() {
        this.carousel = $('.owl-carousel');
        this.bannerElements = $('.products__banner');
        this.currentProductElement = $('.products__current-product');
    }

    Owl.prototype.setupCarousel = function() {
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

    Owl.prototype.addEventListeners = function() {
        this.carousel.on('changed.owl.carousel', function(event) {
            this.setCurrentProductByIndex(event.page.index);
        }.bind(this));

        this.carousel.on('click', '.products__banner', function (event) {
            window.location = event.target.dataset.href;
        });
    }

    Owl.prototype.extractProductNames = function() {
        this.productNames = $.map(this.bannerElements, function(element) {
            return element.dataset.name;
        });
    }

    Owl.prototype.setCurrentProductByIndex = function (index) {
        this.currentProductElement.html(this.productNames[index]);
    }

    Owl.prototype.setInitialProductName = function () {
        this.setCurrentProductByIndex(0);
    }

    app.owl = new Owl();
})(app, $);
