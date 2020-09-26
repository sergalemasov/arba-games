var app = {
    init: function() {
        function setViewport() {
            var mvp = document.getElementById('viewport');

            if (screen.width < 640) {
                mvp.setAttribute('content', 'user-scalable=no, width=640');
            } else {
                mvp.setAttribute('content', 'user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1');
            }
        }

        window.addEventListener('orientationchange', setViewport);
    }
};
