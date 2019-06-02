const { join } = require("path"),
    puppeteer = require("puppeteer"),
    fetch = require("node-fetch");


module.exports = async (req, res) => {
    const browser = await puppeteer.launch({
            args: ["--no-sandbox", "--disable-setuid-sandbox"]
        }),
        pages = await browser.pages(),
        page = pages[0];
    await page.goto("https://nz.myacg.org/webapps/portal/execute/tabs/tabAction?action=refreshAjaxModule&modId=_391_1&tabId=_11_1&tab_tab_group_id=_13_1");

    await page.waitForSelector("#username");
    await page.type("#username", "200835323", { delay: 0 });
    await page.type("#password", process.env.BBPASSWORD, { delay: 0 });
    await page.click("input[name=\"submit\"]");


    let i = 0;
    const int = setInterval(async () => {
            const cookies = await page.cookies();
            i++;
            if (cookies.length > 4) {
                browser.close();
                clearInterval(int);
                let cookieObj = "";

                for (const cookie of cookies) {
                    cookieObj += `${cookie.name}=${cookie.value}; `;
                }

                const result = await fetch("https://nz.myacg.org/webapps/portal/execute/tabs/tabAction?action=refreshAjaxModule&modId=_391_1&tabId=_11_1&tab_tab_group_id=_13_1", {
                    credentials: "include",
                    headers: { cookie: cookieObj }
                }).then(ress => ress.text());

                const timetable = await result
                    .replace("<![CDATA[", "")
                    .replace("<td>1", `<td style="text-align: center">1<br><i>(8.30 - 9.40)</i>`)
                    .replace("<td>2", `<td style="text-align: center">2<br><i>(9.40 - 11)</i>`)
                    .replace("<td>3", `<td style="text-align: center">3<br><i>(11.25 - 12.45)</i>`)
                    .replace("<td>4", `<td style="text-align: center">4<br><i>(12.45 - 1.25)</i>`)
                    .replace("<td>5", `<td style="text-align: center">5<br><i>(1.25 - 2.05)</i>`)
                    .replace("<td>6", `<td style="text-align: center">6<br><i>(2.05 - 3.15)</i>`)
                    .replace("<td>7", `<td style="text-align: center">7<br><i>(3.15 - 4.35)</i>`)
                    .replaceAll("<td>&nbsp;</td>", `<td style="background-color: var(--main-dark); text-align: center"><i>Free Period</i></td>`)
                    .replace("]]>", "");

                res.render(join(`${process.cwd()}/lib/pages/generic.ejs`), {
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
			background-color: var(--main);
		}

		th {
			background-color: var(--main-dark);
			color: white;
		}</style>`,
                            description: "Scroll"
                        },
                        containers: [{
                            classes: "dark_grey",
                            header: "Timetable",
                            content: `<div style="overflow:auto">${timetable}</div>`
                        }]
                    })
                });
            } else if (i > 50) {
                clearInterval(int);
                res.render(join(`${process.cwd()}/lib/pages/generic.ejs`), {
                    data: JSON.stringify({
                        header: {
                            page: "Timetable",
                            subheading: "Failed to fetch",
                            description: "Scroll"
                        }
                    })
                });
                browser.close();
            }
        },
        200);

};
