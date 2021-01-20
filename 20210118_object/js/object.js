/* KÉSZ
Property-k kilistázása
Írj egy függvényt, ami paraméterként egy objectet kap és kilistázza egy tömbbe a property-jeit, majd a tömbbel tér vissza.

Input:
{ alma: 1, körte: 2, saláta: 3, paradicsom: 4 }
Output:
["alma", "körte", "saláta", "paradicsom"]

*/
function foodList () {
    let foods = {
        alma: 1,
        korte: 2,
        salata: 3,
        paradicsom: 4
    };
    console.log(Object.getOwnPropertyNames(foods))
}
foodList()


/* KÉSZ
Értékek listázása
Írj egy függvényt, amely paraméterként egy objectet kap, és egy tömbbe átmásolja minden property-jének értékét, visszatérési értéke pedig a tömb.
Input:
{ Lannister: "oroszlán", Stark: "farkas", Targaryen: "sárkány", Baratheon: "szarvas" }
Output
["oroszlán", "farkas", "sárkány", "szarvas"]
*/

function gameOfThrones() {
    let houses = {
        Lannister: "oroszlán",
        Stark: "farkas",
        Targaryen: "sárkány",
        Baratheon: "szarvas"
    };
    console.log(Object.values(houses))
}
gameOfThrones()

/* KÉSZ
Object hossza
Írj egy függvényt, ami paraméterként egy object-et kap, és visszatérési értéke az object hossza.
Input:
{a: 1, b: 2, c: 3}
Output
3
*/

let threePiece = {
    a: 1,
    b: 2,
    c: 3,
    };
function getLengthOfObject () {
    console.log(Object.keys(threePiece).length)
}
getLengthOfObject(threePiece)

/* CSAK A BOOLEANT ÍRjA KI,
4.
Property értékének kiíratása
Írj egy függvényt, amely paraméterként megkapja az library tömböt és kiírja a konzolra a minden könyv readingStatus értékét.
*/
let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

function status() {
  for (let i = 0; i < library.length; i++) {
            /*console.log(library[i]) //object-ek kilistázása külön*/
  console.log(library[i].readingStatus) // 2 true értéket egy sorba listázza, key nem jelenik meg a konzolon
   }
}
status()

/* OUTPUT NEM OK
5.
Átalakítás tömbbé
Írj egy függvényt, ami egy objectet kap paraméterként, és egy tömböt ad vissza, amelyben az eredeti object key:value párjai egy újabb tömb elemei.
    Input
    {
    alma: "gyümölcs",
    répa: "zöldség"
    }
    Output
    [["alma", "gyümölcs"], ["répa", "banán"]]
    */

let food = {
    alma: "gyümölcs",
    repa: "zöldség"
}
function transformObjToArray () {
    // zöldség lecserélése banánra
    food.repa = `banán`;
    let newArray = Object.entries(food);
    console.log(newArray);
}
transformObjToArray()

/* 6. Létezik-e?    KÉSZ!
Írj egy függvényt, amely két paramétert kap: egy objectet és egy sztringet. A függvény pedig ellenőrzi, hogy az object rendelkezik-e a sztringgel azonos property-vel. Visszatérési értéke egy boolean (true/false).
*/

function isThisReal(obj) {
    if (obj.includes(` `)) {
        console.log(true)
    } else {
        console.log(false)
    }
}
isThisReal(`is that a string?`)

/*Létezik-e?++
Írj egy függvényt, amelynek két paramétere van: egy object és bármilyen primitív adattípus. Az függvény ellenőrzni, hogy az object bármely property-je rendelkezik a megadott értékkel vagy sem. Visszatérési értéke egy boolean.
*/

/* törlés property alapján
Írj egy függvényt, ami két paramétert kap: egy objectet, és egy sztringet. A függvény pedig törli a sztringgel egyező property-t az objectből, majd visszatér az új object-tel.
Input
{1: "a", 2: "b", 3: "c"}, "2"
Output
{1: "a", 3: "c"}
function deleteByProperty (obj, prop) {
    // ide írhatod a kódodat
}
*/

