require(['knockout', 'domReady!'], function (ko) {
    ko.components.register('poem', { require: 'modules/poem' });
    ko.components.register('story-page', { require : 'modules/story-page' });
    ko.components.register('story-cover', { require : 'modules/story-cover'});
    ko.components.register('writing-page', { require: 'modules/writing-page' });
    ko.applyBindings("writing-page");
});



