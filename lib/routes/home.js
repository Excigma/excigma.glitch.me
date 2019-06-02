const { join } = require("path");

module.exports = (req, res) => {
    res.render(join(`${process.cwd()}/lib/pages/generic.ejs`), {
        data: JSON.stringify({
            header: {
                page: "Home",
                subheading: "Welcome to the homepage of my website.",
                description: "Scroll"
            },
            containers: [{
                    classes: "dark_grey",
                    header: "Hello",
                    content: "Welcome to my website, it's pretty plain at the moment."
                },
                {
                    classes: "light_grey",
                    header: "Are you here to find my Tinkercad Arduino projects?",
                    content: "If so, <a href=\"arduino\">here you go</a>"
                },
                {
                    classes: "dark_grey",
                    header: "About this website?",
                    content: "I built this website from scratch :P.\n No JS used in the frontend but the website is hosted with express on a NodeJS server"
                }
            ]
        })
    });
};
