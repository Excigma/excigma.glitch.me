const { join } = require("path");

module.exports = (req, res) => {
    res.render(join(`${process.cwd()}/lib/pages/generic.ejs`), {
        data: JSON.stringify({
            header: {
                page: "Contact",
                subheading: "This is the page where you would find some of my social media accounts.",
                description: "I am most active on Discord and Instagram."
            },
            containers: [{
                    classes: "dark_grey",
                    extra: `id="instagram"`,
                    header: `<img class="icon" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='57' height='57' version='1'%3e %3ccircle fill='white' cx='28' cy='30' r='4'/%3e %3cpath fill='white' d='M33.6%2c19.2h-11c-1.6%2c0-3%2c0.5-3.9%2c1.4c-0.9%2c0.9-1.4%2c2.3-1.4%2c3.9v11c0%2c1.6%2c0.5%2c3%2c1.5%2c4c1%2c0.9%2c2.3%2c1.4%2c3.9%2c1.4h10.9 c1.6%2c0%2c3-0.5%2c3.9-1.4c1-0.9%2c1.5-2.3%2c1.5-3.9v-11c0-1.6-0.5-2.9-1.4-3.9C36.6%2c19.7%2c35.3%2c19.2%2c33.6%2c19.2z M28.1%2c36.8 c-3.8%2c0-6.8-3.1-6.8-6.8c0-3.8%2c3.1-6.8%2c6.8-6.8S35%2c26.2%2c35%2c30C35%2c33.8%2c31.9%2c36.8%2c28.1%2c36.8z M35.2%2c24.5c-0.9%2c0-1.6-0.7-1.6-1.6 s0.7-1.6%2c1.6-1.6s1.6%2c0.7%2c1.6%2c1.6S36.1%2c24.5%2c35.2%2c24.5z'/%3e %3cpath fill='white' d='M28.3%2c5.2c-13.6%2c0-24.6%2c11-24.6%2c24.6c0%2c13.6%2c11%2c24.6%2c24.6%2c24.6c13.6%2c0%2c24.6-11%2c24.6-24.6C53%2c16.2%2c41.9%2c5.2%2c28.3%2c5.2z M41.4%2c35.6c0%2c2.3-0.8%2c4.3-2.2%2c5.7c-1.4%2c1.4-3.4%2c2.1-5.6%2c2.1H22.7c-2.2%2c0-4.2-0.7-5.6-2.1c-1.5-1.4-2.2-3.4-2.2-5.7v-11 c0-4.6%2c3.1-7.8%2c7.8-7.8h11c2.3%2c0%2c4.2%2c0.8%2c5.6%2c2.2c1.4%2c1.4%2c2.1%2c3.3%2c2.1%2c5.6V35.6z'/%3e %3c/svg%3e" /> <a href="https://www.instagram.com/accounts/login/?next=%2Fl.taiwei%2F&source=follow"> Instagram </a>`,
                    content: "I will probably reply to your Direct Messages. I mostly post random photos I take, but sometimes I post a few of my Arduino projects here too"
                },
                {
                    classes: "light_grey",
                    extra: `id="discord"`,
                    header: `<img class="icon" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3e %3cpath fill='white' d='M97 14a10 10 0 0 1 10 10v86l-11-9-6-5-6-6 3 9H31a10 10 0 0 1-10-10V24a10 10 0 0 1 10-10h66m0-6H31a16 16 0 0 0-16 16v65a16 16 0 0 0 16 16h60l1 1 10 9 11 9V24A16 16 0 0 0 97 8z'/%3e %3cpath fill='white' d='M74 73l4 4c10 0 14-7 14-7a64 64 0 0 0-7-28 24 24 0 0 0-13-5h-1c8 3 12 7 12 7a40 40 0 0 0-14-5 42 42 0 0 0-10 0 5 5 0 0 0-1 0 37 37 0 0 0-11 3l-3 2s4-4 13-7h-1a24 24 0 0 0-13 5 64 64 0 0 0-7 28s4 7 14 7l4-4c-6-2-9-6-9-6l2 1v1a29 29 0 0 0 4 1 41 41 0 0 0 7 2 34 34 0 0 0 12 0 32 32 0 0 0 7-2 28 28 0 0 0 6-3s-2 4-9 6zm-18-7c-2 0-5-2-5-5a5 5 0 1 1 10 0 5 5 0 0 1-5 5zm18 0c-3 0-5-2-5-5a5 5 0 1 1 5 5z'/%3e %3c/svg%3e"/> <a href="https://discordapp.com/invite/VW9AKXh"> Discord</a>`,
                    content: "I will probably respond to Mentions and Direct Messages here. I use Discord mainly to chat with friends, <strike>store my subject notes</strike>. I've made a Discord bot"
                },
                {
                    classes: "dark_grey",
                    extra: `id="asas"`,
                    header: `<img class="icon" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='1024' height='1024'%3e%3cpath fill='white' d='M512 0a512 512 0 0 0-162 998c26 5 35-11 35-25l-1-95c-142 31-172-60-172-60-23-60-57-75-57-75-46-32 4-31 4-31 51 3 78 52 78 52 46 79 120 56 149 43 5-33 18-56 33-69-114-13-234-56-234-253 0-56 20-101 53-137-5-13-23-65 5-136 0 0 43-13 141 53a487 487 0 0 1 256 0c98-66 141-53 141-53 28 71 10 123 5 136 33 36 53 81 53 137 0 197-120 240-234 253 18 16 35 47 35 95l-1 140c0 14 9 30 35 25A512 512 0 0 0 512 0z'/%3e%3c/svg%3e" /> <a href="https://github.com/Excigma"> Github</a>`,
                    content: "Github is where I share most of my Open Source code, and sometimes get feedback from it. "
                },
                {
                    extra: `id="aaaa"`,
                    classes: "dark_grey",
                    header: `<img class="icon" src="" /> <a href=""> Github</a>`,
                    content: ""
                }
            ]
        })
    });
};
