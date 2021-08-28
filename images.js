var images = {
    "fastTransition": 200,
    "slowTransition": 450,

    "handleImgFade": function(el) {
        var matches = el.style.backgroundImage.match(/^url\("(.+)"\)$/);
        if (!matches || matches.length < 1) { return; }

        var url = matches[1]; 
        
        var started = false;
        var startTransitionTimeout = setTimeout(() => {
            started = true;
            el.className += " loading";
            el.style.opacity = 0;
            el.style.transition = "opacity " + this.fastTransition + "ms linear";
            el.style.opacity = 1;
        }, 1);
        
        var img = new Image();
        img.onload = ((el, url, fastTransition, slowTransition, startTransitionTimeout) => {
            return () => {
                clearTimeout(startTransitionTimeout);
                if (!started) { return; }

                el.style.opacity = 0;
                setTimeout(() => {
                    el.style.backgroundImage = 'url("' + url + '")';
                    el.style.transition = "opacity " + slowTransition + "ms linear";
                    el.className = el.className.replace(" loading", "");
                    el.style.opacity = 1;
                }, fastTransition * 1.1);
            };
        })(el, url, this.fastTransition, this.slowTransition, startTransitionTimeout);
        img.src = url;
    },

    "bgImgFade": function() {
        var els = document.getElementsByClassName("bgloadfade");
        for (var i = 0; i < els.length; i++) {
            var el = els[i];
            this.handleImgFade(el);
        }
    },

    "bgImgModals": function() {
        var els = document.getElementsByClassName("bgmodalfade");
        for (var i = 0; i < els.length; i++) {
            var el = els[i];
            el.addEventListener('show.bs.modal', (e) => {
                var subEls = e.target.getElementsByClassName("bgmodalfadetgt");
                for (var j = 0; j < subEls.length; j++) {
                    var subEl = subEls[j];
                    this.handleImgFade(subEl);
                }
            });
        }
    }
}

images.bgImgFade();
images.bgImgModals();