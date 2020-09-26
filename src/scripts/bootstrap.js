(function (app) {
    function bootstrap() {
        app.init();
        app.header.init();
    }

    window.onload = bootstrap;
})(app);
