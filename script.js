console.log('JS OK');
const number = document.getElementById('number');
let pippo='';
for(let i = 1; i <= 100; i++){
    console.log(i);
    pippo += `<li>${i}</li>`;
    if(i % 3){

    }
}
pippo = `<ul> ${pippo} </ul>`;
number.innerHTML= pippo;