const { join } = require("path");

module.exports = (req, res) => {
    res.render(join(`${process.cwd()}/lib/pages/generic.ejs`), {
        data: JSON.stringify({
            header: {
                page: "The data has <i>not<i> been sent",
                subheading: "Please go back, and tick the catcha",
                description: "Do you want to <a href=\"/home\">go home?</a>"
            },
            containers: []
        })
    });
};
