//1
let people = ["Greg", "Mary", "Devon", "James"]
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
}*/
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