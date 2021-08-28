var images = {

    "bgImgFade": function () {
        var fastTransition = 100;
        var slowTransition = 300;
        var els = document.getElementsByClassName("bgloadfade");
        for (var i = 0; i < els.length; i++) {
            var el = els[i];

            var matches = el.style.backgroundImage.match(/^url\("(.+)"\)$/);
            if (!matches || matches.length < 1) { continue; }
            var url = matches[1]; 
            el.className += " loading";
            el.style.opacity = 0;
            el.style.transition = "opacity " + fastTransition + "ms linear";
            el.style.opacity = 1;
            
            var img = new Image();
            img.onload = (function (el, url) {
                return function () {
                    el.style.opacity = 0;
                    setTimeout(() => {
                        el.style.backgroundImage = 'url("' + url + '")';
                        el.style.transition = "opacity " + slowTransition + "ms linear";
                        el.className = el.className.replace(" loading", "");
                        el.style.opacity = 1;
                    }, fastTransition * 1.1);
                }
            })(el, url);
            img.src = url;
        }
    },

    "imgFade": function () {
        var imgs = document.getElementsByTagName("img");
        for (var i = 0; i < imgs.length; i++) {
            var img = imgs[i];
            if (!img.complete) {
                img.style.opacity = 0;
                img.onload = function () {
                    this.style.opacity = 1;
                }
            }
        }
    }
}

images.bgImgFade();
images.imgFade();