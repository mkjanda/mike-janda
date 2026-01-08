define(['knockout', 'text!templates/code-page.html', 'text!snippets/bio.html', 'text!snippets/c-sharp.html',
     'text!snippets/css.html', 'text!snippets/java.html', 'text!snippets/javascript.html',
     'text!snippets/svg.html', 'text!snippets/xslt.html'], function (ko, htmlString, bio, cSharp, css, java, javascript, svg, xslt) {
    class CodePage {
        constructor(params) {
            let self = this;
            self.menuItem = ko.observableArray([
                {
                    text: 'Bio',
                    snippet: bio,
                    snippetClass: 'bio',
                    subItems: ko.observableArray([])
                },
                {
                    text: 'Code Samples',
                    snippetClass: 'code',
                    subItems: ko.observableArray([
                        { text: 'C#', snippet: cSharp },
                        { text: 'Java', snippet: java },
                        { text: 'JavaScript', snippet: javascript },
                        { text: 'XSLT', snippet: xslt },
                        { text: 'CSS', snippet: css },
                        { text: 'SVG', snippet: svg}])
                }
            ]);
            self.sectionContent = ko.observable(bio);
            self.sectionClassName = ko.observable('bio');
            self.click = self._click.bind(self);
        }

        _click(item, subitem) {
            let self = this;

            if ((item.snippet === undefined) && (subitem == undefined))
                return;
            self.sectionClassName(item.snippetClass || '');
            if (subitem !== undefined)
                self.sectionContent(subitem.snippet);
            else
                self.sectionContent(item.snippet);
        }
    }
    return { viewModel: CodePage, template: htmlString };
});

