let shittyList = [
	"Mjölk",
	"Heligt vatten",
	"O'boy",
	"Hallonsoda",
	"Julmust",
	"Påskmust",
	"Äppeljuice",
	"Äggvitor",
	"Festis",
	"Citronvatten",
	"Ginger Ale",
	"Tonic",
	"Coca-Cola",
	"Coca-Cola Zero",
	"Pepsi",
	"Pepsi Max",
	"Loka Crush Päron",
	"7-UP",
	"Trocadero",
	"Cuba Cola",
	"Fanta",
	"Fanta Exotic",
	"Zingo",
	"Champis",
	"Fruktsoda",
	"Sockerdricka",
	"Svagdricka",
	"Grönt te",
	"Gult te",
	"Iste citron",
	"Iste mango",
	"Iste persika",
	"Kaffe",
	"Power King",
	"Red Bull",
	"Ginger Beer",
	"Tranbärsjuice",
	"Glockengold",
	"Lingondricka",
	"Black Orange",
	"Kokosvatten",
	"Lättöl",
	"Folköl",
	"Starköl",
	"Blåbärssoppa",
];
let shittierList = [
	"Gammeldansk",
	"Jägermeister",
	"T-Röd",
	"Minttu",
	"Tequila",
	"Hembränt",
	"Snaps",
	"Whiskey",
	"Koskenkorva",
	"Galliano",
	"Gin",
	"Vodka",
	"Rom",
	"Konjak",
	"Rödvin",
	"Rosévin",
	"Vitt vin",
	"Fireball",
	"Campari",
	"Mezcal",
	"Champagne",
	"Glögg",
	"Fernet",
	"Akvavit",
	"Kir",
	"Vermouth",
	"Absolut Citron",
	"Absolut Lime",
	"Baileys",
	"Punsch",
];
var dom = document.getElementById("groggId");
let str = "";
let tmpstr = "";
let random;
let i = 0;

function generate() {
	setTimeout(function () {
		random = Math.floor(Math.random() * shittyList.length);
		str = shittyList[random];
		document.getElementById("groggId").innerHTML = str;
		console.log(str);
		i++;
		if (i < 30) {
			generate();
		} else {
			i = 0;
			document.getElementById("groggId").innerHTML += " + ";
			tmpstr = document.getElementById("groggId").innerHTML;
			generate2();
		}
	}, 10);
}

function generate2() {
	setTimeout(function () {
		document.getElementById("groggId").innerHTML = tmpstr;
		random = Math.floor(Math.random() * shittierList.length);
		str = shittierList[random];
		document.getElementById("groggId").innerHTML += str;
		console.log(str);
		i++;
		if (i < 30) {
			generate2();
		} else {
			i = 0;
		}
	}, 10);
}
