(function (app, $) {
    function Header() {}

    Header.prototype.init = function () {
        this.storeDOMElements();
        this.addEventListeners();
    }

    Header.prototype.storeDOMElements = function () {
        this.aboutCompanyElement = $('#header__about-company');
        this.productsElement = $('#header__products');
        this.servicesElement = $('#header__services');
    }

    Header.prototype.addEventListeners = function () {
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

    app.header = new Header();
})(app, $);
