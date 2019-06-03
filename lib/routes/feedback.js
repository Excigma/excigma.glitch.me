const { join } = require("path");

module.exports = (req, res) => {
    res.render(join(`${process.cwd()}/lib/pages/generic.ejs`), {
        data: JSON.stringify({
            header: {
                page: "Feedback",
                subheading: "Feedback or messaging.",
                description: "You can stay anonymous if you want"
            },
            containers: [{
                classes: "dark_grey",
                id: "form",
                header: `Message`,
                content: `
<noscript>
    <META HTTP-EQUIV="Refresh" CONTENT="1;URL=/noscript">
</noscript>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script>
    function onSubmit() {
        document.getElementById("feedbackForm").submit();
    }
</script>
<form id="feedbackForm" method="POST" action="/api/feedback">
    <fieldset>
        <legend>Leave constructive feedback</legend>
        <label for="name">Name:</label>
        <br>
        <input class="formInput" type="text" name="name" placeholder="Anonymous" maxlength="20" />
        <br>
        <label for="message">Message:</label>
        <br>
        <textarea class="formInput" name="message" maxlength="2000" placeholder="Leave a message here. Restricted to 2000 characters." onKeyDown="this.form.countdown.value = 2000 - this.form.message.value.length" onKeyUp="this.form.countdown.value = 2000 - this.form.message.value.length"></textarea>You have
        <input disabled type="text" name="countdown" size="3" value="2000"> characters left.
        <br>
        <br>

        <button class="g-recaptcha" data-badge="inline" data-theme="dark" data-sitekey="6LcLyaYUAAAAAC1oZF3wj1nlPONDOf0injQfBVHN" data-callback='onSubmit'>Submit</button>

        <br>
    </fieldset>
</form>
			`
            }]
        })
    });
};
