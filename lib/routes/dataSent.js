const { join } = require("path");

module.exports = (req, res) => {
    res.render(join(`${process.cwd()}/lib/pages/generic.ejs`), {
        data: JSON.stringify({
            header: {
                page: "The data has been sent",
                subheading: "The message has been sent, and will be read soon",
                description: "Do you want to <a href=\"/home\">go home?</a>"
            },
            containers: []
        })
    });
};
