define(['knockout'], function(ko) {
    class Tablet {
        constructor(params) {
            const self = this;
            self.id = `tablet${params.tabletNum}`;
            self.expanded = ko.observable(false);
            self.onClick = self._onClick.bind(self);
            self.close = self._close.bind(self);
        }

        _onClick(id) {
            const self = this;
            if (self.expanded())
                return;
            self.elem = document.getElementById(id);
      //      self.clone = self.elem.cloneNode(true);
        //    self.clone.id = '';
            const initY = self.elem.offsetTop + self.elem.offsetParent.offsetTop - self.elem.offsetParent.scrollTop;
            const initX = self.elem.offsetLeft + self.elem.offsetParent.offsetLeft - self.elem.offsetParent.scrollLeft;
            const initHeight = self.elem.offsetHeight;
            const initWidth = self.elem.offsetWidth;
            self.position = self.elem.style.position;
            self.left = self.elem.style.left;
            self.top = self.elem.style.top;
            self.width = self.elem.style.width;
            self.minHeight = self.elem.style.minHeight;
            self.zIndex = self.elem.style.zIndex;
            Promise.resolve(() => {
          //      self.elem.parentElement.replaceChild(this.clone, self.elem);
            //    document.body.appendChild(self.elem);
                self.elem.style.top = initY.toString() + 'px';
                self.elem.style.left = initX.toString() + "px";
                self.elem.style.position = 'fixed';
                self.elem.style.zIndex = "1";
            }).then(() => {
                const finalY = .05 * window.innerHeight;
                const transY = finalY - initY;
                const scaleFactor = (.9 * window.innerHeight) / initHeight;
                const finalX = (window.innerWidth - initWidth * scaleFactor) >> 1;
                const transX = finalX - initX;
                self.elem.animate({
                    transform: `matrix3d(${scaleFactor}, 0, 0, 0,
                                            0, ${scaleFactor}, 0, 0,
                                            0, 0, ${scaleFactor}, 0,
                                            ${transX}, ${transY}, 0, 1)`
                }, 250).finished.then(() => {
                    self.elem.style.top = `${finalY}px`;
                    self.elem.style.left = `${finalX}px`;
                    self.elem.style.width = `${initWidth * scaleFactor}px`;
                    self.elem.style.minHeight = `${.9 * window.innerHeight}px`;
                    self.elem.style.position = 'fixed';
                    self.expanded(true);
                });
            });
        }

        _close(component, evt) {
            evt.stopPropagation();
            const self = this;
            const elem = document.getElementById(self.id);
            elem.style.left = self.left;
            elem.style.top = self.top;
            elem.style.width = self.width;
            elem.style.minHeight = self.minHeight;
            elem.style.position = self.position;
  //          document.body.removeChild(elem);
//            self.clone.parentElement.replaceChild(self.elem, self.clone);
            self.expanded(false);
        }

    }
    return Tablet;
});
