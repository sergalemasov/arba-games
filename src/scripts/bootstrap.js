(function (app) {
    function bootstrap() {
        [
            app.carousel,
            app.scroll,
            app.header,
            app.footer
        ].forEach(function (entity) {
            entity.init();
        });
    }

    window.onload = bootstrap;
})(app);
