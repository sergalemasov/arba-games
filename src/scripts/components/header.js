(function (app) {
    var mediaMd = '(max-width: 824px)';
    var burgerExpandedClass = 'header-burger_expanded';
    var dropdownVisibleClass = 'header-dropdown_visible';

    function Header() {
        this.isBurgerExpanded = false;
        this.onBurgerClick = this.onBurgerClick.bind(this);
        this.onMediaChange = this.onMediaChange.bind(this);
    }

    Header.prototype.init = function () {
        this.storeDomElements();
        this.addListeners();
    }

    Header.prototype.storeDomElements = function () {
        this.burgerNode = document.getElementById('header-burger');
        this.dropdownNode = document.getElementById('header-dropdown');
    }

    Header.prototype.addListeners = function () {
        this.burgerNode.addEventListener('click', this.onBurgerClick);

        window.matchMedia(mediaMd).addListener(this.onMediaChange);
    }

    Header.prototype.onBurgerClick = function () {
        if (this.isBurgerExpanded) {
            this.collapseBurger();
        } else {
            this.expandBurger();
        }
    }

    Header.prototype.onMediaChange = function () {
        if (!window.matchMedia(mediaMd).matches && this.isBurgerExpanded) {
            this.collapseBurger();
        }
    }

    Header.prototype.collapseBurger = function () {
        this.burgerNode.classList.remove(burgerExpandedClass);
        this.dropdownNode.classList.remove(dropdownVisibleClass);
        this.isBurgerExpanded = false;
    }

    Header.prototype.expandBurger = function () {
        this.burgerNode.classList.add(burgerExpandedClass);
        this.dropdownNode.classList.add(dropdownVisibleClass);
        this.isBurgerExpanded = true;
    }

    app.header = new Header();
})(app);
