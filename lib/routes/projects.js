const { join } = require("path");

module.exports = (req, res) => {
    res.render(join(`${process.cwd()}/lib/pages/generic.ejs`), {
        data: JSON.stringify({
            header: {
                page: "Projects",
                subheading: "List of projects I am currently working on",
                description: "Scroll"
            },
            containers: [{
                    id: "questallation",
                    classes: "dark_grey",
                    header: `NodeJS - Questallation - Discord Bot`,
                    content: `Link to the <a href="https://questallation.glitch.me">homepage of Questallation</a>`
                },
                {
                    extra: `id="arduino"`,
                    classes: "dark_grey",
                    header: "C - Arduino Mini-projects",
                    content: `Link to simple Tinkercad projects with <a href="/arduino"> my Arduino projects</a>`
                },
                {
                    classes: "light_grey",
                    header: `Discord Server`,
                    content: `Link to the <a href="/contact#discord">my Discord Server</a>`
                },
                {
                    classes: "",
                    header: `And of course, this website.`,
                    content: `<strike><a href="/">aaa yayaayya sds sadas</a></strike>`
                },
                {
                    extra: `id="homework"`,
                    classes: "dark_grey",
                    header: `Some homework`,
                    content: `<a href="/2sv43iAN/index">Dunno why you'd want to see this, but click here.</a>`
                }
            ]
        })
    });
};
