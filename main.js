var itemInfo = document.getElementsByClassName("item-info")[0];
var itemName = itemInfo.parentElement.querySelector(".card-item").querySelector(".item-name"
	).querySelector("span").innerText;
var quality = itemInfo.querySelector("dd").innerText
var unuEffect;var craft = "Craftable";
var excpList = ["The Value of Teamwork", "The Athletic Supporter"]
const pattern = /\b(?:Normal |Unique |Vintage |Genuine |Strange |Unusual |Haunted |Collector's |Decorated |Community |Uncraftable )\b/g;
fixedName = itemName.replace(pattern, "");

if (!itemName.includes("Taunt") && !excpList.includes(fixedName)) {
	fixedName = fixedName.replace(/^The /g, "");
}
if (itemName.includes("Uncraftable")) {
	craft = "Non-Craftable";
}
if (quality == "Unusual") {
	unuEffect = document.getElementsByClassName("card-item")[0].querySelector(".item-name"
		).textContent.split("★ ")[1].split("  Unusual")[0];
} if (itemName.includes("Strange") && quality != "Strange") {
	quality = "Strange " + quality;
}

var effects = chrome.runtime.getURL("effects.json");
var qualityID = "";

console.log("--- logging ---");
console.log("Name: ", fixedName);
console.log("Quality: ", quality);
console.log("Effect: ", unuEffect);
console.log("-end-");

function getEffectID(q) {
	if (!quality.includes("Unusual")) {return}
	fetch(effects).then(function (response) {
		return response.json();
	}).then(function (obj) {
		qualityID = obj[q];
	})
}

function openURL(name, qName, qID) {
	window.open(`https://backpack.tf/stats/${qName}/${name}/Tradable/${craft}/${qID}`, "_blank");
}

function begin() {
	var div = document.getElementById("page-sidebar");
	var button = document.createElement("button");div.prepend(button);
	button.style = `position:absolute;margin-top:-25px;margin-left:70px;
	color:white;background-color:#42445b;border:none;border-radius:5px`;
	button.innerHTML = "Backpack.tf Stats";
	button.onclick = () => {openURL(fixedName, quality, qualityID)}
}

setTimeout(() => {
	getEffectID(unuEffect);
	begin();
}, 500); // Change this to "1000" or "2500" if the page loads slowly.