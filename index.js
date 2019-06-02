const express = require("express"),
	bodyParser = require("body-parser");

require("dotenv").config();

String.prototype.replaceAll = function (search, replacement) {
	return this.replace(new RegExp(search, "g"), replacement);
};


require("./lib/routes")(express()
	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json())
	.use(require("compression")())

	.engine(".ejs", require("ejs").__express)
	.set("view engine", "ejs")

	.set("etag", true)
	.set("env", "production")
	.set("view cache", true)
	.set("views", `./lib/pages`)
	.set("strict routing", false)
	.set("x-powered-by", false)
	.set("case sensitive routing", false)
);

