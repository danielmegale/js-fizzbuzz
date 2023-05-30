console.log('JS OK');
//prendo un elemento dal DOM
const number = document.getElementById('number');
//creao una variabile da inserire nel DOM
let mod3='';
//creo un ciclo che ripere i numeri da 1 a 100
for(let i = 1; i <= 100; i++){
    console.log(i);
    let fizz=''
    if(!(i % 3)){
        console.log(fizz)
        fizz='Fizz'
    }
    mod3 += `<li>${i}</li>`;
}
mod3 = `<ul> ${mod3} </ul>`;
number.innerHTML= mod3;