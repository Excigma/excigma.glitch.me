const { join } = require("path");
module.exports = (req, res) => {
    res.render(join(`${process.cwd()}/lib/pages/generic.ejs`), {
        data: JSON.stringify({
            header: {
                page: "An error occured",
                subheading: "You do not have Javascript enabled. ",
                description: "Please use Chrome or any alternative"
            },
            containers: []
        })
    });
};
