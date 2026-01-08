require(['knockout', 'domReady!'], function (ko) {
    ko.components.register('code-snippet', { require: 'modules/code-snippet' });
    ko.components.register('code-page', { require: 'modules/code-page' });
    ko.applyBindings("code-page");
});



