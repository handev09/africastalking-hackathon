const express = require("express");
const app = express();
const { sendSMS } = require("./sendSMS");
// const cors = require("cors");

// app.use(
// 	cors({
// 		origin: "*",
// 	})
// );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const isProduction = process.env.NODE_ENV === "production";

app.post("/sendsms", (req, res) => {
	const details = req.body.numbers
    const number = req.body.numbers
    console.log(req.body.numbers);
	// const details = numbers.split(","); 
	const message = req.body.message;
	try {
		
			sendSMS(number, message);
	
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
if(isProduction){
	app.listen(process.env.PORT||port, () => console.log("server running"));
}else{

	app.listen(3002, () => console.log("server running"));
}
