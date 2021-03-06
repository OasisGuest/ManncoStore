// ==UserScript==
// @name         Mannco.Store Utilities
// @namespace    https://steamcommunity.com/id/realguest/
// @version      0.1
// @description  Browser Script to enhance your experience on mannco.store
// @author       Guest
// @include      https://mannco.store/item*
// @icon         https://icon-library.com/images/crescent-icon/crescent-icon-1.jpg
// ==/UserScript==

// - This Script is for Tampermonkey - version: 0.1
var itemInfo = document.getElementsByClassName("item-info")[0];
var itemName = itemInfo.parentElement.querySelector(".card-item").querySelector(".item-name"
	).querySelector("span").innerText;
var quality = itemInfo.querySelector("dd").innerText
var unuEffect;var craft = "Craftable";var fixedName;
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
		).textContent.split("★ ")[1].split("Strange")[0].split("Unusual")[0].trim();
} if (itemName.includes("Strange") && quality != "Strange") {
	quality = "Strange " + quality;
} if (itemName.includes("Strange Part")) {
	quality = "Unique";
	fixedName = "Strange " + fixedName;
}

var effects = {
  "Particle 1": 1,
  "Flying Bits": 2,
  "Nemesis Burst": 3,
  "Community Sparkle": 4,
  "Holy Glow": 5,
  "Green Confetti": 6,
  "Purple Confetti": 7,
  "Haunted Ghosts": 8,
  "Green Energy": 9,
  "Purple Energy": 10,
  "Circling TF Logo": 11,
  "Massed Flies": 12,
  "Burning Flames": 13,
  "Scorching Flames": 14,
  "Searing Plasma": 15,
  "Vivid Plasma": 16,
  "Sunbeams": 17,
  "Circling Peace Sign": 18,
  "Circling Heart": 19,
  "Map Stamps": 20,
  "Genteel Smoke": 28,
  "Stormy Storm": 29,
  "Blizzardy Storm": 30,
  "Nuts n' Bolts": 31,
  "Orbiting Planets": 32,
  "Orbiting Fire": 33,
  "Bubbling": 34,
  "Smoking": 35,
  "Steaming": 36,
  "Flaming Lantern": 37,
  "Cloudy Moon": 38,
  "Cauldron Bubbles": 39,
  "Eerie Orbiting Fire": 40,
  "Knifestorm": 43,
  "Misty Skull": 44,
  "Harvest Moon": 45,
  "It's A Secret To Everybody": 46,
  "Stormy 13th Hour": 47,
  "Attrib_Particle55": 55,
  "Kill-a-Watt": 56,
  "Terror-Watt": 57,
  "Cloud 9": 58,
  "Aces High": 59,
  "Dead Presidents": 60,
  "Miami Nights": 61,
  "Disco Beat Down": 62,
  "Phosphorous": 63,
  "Sulphurous": 64,
  "Memory Leak": 65,
  "Overclocked": 66,
  "Electrostatic": 67,
  "Power Surge": 68,
  "Anti-Freeze": 69,
  "Time Warp": 70,
  "Green Black Hole": 71,
  "Roboactive": 72,
  "Arcana": 73,
  "Spellbound": 74,
  "Chiroptera Venenata": 75,
  "Poisoned Shadows": 76,
  "Something Burning This Way Comes": 77,
  "Hellfire": 78,
  "Darkblaze": 79,
  "Demonflame": 80,
  "Bonzo The All-Gnawing": 81,
  "Amaranthine": 82,
  "Stare From Beyond": 83,
  "The Ooze": 84,
  "Ghastly Ghosts Jr": 85,
  "Haunted Phantasm Jr": 86,
  "Frostbite": 87,
  "Molten Mallard": 88,
  "Morning Glory": 89,
  "Death at Dusk": 90,
  "Abduction": 91,
  "Atomic": 92,
  "Subatomic": 93,
  "Electric Hat Protector": 94,
  "Magnetic Hat Protector": 95,
  "Voltaic Hat Protector": 96,
  "Galactic Codex": 97,
  "Ancient Codex": 98,
  "Nebula": 99,
  "Death by Disco": 100,
  "It's a mystery to everyone": 101,
  "It's a puzzle to me": 102,
  "Ether Trail": 103,
  "Nether Trail": 104,
  "Ancient Eldritch": 105,
  "Eldritch Flame": 106,
  "Neutron Star": 107,
  "Tesla Coil": 108,
  "Starstorm Insomnia": 109,
  "Starstorm Slumber": 110,
  "Brain Drain": 111,
  "Open Mind": 112,
  "Head of Steam": 113,
  "Galactic Gateway": 114,
  "The Eldritch Opening": 115,
  "The Dark Doorway": 116,
  "Ring of Fire": 117,
  "Vicious Circle": 118,
  "White Lightning": 119,
  "Omniscient Orb": 120,
  "Clairvoyance": 121,
  "Fifth Dimension": 122,
  "Vicious Vortex": 123,
  "Menacing Miasma": 124,
  "Abyssal Aura": 125,
  "Wicked Wood": 126,
  "Ghastly Grove": 127,
  "Mystical Medley": 128,
  "Ethereal Essence": 129,
  "Twisted Radiance": 130,
  "Violet Vortex": 131,
  "Verdant Vortex": 132,
  "Valiant Vortex": 133,
  "Sparkling Lights": 134,
  "Frozen Icefall": 135,
  "Fragmented Gluons": 136,
  "Fragmented Quarks": 137,
  "Fragmented Photons": 138,
  "Defragmenting Reality": 139,
  "Fragmenting Reality": 141,
  "Refragmenting Reality": 142,
  "Snowfallen": 143,
  "Snowblinded": 144,
  "Pyroland Daydream": 145,
  "Verdatica": 147,
  "Aromatica": 148,
  "Chromatica": 149,
  "Prismatica": 150,
  "Bee Swarm": 151,
  "Frisky Fireflies": 152,
  "Smoldering Spirits": 153,
  "Wandering Wisps": 154,
  "Kaleidoscope": 155,
  "Green Giggler": 156,
  "Laugh-O-Lantern": 157,
  "Plum Prankster": 158,
  "Pyroland Nightmare": 159,
  "Gravelly Ghoul": 160,
  "Vexed Volcanics": 161,
  "Gourdian Angel": 162,
  "Pumpkin Party": 163,
  "Frozen Fractals": 164,
  "Lavender Landfall": 165,
  "Special Snowfall": 166,
  "Divine Desire": 167,
  "Distant Dream": 168,
  "Violent Wintertide": 169,
  "Blighted Snowstorm": 170,
  "Pale Nimbus": 171,
  "Genus Plasmos": 172,
  "Serenus Lumen": 173,
  "Ventum Maris": 174,
  "Mirthful Mistletoe": 175,
  "Hot": 701,
  "Isotope": 702,
  "Cool": 703,
  "Energy Orb": 704,
  "Showstopper": 3001,
  "Holy Grail": 3003,
  "'72": 3004,
  "Fountain of Delight": 3005,
  "Screaming Tiger": 3006,
  "Skill Gotten Gains": 3007,
  "Midnight Whirlwind": 3008,
  "Silver Cyclone": 3009,
  "Mega Strike": 3010,
  "Haunted Phantasm": 3011,
  "Ghastly Ghosts": 3012,
  "Hellish Inferno": 3013,
  "Spectral Swirl": 3014,
  "Infernal Flames": 3015,
  "Infernal Smoke": 3016,
  "Acidic Bubbles of Envy": 3017,
  "Flammable Bubbles of Attraction": 3018,
  "Poisonous Bubbles of Regret": 3019,
  "Roaring Rockets": 3020,
  "Spooky Night": 3021,
  "Ominous Night": 3022,
  "Bewitched": 3023,
  "Accursed": 3024,
  "Enchanted": 3025,
  "Static Mist": 3026,
  "Eerie Lightning": 3027,
  "Terrifying Thunder": 3028,
  "Jarate Shock": 3029,
  "Nether Void": 3030,
  "Good-Hearted Goodies": 3031,
  "Wintery Wisp": 3032,
  "Arctic Aurora": 3033,
  "Winter Spirit": 3034,
  "Festive Spirit": 3035,
  "Magical Spirit": 3036,
  "Spectral Escort": 3037,
  "Astral Presence": 3038,
  "Arcane Assistance": 3039,
  "Emerald Allurement": 3041,
  "Pyrophoric Personality": 3042,
  "Spellbound Aspect": 3043,
  "Static Shock": 3044,
  "Veno Shock": 3045,
  "Toxic Terrors": 3046,
  "Arachnid Assault": 3047,
  "Creepy Crawlies": 3048,
  "Delightful Star": 3049,
  "Frosted Star": 3050,
  "Apotheosis": 3051,
  "Ascension": 3052,
  "Reindoonicorn Rancher": 3053,
  "Twinkling Lights": 3055,
  "Shimmering Lights": 3056
}

var qualityID = "";

console.log("--- logging ---");
console.log("Name: ", fixedName);
console.log("Quality: ", quality);
console.log("Effect: ", unuEffect);
console.log("-end-");

function getEffectID(q) {
	if (!quality.includes("Unusual")) {return}
	qualityID = effects[q];
}

function openURL(name, qName, qID) {
	window.open(`https://backpack.tf/stats/${qName}/${name}/Tradable/${craft}/${qID}`, "_blank");
}

function begin() {
	var div = document.getElementById("page-sidebar");
	var btnStats = document.createElement("button");div.prepend(btnStats);
	btnStats.style = `position:absolute;margin-top:-25px;margin-left:70px;
	color:white;background-color:#42445b;border:none;border-radius:5px`;
	btnStats.innerHTML = "Backpack.tf Stats";
	btnStats.onclick = () => {openURL("bptf", fixedName, quality, qualityID)}

	if (window.location.href.split("/")[5]) {
		let link = window.location.href.replace(window.location.href.split("/")[5], "");
		btnStats.style.marginLeft = "30px";
		var btnSPage = document.createElement("button");
		div.insertBefore(btnSPage, btnStats.nextSibling);
		btnSPage.style = `position:absolute;margin-top:-25px;margin-left:170px;
		color:white;background-color:#42445b;border:none;border-radius:5px`;
		btnSPage.innerHTML = "Store Page";
		btnSPage.onclick = () => {openURL("store_page", link)}
	}
}

setTimeout(() => {
	getEffectID(unuEffect);
	begin();
}, 500); // Change this to "1000" or "2500" if the page loads slowly.
