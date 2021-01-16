//MEGSZÁMLÁLÁS TÉTELE
/*
function counting(arr,keresendo) {
    let db = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === keresendo) {
            db += 1 // db = db + 1
        }
    }
    return db;
}
console.log(counting([1,23,4, 4, 5,6,7], 4))
//MAXIMUMKIVÁLASZTÁS

function maxkiv (arr) {
    let maxIndex = 0;
    let maxValue = arr[1]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) { //minimum kiválasztásnál csak az előjelen kell fordítani
            maxValue = arr[i];
            maxIndex = i;
        }
    }
    return {
        maxIndex,
        maxValue
    };
}
console.log(maxkiv([1,23,4,5,66,7,6,9])) */

//CSERÉS RENDEZÉS



//SORBARENDEZÉS

function bubble_Sort(a)
{
    let swapp;
    let n = a.length-1;
    let x=a;
    do {
        swapp = false;
        for (let i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
                let temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
                swapp = true;
            }
        }
        n--;
    } while (swapp);
    return x;
}
console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));


