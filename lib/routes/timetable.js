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
                    .replace("<td>1", `<td class="period">1<br><i><u>8.30am - 9.40am</u></i>`)
                    .replace("<td>2", `<td class="period">2<br><i><u>9.40am - 11am</u></i>`)
                    .replace("<td>3", `<td class="period">3<br><i><u>11.25am - 12.45pm</u></i>`)
                    .replace("<td>4", `<td class="period">4<br><i><u>12.45am - 1.25pm</u></i>`)
                    .replace("<td>5", `<td class="period">5<br><i><u>1.25pm - 2.05pm</u></i>`)
                    .replace("<td>6", `<td class="period">6<br><i><u>2.05pm - 3.15pm</u></i>`)
                    .replace("<td>7", `<td class="period">7<br><i><u>3.15pm - 4.35pm</u></i>`)
                    .replaceAll("<td>&nbsp;</td>", `<td style="background-color: var(--main-dark); text-align: center"><i>No Class</i></td>`)
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
