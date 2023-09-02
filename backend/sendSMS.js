require("dotenv").config();

// Africa's Talking App credentials
const credentials = {
	apiKey: "9945e5825bb9835ef74f2a1ad783a453fcb8fb72800f20dfb859c70d0acc5d81",
	username: "PawsProtect",
};

// Initialize the SDK -Africa's talking
const AfricasTalking = require("africastalking")(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

async function sendSMS(phonenumber, message) {
	const options = {
		to: [phonenumber.trim()],
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
