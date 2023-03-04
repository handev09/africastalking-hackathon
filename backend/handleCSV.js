const csv = require("csv-parser");
const fs = require("fs");

const processCSV = () => {
	const results = [];

	fs
		.createReadStream("file.csv")
		.pipe(csv())
		.on("data", (data) => {
			results.push(data);
		})
		.on("end", () => {
			console.log(results);
		});
      console.log(results[0])
};

processCSV()