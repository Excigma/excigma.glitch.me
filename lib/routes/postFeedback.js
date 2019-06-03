const fetch = require("node-fetch");

module.exports = async (req, res) => {
    if (req.body["g-recaptcha-response"] === undefined || req.body["g-recaptcha-response"] === "" || req.body["g-recaptcha-response"] === null) {
        res.redirect("/noCaptcha");
    }
    const data = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GCAPTCHA}&response=${req.body["g-recaptcha-response"]}`, {
        method: "POST"
    }).then(result => result.json());

    if (data.success === true) {
        fetch(`https://discordapp.com/api/webhooks/584691530699112468/${process.env.WEBHOOKTOKEN}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                embeds: [{
                    title: `${req.body.name ? req.body.name.substring(0, 10) : "Anonymous"} sent a message`,
                    author: {
                        name: "Excigma",
                        icon_url: "https://excigma.herokuapp.com/assets/excigma.jpg"
                    },
                    description: req.body.message.substring(0, 2000),
                    timestamp: new Date(),
                    color: 0x7289DA
                }]
            })
        });
        res.redirect("/dataSent");
    } else {
        res.redirect("/error");
    }
};
