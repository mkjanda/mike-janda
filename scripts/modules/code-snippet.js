define(['knockout', 'text!templates/code-snippet.html'], function(ko, htmlString) {
    class CodeSnippet {
        constructor(params) {
            let self = this;
            self.snippetText = ko.observable('');
            require(['text!snippets/' + params.snippet() + '.html'], function(snippet) {
                self.snippetText(snippet);
            });
            self.snippet = ko.pureComputed(() => self.snippetText());
            self.snippetClass = params.cssClass;
        }
    }

    return { viewModel: CodeSnippet, template: htmlString };
});