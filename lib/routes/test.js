/*
const { join } = require("path"),
    FormData = require("isomorphic-form-data"),
    cheerio = require("cheerio"),
    fetch = require("node-fetch");*/

const casper = require("casperjs");

module.exports = async (req, res) => {
    casper.start("https://nz.myacg.org/webapps/portal/execute/tabs/tabAction?action=refreshAjaxModule&modId=_391_1&tabId=_11_1&tab_tab_group_id=_13_1");

    casper.then(() => {
        this.echo("I'm loaded.");
    });

    casper.run();


    /*

       const result = await phantom.create(async(browser) => {
        await browser.createPage(async(page) => {
            await page.open("https://nz.myacg.org/webapps/portal/execute/tabs/tabAction?action=refreshAjaxModule&modId=_391_1&tabId=_11_1&tab_tab_group_id=_13_1", async() => {
                await sleep(200);
                page.evaluate(() => {
                    document.getElementById("username").value = "200835323";
                    document.getElementById("password").value = process.env.BB_PASSWORD;
                    document.querySelector("input[name=submit]").click();
                }, () => {});

                await sleep(1000);

                page.evaluate(() => {
                    setInterval(() => {
                        if (document.cookie.split(";").length > 2) {
                            console.log(document.cookie);
                            return document.cookie;
                        }
                    });
                }, (cookie) => {
                    console.log(`2${cookie}`);
                    return cookie;
                });

            });
        });
    });const execution = await fetch("https://sso-nz.myacg.org/login?service=https%3A%2F%2Fnz.myacg.org%2Fwebapps%2Fbb-auth-provider-cas-BBLEARN%2Fexecute%2FcasLogin%3Fcmd%3Dlogin%26authProviderId%3D_4_1%26redirectUrl%3Dhttps%253A%252F%252Fnz.myacg.org%252Fwebapps%252Fportal%252Fexecute%252FdefaultTab%26globalLogoutEnabled%3Dtrue", {


                credentials: "include"
            })
            .then(async result => await (await cheerio.load(await result.text()))("input[name=execution]").attr("value"));

        const form = new FormData();
        form.append("username", "200835323");
        form.append("password", process.env.BBPASSWORD);
        form.append("lt", "");
        form.append("execution", execution);
        form.append("submit", "LOGIN");
        form.append("_eventId", "submit");

        const page = await fetch("https://sso-nz.myacg.org/login?service=https%3A%2F%2Fnz.myacg.org%2Fwebapps%2Fbb-auth-provider-cas-BBLEARN%2Fexecute%2FcasLogin%3Fcmd%3Dlogin%26authProviderId%3D_4_1%26redirectUrl%3Dhttps%253A%252F%252Fnz.myacg.org%252Fwebapps%252Fportal%252Fexecute%252FdefaultTab%26globalLogoutEnabled%3Dtrue", {
            method: "post",
            body: form,
            headers: {
                "content-type": "multipart/form-data"
            },
            credentials: "include"
        });

        console.log(await page.text());
    */


    res.send("ok");
    //  console.log(await loginPage.querySelector(`input[name=execution]`));
    /* const timetable = await result
                        .replace("<![CDATA[", "")
                        .replace("<td>1", `<td class="period">1<br><i><u>8.30am - 9.40am</u></i>`)
                        .replace("<td>2", `<td class="period">2<br><i><u>9.40am - 11am</u></i>`)
                        .replace("<td>3", `<td class="period">3<br><i><u>11.25am - 12.45pm</u></i>`)
                        .replace("<td>4", `<td class="period">4<br><i><u>12.45am - 1.25pm</u></i>`)
                        .replace("<td>5", `<td class="period">5<br><i><u>1.25pm - 2.05pm</u></i>`)
                        .replace("<td>6", `<td class="period">6<br><i><u>2.05pm - 3.15pm</u></i>`)
                        .replace("<td>7", `<td class="period">7<br><i><u>3.15pm - 4.35pm</u></i>`)
                        .replaceAll("<td>&nbsp;</td>", `<td style="background-color: var(--main-dark); text-align: center"><i>No Class</i></td>`)
                        .replace("]]>", "");
    */
    /*  res.render(join(`${process.cwd()}/lib/pages/generic.ejs`), {
            data: JSON.stringify({
                header: {
                    page: "Timetable",
                    subheading: `
    <style>
    tr th:nth-child(2),
    tr td:nth-child(2),
    tr th:nth-child(8),
    tr td:nth-child(8) {
        display: none;
    }

    		table {
    			border-collapse: collapse;
    		}

    		table,
    		th,
    		td {
    			border: 1px solid  var(--main-dark);
    		}

    		th,
    		td {
    			padding: 3px;
    			text-align: left;
    		}

    		tr:nth-child(even) {
    			background: var(--main);
            }

    		th {
    			background: var(--main-dark);
    			color: white;
            }
            .period {
                text-align: center;
            }
            </style>`,
                    description: "Scroll"
                },
                containers: [{
                    classes: "dark_grey",
                    header: "Timetable",
                    content: `<div style="overflow:auto">${timetable}</div>`
                }]
            })
        }); */
};
