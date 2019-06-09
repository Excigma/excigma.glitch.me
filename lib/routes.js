const express = require("express"),
    { join } = require("path"),
    { readFileSync } = require("fs");

module.exports = (app) => {
    app
        .use((req, res, next) => {
            res.setHeader("Cache-Control", "public, max-age=345600");
            next();
        })
        .use("/assets", express.static(join(`${process.cwd()}/lib/assets`), { maxAge: 31557600 }))
        .get("/", (req, res) => require("./routes/home")(req, res))
        .get("/home", (req, res) => require("./routes/home")(req, res))
        .get("/arduino", (req, res) => require("./routes/arduino")(req, res))
        .get("/projects", (req, res) => require("./routes/projects")(req, res))
        .get("/feedback", (req, res) => require("./routes/feedback")(req, res))
        .get("/contact", (req, res) => require("./routes/contact")(req, res))

    .get("/atimetable", (req, res) => require("./routes/timetable")(req, res))

    .get("/dataSent", (req, res) => require("./routes/dataSent")(req, res))
        .get("/noCaptcha", (req, res) => require("./routes/noCaptcha")(req, res))
        .get("/error", (req, res) => require("./routes/error")(req, res))

    .get("/noscript", (req, res) => require("./routes/noScript")(req, res))
        .post("/api/feedback", (req, res) => require("./routes/postFeedback")(req, res))


    .get("/project/index.html", (req, res) => res.sendFile(`${process.cwd()}/lib/files/index.html`))
        .get("/project/index-source.html", async (req, res) => {
            const content = await readFileSync(`${process.cwd()}/lib/files/index.html`, "utf8");
            res.setHeader("Content-Type", "text/text");
            res.end(content);
        })
        .get("/project/otherpage.html", (req, res) => res.sendFile(`${process.cwd()}/lib/files/otherpage.html`))

    .listen(process.env.PORT || "8080", () => console.log(`Your app is listening on port ${process.env.PORT || "8080"}`));
};
