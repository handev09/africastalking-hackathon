require("dotenv").config();

// Africa's Talking App credentials
const credentials = {
	apiKey: process.env.AFRICASTKNG_PROD,
	username: "binusu-verify",
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
