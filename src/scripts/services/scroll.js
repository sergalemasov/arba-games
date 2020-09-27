(function (app, $) {
    function Scroll() {}

    Scroll.prototype.init = function () {
        this.storeDOMElements();
    }

    Scroll.prototype.storeDOMElements = function () {
        this.aboutCompanyElement = $('#scroll__about-company');
        this.productsElement = $('#scroll__products');
        this.servicesElement = $('#scroll__services');
    }

    Scroll.prototype.scrollToAboutCompany = function () {
        this.scrollToElement(this.aboutCompanyElement);

    }

    Scroll.prototype.scrollToServices = function () {
        this.scrollToElement(this.servicesElement);
    }

    Scroll.prototype.scrollToProducts = function () {
        this.scrollToElement(this.productsElement);
    }

    Scroll.prototype.scrollToElement = function (element) {
        var scrollOptions = {
            block: 'start',
            behavior: 'smooth'
        };

        element[0].scrollIntoView(scrollOptions);
    }

    app.scroll = new Scroll();
})(app, $);
