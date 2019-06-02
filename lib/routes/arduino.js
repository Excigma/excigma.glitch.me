const { join } = require("path");

module.exports = (req, res) => {
	res.render(join(`${process.cwd()}/lib/pages/generic.ejs`), {
		data: JSON.stringify({
			header: {
				page: "Arduino",
				subheading: "I put all my Arduino projects on this page.",
				description: "Hopefully the things actually work"
			},
			containers: [
				{
					classes: "dark_grey",
					header: "I really ran out of ideas for names, so here are some links hope you'll understand what they are:",
					content: ""
				},
				{
					classes: "dark_grey",
					header: "<a href=\"https://www.tinkercad.com/embed/eis7brBGFVb\">Candle.</a>",
					content: "A RGB led and a yellow LED flicking to try and imitate a candle."
				},
				{
					classes: "dark_grey",
					header: " <a href=\"https://www.tinkercad.com/embed/jCTzQU0bd6x\">Servo motor going back and forth by itself.</a>",
					content: "Servo motor turns to 0 degrees then 180 degrees repeatedly"
				},
				{
					classes: "dark_grey",
					header: "<a href=\"https://www.tinkercad.com/embed/fFKVA2kffYV\">Servo motor controlled by position of potentialmeter.</a>",
					content: "Changing the position of a potentialmeter changes position of the servo motor."
				},
				{
					classes: "dark_grey",
					header: "<a href=\"https://www.tinkercad.com/embed/a8LPNVjBXAf\">PIR motions sensor light.</a>",
					content: "A PIR detects motion, when motion is detected the LED lights up."
				},
				{
					classes: "dark_grey",
					header: "<a href=\"https://www.tinkercad.com/embed/iDKAjDmDRFN\">Ultrasonic sensor changing color of RGB LED depending on distance.</a>",
					content: "Ultrasonic sensor detects how far a object is from the sensor and lights LEDs, more LEDs lit = closer, less lit = further."
				},
				{
					classes: "dark_grey",
					header: "<a href=\"https://www.tinkercad.com/embed/6eWpfBFVWZf\">RGB lighted according to amount of light.</a>",
					content: ""
				},
				{
					classes: "dark_grey",
					header: " <a href=\"https://www.tinkercad.com/embed/hWOFpz1hhKV\">Nightlight</a>",
					content: "The light dependant resistor tells the arduino how much light there is, below a threshold, a LED will light up."
				},
				{
					classes: "dark_grey",
					header: "<a href=\"https://www.tinkercad.com/embed/l2KSjSrqNkL\">Random colors.</a>",
					content: "Just flashes random colors nothing more."
				},
				{
					classes: "dark_grey",
					header: "<a href=\"https://www.tinkercad.com/embed/i6nAenk4faM\">LEDs in a row.</a>",
					content: "LED chase effect."
				},
				{
					classes: "dark_grey",
					header: "<a href=\"https://www.tinkercad.com/embed/0GjS2c1aZQB\">Don't ask about this one, poor moth.</a>",
					content: "Attached a lot of batteries to a lamp.."
				}
			]
		})
	});
};
