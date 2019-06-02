const { join } = require("path");

module.exports = (req, res) => {
	res.render(join(`${process.cwd()}/lib/pages/generic.ejs`), {
		data: JSON.stringify({
			header: {
				page: "Feedback",
				subheading: "Anonymous feedback or messaging.  I may respond to a few on my Instagram story.",
				description: ""
			},
			containers: []
		})
	});
};
