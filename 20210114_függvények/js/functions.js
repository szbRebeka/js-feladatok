// Írj egy függvényt, ami ha meghívják, kiírja a konzolra "Igenis, édes Gazdám!"
function goodFunction () {
    console.log("Igenis, édes Gazdám!")
}
goodFunction();

// Írj egy függvényt, ami egy nevet kap argumentumként, és köszönti az illetőt: "Legyen szép napod, XY!"

function politeFunction (name) {
    console.log("Legyen szép napod, " + name);
}
let yourName = window.prompt("hogy hívnak?");

politeFunction(yourName);

/*
Írj egy függvényt, ami kiszámolja, hogy egy kutya hány éves volna emberként!
A függvény egy paramétert kap, a kutya életévét, átváltja emberévekbe úgy, hogy megszorozza 7-tel.
A kapott eredményt kiírja a konzolra: "Egy X éves kutya olyan idős, mint egy Y éves ember."
*/
function calculateDogYears (dogAge) {
    let humanAge = (dogAge * 7)
    console.log("Egy " + dogAge + " " + " éves kutya olyan idős, mint egy " + humanAge + " éves ember.");
}
calculateDogYears(5);

/*
Emlékszel még a jóslatot adó feladatra? Készítsd el egy újabb verzióját, már függvény segítségével. A függvény kapja meg a szükséges adatokat argumentumok formájában.
Ha a függvényt meghívjuk, akkor a következőt kell kiírnia a konzolra: "Te egy [foglalkozás] leszel [város]ban/ben, és [partner neve] lesz a párod, születni fog [gyermekek száma] gyereketek."
*/

function getFortune (profession, city, partner, numberOfChildren) {

    console.log("Te egy " + profession + " leszel " + city + "-ben, és " + partner + " neve lesz a párod, születni fog " + numberOfChildren + " gyereketek.")
}
getFortune ("munkanélküli", "budapest", "beni", "21")

/*
A Cocos és Nazca tektonikai lemezek a Csendes-óceán fenekén a leggyorsabban mozgó lemezek: minden hónapban 0.8 cm távolodnak egymástól.
Írj egy függvényt, ami kiszámolja két adott év között hány centiméter távolodott egymástól a két lemez! A függvénynek két paramétere legyen: a kezdő és záró év.
A függvény meghívásakor a következőt írja ki a konzolra: "A Cocos és Nazca lemezek X és Y között Z centimétert távolodtak."
*/

function calcDistance (a, b) {
    let sum = (b - a) + (12 * 0.8)
    console.log("A Cocos és Nazca lemezek " +  a + "és " + b + "között " + sum + " centimétert távolodtak.")
}
calcDistance("2034", "2053")

/*
Írj két függvényt, amelyek segítenek kiszámolni egy termék bruttó - nettó árát.
Az egyik függvény paraméterként kapja meg a nettó árat, és számolja ki a bruttót. Az eredményt írja ki a konzolra.
A másik függvény paraméterként a bruttó árat kapja meg, és számolja ki a nettó árat. Az eredményt írja ki a konzolra.
Magyarországon az ÁFA mértéke 27%.
*/

function netCost (cost) {
    let afa = (cost * 0.27) + cost
    console.log(afa)
}
 netCost(180000)

//itt valami nem oké
function grossCost (cost) {
    let afa = cost / 1.27
    console.log(afa)
}
grossCost(12000)

/*
Alakítsd át az előző feladat nettóból bruttót számoló függvényét úgy, hogy az eredményt ne a konzolra írja ki, hanem a kiszámított bruttó árat adja vissza.
Írj egy új függvényt, amely két paraméterrel rendelkezik: terméknév és nettó ár.
A függvény hívja meg az átalakított bruttó kalkulátort, és az eredményt egy változóban tárolja.
A konzolra pedig írja ki: "Az X termék nettó ára Y Ft, de áfával együtt Z Ft-ot fizetünk érte ."
*/


// nincs kész



/*
Alakítsd át a változóknál már megoldott  feladatot, ez alkalommal azonban használj függényt a megoldáshoz!
*/



//kör kerülte no1-ből


function circleC () {
    let circumference = 2* no1*3.14
    console.log("a kör kerülete " + circumference)
}
let no1 = window.prompt("kör sugara a kerülethez:");
circleC()

//kör területe no2-ből let area =no2**2*3.14



/*
Alakítsd át a változóknál már megoldott  feladatot, ez alkalommal azonban használj függényt a megoldáshoz!
*/

let celsiusAdd = Number.parseInt(window.prompt("Hőmérséklet megadása Celsiusban:"));
let fahrenheit = celsiusAdd * 1.8000 + 32.00;
console.log(celsiusAdd+"°C" + "=" + fahrenheit+"°F");


let fahrenheitAdd = Number.parseInt(window.prompt("Hőmérséklet megadása Fahrenheitben:"));
let celsius = (fahrenheitAdd - 32.00) / 1.8000;
console.log(fahrenheitAdd+"°F" + "=" +  celsius+"°C");



