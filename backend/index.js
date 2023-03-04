const express = require("express");
const app = express();
const { sendSMS } = require("./sendSMS");
const cors = require("cors");

app.use(
	cors({
		origin: "*",
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/sendsms", (req, res) => {
	// const details = req.body.numbers
    const numbers = req.body.numbers
    console.log(req.body.numbers);
	const details = numbers.split(",");
	const message = req.body.message;
	try {
		details.forEach((value) => {
			sendSMS(value, message);
		});
		console.log("sms sent");
		res.status(200).json({
			message: "sms sent",
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: `${err.message}`,
		});
	}
});

app.listen(3000, () => console.log("server running"));
