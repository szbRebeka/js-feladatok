/*1. Írj egy ciklust,
    A) ami kiírja a 1-től 20-ig az egész számokat!
    B) ami kiírja 20-tól 1-ig a számokat!
    c) ami kiírja 100-ig a páros számokat
d) ami kiírja 100-ig a páratlan számokat! */

/*for (let numbers = 1; numbers < 21; numbers++) {
    console.log(numbers);
}*/

/*for (let numbers = 20; numbers > 0; numbers -= 1 ) {
    console.log(numbers);
}*/

//páratlan számok
for (let number = 1; number <= 100; number++) {
    if (number % 2) {
        console.log(number);
    }
}
//páros számok
for (let num = 1; num <= 100; num++) {
    if (num % 2 === 0) {
        console.log(num)
    }
}



/*2. Írj egy ciklust,
    Ami kiírja 100-ig a prím számokat (prím szám: csak 1-el és önmagával osztható, pl,: 1,2, 5.).*/





//3. Írj egy rpgramot ,ami összeadja 1-tól 10-ig a számokat! (pl. result = 1+2+3+...+10)
/*4. Írj egy programot, ami kiírja a 10X10-es szorzótáblát.
1x1 = 1;
1x2 = 2;
.
.
.
2x1 = 2;
.
.
10x10 = 100*/