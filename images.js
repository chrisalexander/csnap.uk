var images = {
    "fastTransition": 100,
    "slowTransition": 300,

    "handleImgFade": function(el) {
        var matches = el.style.backgroundImage.match(/^url\("(.+)"\)$/);
        if (!matches || matches.length < 1) { return; }
        var url = matches[1]; 
        el.className += " loading";
        el.style.opacity = 0;
        el.style.transition = "opacity " + this.fastTransition + "ms linear";
        el.style.opacity = 1;
        
        var img = new Image();
        var transitions = {
            "fast": this.fastTransition,
            "slow": this.slowTransition
        }
        img.onload = (function (el, url) {
            return function () {
                el.style.opacity = 0;
                setTimeout(() => {
                    el.style.backgroundImage = 'url("' + url + '")';
                    el.style.transition = "opacity " + transitions.slow + "ms linear";
                    el.className = el.className.replace(" loading", "");
                    el.style.opacity = 1;
                }, transitions.fast * 1.1);
            }
        })(el, url);
        img.src = url;
    },

    "bgImgFade": function () {
        var els = document.getElementsByClassName("bgloadfade");
        for (var i = 0; i < els.length; i++) {
            var el = els[i];
            this.handleImgFade(el);
        }
    }
}

images.bgImgFade();