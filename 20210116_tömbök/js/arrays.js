//1
/*let people = ["Greg", "Mary", "Devon", "James"]
for (let i = 0; i < people.length; i++) {
    console.log(people [i]);
}
//2
people.shift()
console.log("2", people);
//3
people.pop()
console.log("3", people)
//4
people.unshift("Matt")
console.log("4", people)
//5
people.push("Rebeka")
console.log("5", people)
/*
//6
for ( i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
}
//7
let slice = people.slice(2,4);
console.log("7", slice);
//8
let mary = people.indexOf("Mary");
console.log("8", mary);
//9
let foo = people.indexOf("Foo");
console.log("9",foo);
//10
arr = ["Greg", "Mary", "Devon", "James"];
console.log(arr)
let removeADD = arr.splice(2, 1, "Elisabeth", "Artie");
console.log("10", removeADD);
console.log("10", arr)
*/
//TÖMBÖK KÖRBEJÁRÁSA

//1. írj egy függvényt "searchArray" néven, ami megkapja egyik paraméterként a keresendő értéket, másik paraméterként a tömböt, és megkeresi a paraméterként átadott értéket a tömbben!
// Találat esetén a fv. visszaadja az érték indexét, ha nincs találat esetén -1-et ad vissza!

myArray = [2,5,1,3,7,9,8,6,4,12]

function searchArray(arr, obj) {
    arr = myArray
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === obj) {
            console.log([i]);
        } else {
            console.log(-1)
        }
    }
}
searchArray([myArray], 43);

//.írj egy függvényt "doubleArray" néven, ami megkap paraméterként egy tömböt és a tömb minden szám elemének értékét megnöveli a kétszeresére és kiírja a konzolra!
//  - Nem szám esetén átugrik a következő iterációra!
//  - A végén visszatér a módosított tömbbel!

function doubleArray(arr) {
    let doubled = []
    for (let i = 0; i < arr.length; i++) {
        let dubMovement = arr[i] * 2;
        doubled.push(dubMovement)
        }
    return doubled
}
console.log(doubleArray(myArray))

/*írj egy függvényt, ami megkap paraméterként egy tömböt és kiszámolja a tömb elemeinek
összegét (függvény neve sum),
átlagát (függvény legyen average),
minimumát (név: min)
maximumát (név: max),
és a végén visszatéríti a kiszámolt értékét*/

function calculator(arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
       sum = sum + arr[i];
   }
   return sum;
}
console.log(calculator(myArray))