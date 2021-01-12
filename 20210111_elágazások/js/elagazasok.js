/*Írj egy programot, ami bekér be egy számot a felhasználótót  window.prompt-tal.
Ha a bekért szám nagyobb 0-nál, akkor írja ki konzolra, hogy “a szám pozitív”
ha a szám kisebb 0-nál írja ki, hogy “a szám negatív“”
ha egyenlő 0-val, akkor írja ki: “nulla”*/
/*let num = window.prompt("írj be egy számot!")

if(num > 0) {
    console.log("ez a szám pozitív");
} else if(num < 0) {
    console.log("ez a szám negatív");
} else if(num === 0); {
    console.log("nulla")
}*/
/*
Írj egy programot, ami bekér be két számot a és b változóba és eldönti, hogy melyik nagyobb esetleg egyenlő a kettő. Ha a változó nagyobb, írja ki, pl:
   “a=2  nagyobb, mint b=1” ,
és fordítva”. Egyenlőség esetén írja ki:
  “a=5 és b=5 egyenlő” */
/*let number1 = Number.parseInt(window.prompt("írj be egy számot!"));
let number2 = Number.parseInt (window.prompt("írj be egy számot!"));

if (number1 > number2) {
    console.log(number1+" "+"nagyobb, mint"+" "+number2)
} else if (number1 < number2) {
    console.log(number2+" "+"nagyobb, mint"+" "+number2)
} else  if (number1 === number2) {
    console.log(number2+" "+"és"+" "+number2+" "+"egyenlő")
} */
/*Írj egy programot, ami bekér két számot. majd a harmadik bekérésnél megadott matematikai műveletet (+, -, /, * ) elvégzi és kiiratja a konzolra és a html dokumentum “result” id-val rendelkező  span elemébe egyaránt!
Megjegyzés: a feladatot “if” ”else if” “else”  utasításokkal old meg*/
/*let num1 = Number.parseInt(window.prompt("Adj meg egy tetszőleges számot!"));
let num2 = Number.parseInt(window.prompt("Adj meg egy tetszőleges számot!"));
let num3 = null;
let operator = window.prompt("Add meg milyen müveletet végezzünk el a két számon (+,-,/,*)? ");

if (operator == "+") {
    num3 = num1 + num2;
    console.log("A két szám összege: " + num3);
} else if (operator == "-") {
    num3 = num1 - num2;
    console.log("A két szám különbsége: " + num3);
} else if (operator == "/") {
    num3 = num1 / num2;
    console.log("A két szám hányadosa: " + num3);
} else if (operator == "*") {
    num3 = num1 * num2;
    console.log("A két szám szorzata: " + num3);
} else {
    num3 = "Hibás műveletet adtál meg!";
    console.log(num3);
}
document.getElementById("result").innerHTML = num3*/

//Ird meg a  3. feladat “switch” elágazásos verzióját
/*let num1 = Number.parseInt(window.prompt("Adj meg egy tetszőleges számot!"));
let num2 = Number.parseInt(window.prompt("Adj meg egy tetszőleges számot!"));
let num3 = null;
let operator = window.prompt("Add meg milyen müveletet végezzünk el a két számon (+,-,/,*)? ");

switch (operator) {
    case "+":
        num3 = num1 + num2;
        console.log("A két szám összege: " + num3);
        break
    case "-":
        num3 = num1 - num2;
        console.log("A két szám különbsége: " + num3);
        break
    case "/":
        num3 = num1 / num2;
        console.log("A két szám hányadosa: " + num3);
        break
    case "*":
        num3 = num1 * num2;
        console.log("A két szám szorzata: " + num3);
        break;
}

document.getElementById("result").innerHTML = num3; */

/*Írj egy programot, amit a beírt pontszám alapján kiszámolja az megérdemelt osztálzatot!
- A dolgozatok maximális pontszáma 55pont (100%).

Az osztályzatok számítása:
- 20% alatt → 1
- 20% és 40% → 2
- 40% és 60% → 3
- 60% és 80% → 4
- 80% fölött → 5

Egész számra kerekítésnél
Math.round(5.233);  //eredmény 5 */

let score = Number.parseInt(window.prompt("A dolgozat pontszáma: "));
let pct = (score / 55) * 100;
console.log("Százalékos eredmény:" + " " + Math.round(pct)+"%")

if (pct < 20) {
    console.log("Érdemjegy: " + 1);
} else if (20 < pct && 40 > pct ) {
    console.log("Érdemjegy: " + 2);
} else if (40 < pct && 60 > pct) {
    console.log("Érdemjegy: " + 3);
} else if (60 < pct && 80 > pct) {
    console.log("Érdemjegy: " + 4);
} else if (pct < 80 && 100 > pct)  {
    console.log("Érdemjegy: 5")
    //55 pontnál nem jelenik meg az érdemjegy

}




