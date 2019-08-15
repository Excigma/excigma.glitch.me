setInterval(() => {
    document.querySelector("body").style.background = `linear-gradient(50deg, #${Math.floor(Math.random() * 16777215).toString(16)},#${Math.floor(Math.random() * 16777215).toString(16)})`;
}, 500);
