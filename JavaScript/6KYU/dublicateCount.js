// define for text variable default value if function will be call without argument
function duplicateCount(text = "") {

	let filtered = text.toLowerCase().split("").sort().join("");
	let match = filtered.match(/([^])\1+/gi) || [];

	return match.length;
}
