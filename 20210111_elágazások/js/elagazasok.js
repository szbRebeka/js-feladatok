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
let a = Number.parseInt(window.prompt("Adj meg egy tetszőleges számot!"));
let b = Number.parseInt(window.prompt("Adj meg egy tetszőleges számot!"));
let c = null;
let operator = window.prompt("Add meg milyen müveletet végezzünk el a két számon (+,-,/,*)? ");
if (operator == "+") {
    c = a + b;
    console.log("A két szám összege: " + c);
} else if (operator == "-") {
    c = a - b;
    console.log("A két szám különbsége: " + c);
} else if (operator == "/") {
    c = a / b;
    console.log("A két szám hányadosa: " + c);
} else if (operator == "*") {
    c = a * b;
    console.log("A két szám szorzata: " + c);
} else {
    c = "Hibás műveletet adtál meg!";
    console.log(c);
}




document.getElementById("result").innerHTML

