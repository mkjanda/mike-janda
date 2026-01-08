define(['knockout', 'text!templates/story-cover.html', 'modules/tablet'], function(ko, htmlString, tablet) {
    class StoryCover extends tablet {
        constructor(params) {
            super(params);
            const self = this;
            self.story = params.story;
            self.coverImage = ko.observable(`/writing/images/${self.story.coverImage}`);
            self.mouseOver = self._mouseOver.bind(self);
            self.mouseOut = self._mouseOut.bind(self);
            self.onClick = self._onClick.bind(self);
            self.close = self._close.bind(self);
        }

        _close(component, evt) {
            const self = this;
            super._close(component, evt);
        }

        _mouseOver() {
            const self = this;
            if (self.expanded())
                return;
        }

        _mouseOut() {
            const self = this;
            if (self.expanded())
                return;
        }
    }
    return { viewModel : StoryCover, template : htmlString };
});
