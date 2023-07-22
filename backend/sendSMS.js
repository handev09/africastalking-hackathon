require("dotenv").config();

// Africa's Talking App credentials
const credentials = {
	apiKey: "5ce749a8ede6487a99ee70fd4202f81773c44f310602413c4e81029e6917341e",
	username: "smsbul",
};

// Initialize the SDK -Africa's talking
const AfricasTalking = require("africastalking")(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

async function sendSMS(phonenumber, message) {
	const options = {
		to: [`+${phonenumber.trim()}`],
		message: message,
		from: "",
	};

	try {
		await sms.send(options);
	} catch (err) {
		console.log(err);
	}
}


module.exports = {sendSMS};
