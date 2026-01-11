define(['knockout', 'text!templates/writing-page.html', 'text!writing/writing.json'], function(ko, htmlString, writingJSON) {
    class WritingPage {
        constructor(params) {
            let self = this;
            self.writing = JSON.parse(writingJSON);
            self.story = ko.observable(self.writing.stories[0]);
            self.pageNum = ko.observable(1);
            self.techSource = ko.pureComputed(() => `/images/book${self.pageNum()}.jpg`);
            self.displayedSection = ko.observable('Writing');          
            self.onStoryClick = self._onStoryClick.bind(self);
            self.bookClick = self._bookClick.bind(self);
        }

        _bookClick(evt) {
            const self = this;
            let book = document.querySelector('img.iat-manual');
            let change = (book.clientWidth >> 1) > evt.clientX ? -1 : 1;
            if ((change === -1) && (self.pageNum() === 1))
                return;
            if ((change === 1) && (self.pageNum() === 5))
                return;
            self.pageNum(self.pageNum() + change);
        }

        _onStoryClick(ndx) {
            const self = this;
            self.story(self.writing.stories[ndx()]);
            self.displayedSection('Creative');
        }
    }


    return { viewModel : WritingPage, template : htmlString };
});