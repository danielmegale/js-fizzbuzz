console.log('JS OK');
//prendo un elemento dal DOM
const number = document.getElementById('number');
//creao una variabile da inserire nel DOM
let mod='';
//creo un ciclo che ripere i numeri da 1 a 100
for(let i = 1; i <= 100; i++){
    let word=i;
    let color='bg'
    if(!(i % 3) && !(i % 5)){//i numeri multipli di 3 e 5 si trasformano in fizzbuzz
        word='FizzBuzz';
        color='bg-fizzbuzz'

    }else if (!(i % 3)){//i numeri multipli di 3 
        word='Fizz';
        color='bg-fizz'
    }
    else if(!(i % 5)){//i numeri multipli di 5 
        word='Buzz';
        color='bg-buzz'
    }
    console.log(word)
    mod += `<li class="${color}">${word}</li>`;
}
//stampo le variabili nel DOM
mod = `<ul class="list"> ${mod} </ul>`;
number.innerHTML= mod;