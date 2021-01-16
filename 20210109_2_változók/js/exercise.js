/*let myVar=3*5;
// legyen a változó értéke egy number
myVar = Number.parseInt(myVar);
console.log(myVar);
// legyen a változó értéke egy sztring
myVar = "3*5";
console.log(myVar);*/
// legyen a változó értéke egy boolean

///* Juss el a "jég" szótól a "már"-ig úgy, hogy minden lépésben csak egy   betűt változtatsz meg! Minden lépésben adj új értéket a változónak és írasd ki a konzolra!
//
/*let wordgame = "jég";
console.log(wordgame);
let wordgame_2 = "még";
console.log(wordgame_2)
let wordgame_3 = "mág";
console.log(wordgame_3)
let wordgame_4 = "már";
console.log(wordgame_4)*/

// Írj egy programot, ami boldog születésnapot kíván valakinek! A nevet mentsd el egy változóba és irasd ki az üzenetet a konzolra!
/*function myFunction() {
    alert("Boldog szülinapot!");
}
let bday = alert("Boldog szülinapot!")
console.log(bday) */

// Miért fizetnél egy Jósnőnek, ha te magad is írhatsz egy programot, ami megmondja a jövőt?
// Tárold az alábbi adatokat változókban: gyermekek száma, partner neve, város, foglalkozás
// Írasd a konzolra az alábbi mondatot: "Te egy [foglalkozás] leszel [város]ban/ben, és [partner neve] lesz a párod, születni fog [gyermekek száma] gyereketek."
/*let kids=window.prompt("Hány gyereked van?");
let partner=window.prompt("Mi a partnered neve?");
let city=window.prompt("Melyik városban laksz?");
let job=window.prompt("Mi a foglalkozásod?");
let result= "Te egy " + job + " " + "leszel" + " " + city + "-ban/ben, és" + " " + partner + " " + "lesz a párod, születni fog" + " " + kids + " " + "gyereketek.";
console.log(result);
alert(result); */

/* Szeretnéd tudni, hány éves leszel egy bizonyos évben? Hozz létre egy kalkulátort és megtudod!
Tárold az alábbi adatokat egy-egy változóban: születési éved, egy jövőbeli év.
Számold ki a két lehetséges életkorodat a jövőbeli évben, pl. Ha 1988-ban születtél, 2026-ra vagy kíváncsi, akkor ebben az évben vagy 37 vagy 38 éves leszel, attól függően, milyen hónapot írunk.
Írasd ki a végeredményt a konzolra: "X. évben vagy Y vagy Z éves leszel."*/
/*let bYear = Number.parseInt(window.prompt("Melyik évben születtél?"));
let fYear = Number.parseInt(window.prompt("Írj be egy évszámot, és tudd meg hány éves leszel akkor!"));
let futureAge = fYear - bYear;
let futurAge_2 = futureAge + 1
console.log(fYear+"-ben"+ " " + futureAge + " " + "vagy" + " " + futurAge_2 + " " + "éves leszel!") */

/*
Tárold az aktuális életkorodat egy változóban.
Tárold a várható maximális életkorodat egy változóban.
Tárold egy változóban, hogy hozzávetőlegesen hány tábla csokit eszel meg egy hónapban.
Egy változóban számold ki, várhatóan mennyi csokit fogsz megenni életed hátralévő részében.
Az eredményt írasd ki a konzolra: "X tábla csokira lesz szükséged Y éves korodig."
*/
/*let myAge = Number.parseInt(window.prompt("Hány éves vagy?"));
let death =  Number.parseInt(window.prompt("Várható életkorod:"));
let chocolate =  Number.parseInt(window.prompt("Hány tábla csokit eszel meg egy hónapban?"));
let restOf = (death - myAge)
let chocConsumption = (chocolate * 12) * restOf;

console.log(chocConsumption + " " + "tábla csokira lesz szükséged" + " " + restOf + " " + "éves" + " " + "korodig"); */


/*
Írj egy programot, ami képes átváltani Celsius és Fahrenheit között.
Tárold a celsius értéket egy változóban.
Számold át Fahrenheitbe, és írasd ki a konzolra: "X °C  = Y °F"
Tárold a fahrenheit értéket egy változóban.
Váltsd át Celsiusba, és írasd ki a konzolra: "X °F = Y °C"
*/

let celsiusAdd = Number.parseInt(window.prompt("Hőmérséklet megadása Celsiusban:"));
let fahrenheit = celsiusAdd * 1.8000 + 32.00;
console.log(celsiusAdd+"°C" + "=" + fahrenheit+"°F");


let fahrenheitAdd = Number.parseInt(window.prompt("Hőmérséklet megadása Fahrenheitben:"));
let celsius = (fahrenheitAdd - 32.00) / 1.8000;
console.log(fahrenheitAdd+"°F" + "=" +  celsius+"°C");
