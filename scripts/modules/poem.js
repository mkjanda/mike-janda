define(['knockout', 'text!templates/poem.html', 'modules/tablet'], function(ko, htmlString, tablet) {
    class Poem extends tablet {
        constructor(params) {
            super(params);
            const self =this;
            self.poem =  params.poem;
            self.svgViewBox = "0 0 " + (.4 * window.innerWidth.toString()) + " " + (55 * self.poem.lines.length + 100).toString();
            self.svgWidth = ko.pureComputed(()  => (.4 * window.innerWidth).toString());
            self.svgHeight = ko.pureComputed(() => (.9 * window.innerHeight).toString());
        }
    }
    return { viewModel : Poem, template : htmlString };
});
