function osszegzes_osszeadasa (lista) {
    let s = 0;
    for (let i=0; i<lista.length; i++) {
        s+=lista[i]
    }
    return s;
}
console.log(osszegzes_osszeadasa([2,3,4,5]));
console.log(5 + 6);

/*
function osszegzes_szorzassal (lista2) {
    let s = 0;
    for (let i=0; i<lista2.length; i++) {
        s*=lista2[i]
    }
    return s;
}
console.log(osszegzes_osszeadasa([2,3,4,5]));

function osszead (num1, num2) {
    return num1 + num2;

}
console.log(osszegzes([3, 4, 5], osszead))
console.log(osszegzes([3,4,5], function(num1, num2) {return num1 * num2;}));

/*
Megszámlálás

function megszamlalas(lista) {
    let c=0;
    for(let i = 0; i<lista.length; i++){
        if(t(lista[i])) {
            c++;
        }
    }
    return c;
}

function oszthato_e_kettovel(num) {
    return num%2==0;
}
console.log(megszamlalas([1,2,3,4,5,6], oszthato_e_kettovel))

/* Macimum kiválasztás 
*/
/*
function maxkiv(lista5) {
    let max_ertek = lista[0]; 
    for(let h = 0; h<lista.length; h++) {
        if(lista5[h] > max_ertek) {
            max_ertek = lista5[h];
        }
    }

}
console.log(maxkiv([1,2,3,4,5,6]))
*/