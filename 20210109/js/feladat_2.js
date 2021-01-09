let no1=window.prompt("írj egy számot:");
let no2=window.prompt("írj még egy számot:");
no1 = Number.parseInt(no1)
no2 = Number.parseInt(no2)
console.log(no1,no2)
//összeadás
console.log(no1+no2)
//szorzás
console.log(no1*no2)
//négyzetre emelés
console.log(no1**no2)
console.log(no2**no1)
//kör kerülte no1-ből
let circumference = 2*no1*3.14
console.log(circumference)
//kör területe no2-ből
let area =no2**2*3.14
//pitagorasz tétele alapján kiszámolni no3-t
let no3 = no1**2+no2**2
console.log(no3)

