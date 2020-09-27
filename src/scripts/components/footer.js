(function (app, $) {
    function Footer() {}

    Footer.prototype.init = function () {
        this.storeDOMElements();
        this.addEventListeners();
    }

    Footer.prototype.storeDOMElements = function () {
        this.aboutCompanyElement = $('#footer__about-company');
        this.productsElement = $('#footer__products');
        this.servicesElement = $('#footer__services');
    }

    Footer.prototype.addEventListeners = function () {
        this.aboutCompanyElement.on('click', function () {
            app.scroll.scrollToAboutCompany();
        });

        this.productsElement.on('click', function () {
            app.scroll.scrollToProducts();
        });

        this.servicesElement.on('click', function () {
            app.scroll.scrollToServices();
        });
    }

    app.footer = new Footer();
})(app, $);
