const { join } = require("path");

module.exports = (req, res) => {
	res.render(join(`${process.cwd()}/lib/pages/generic.ejs`), {
		data: JSON.stringify({
			header: {
				page: "An error occured",
				subheading: "Error:",
				description: "Do you want to <a href=\"/home\">go home?</a>"
			},
			containers: []
		})
	});
};
