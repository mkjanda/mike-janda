define(['knockout', 'text!templates/writing-page.html', 'text!writing/writing.json'], function(ko, htmlString, writingJSON) {
    class WritingPage {
        constructor(params) {
            let self = this;
            self.writing = JSON.parse(writingJSON);
            self.story = ko.observable(self.writing.stories[0]);
            self.displayedSection = ko.observable('Writing');          
            self.onStoryClick = self._onStoryClick.bind(self);
        }

        _onStoryClick(ndx) {
            const self = this;
            self.story(self.writing.stories[ndx()]);
            self.displayedSection('Creative');
        }
    }


    return { viewModel : WritingPage, template : htmlString };
});