define(['knockout', 'text!templates/story-page.html'], function (ko, htmlString) {
    class StoryPage {
        constructor(params) {
            const self = this;
            self.displayedSection = params.displayedSection;
            self.storyHTML = ko.observable("");
            self.layout = self._layout.bind(self);
            self.laidOut = undefined;
            self.story = params.story;
            self.storyParas = [];
            window.addEventListener("resize", self.layout);
            const observation = (elemList, observer) => {
                self.layout();
            };
            self.observer = new ResizeObserver(observation);
            window.addEventListener("resize", self.layout);
            require([`text!${params.story().source}`, "domReady!"], function (source) {
                self.sourceDiv = document.createElement("div");
                self.sourceDiv.innerHTML = source;
                self.sourceDiv.querySelectorAll('p').forEach((p) => self.storyParas.push({ class : p.className, text : p.innerText}));
                self.numParasSized = 0;
                self.layout();
            });

        }

        _layout(object) {
            const self = this;
            self.storyTextDiv = document.querySelector('.story-text');
            self.storyTextDiv.innerHTML = '';
            let div = document.createElement("div");
            self.storyTextDiv.appendChild(div);
            let rollingP = null;
            self.storyParas.forEach((elem) => {
                if (rollingP !== null)
                    if (rollingP.innerText !== '')
                        div.appendChild(rollingP);
                rollingP = null;
                let p = document.createElement('p');
                p.className = elem.class;
                p.innerText = elem.text;
                div.appendChild(p);
                if (div.clientWidth < div.scrollWidth) {
                    let text = p.innerText;
                    rollingP = document.createElement("p")
                    rollingP.className = p.className;
                    while (div.clientWidth < div.scrollWidth) {
                        let words = /(.+)(\s.*)/.exec(text);
                        if (words === null) {
                            div.removeChild(p);
                            p.innerText = '';
                            rollingP.innerText = text + rollingP.innerText;
                            break;
                        }
                        p.innerText = words[1];
                        rollingP.innerText = words[2] + rollingP.innerText;
                        text = text.substring(0, p.innerText.length);
                    }
                    let img = document.createElement("img");
                    img.src = '/images/sunburst3.svg';
                    self.storyTextDiv.appendChild(img);
                    div = document.createElement("div");
                    self.storyTextDiv.appendChild(div);
                }
            });
            self.storyHTML(self.storyTextDiv.innerHTML);
            if (self.laidOut === undefined) {
                self.storyTextDiv.querySelectorAll('p').forEach((p) => self.observer.observe(p));
                self.laidOut = false;
            } else if (self.laidOut === false) {
                self.storyTextDiv.querySelectorAll('p').forEach((p) => self.observer.unobserve(p));
                self.laidOut = true;
            }
        }
    }

    return {
        viewModel: StoryPage,
        template: htmlString
    }
});