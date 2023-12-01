//funzione che genera numeri casuali e ritorna solo se non è già presente nell'array
function generateNumber(array_number){
    let number;
    let check = false;
//controllo se numero nun è presente in array
    while(!check){
        number = Math.floor(Math.random() * 100 + 1);
        if(!array_number.includes(number)){
            check = true;
        }
    }

    return number;
}

//funzione che genera array vuoto e pusha all'interno 5 numeri creati casualmente dalla funzione 'generateNumber'
function generateArray(){
    let numbers = []; 

    for(let i=0; i<5; i++){
        numbers.push(generateNumber(numbers));
    }
    
    let control = setTimeout(function(){
        insert(numbers);
    }, 31000)
    return numbers;

}

//richiamo elemento del DOM e innesto funzione
 const view_num = document.getElementById('numbers');
 view_num.innerHTML = generateArray();

 //funzione che nasconde i numeri dopo 30 secondi
 let hidden = setTimeout(function(){
    view_num.innerHTML = '';
 }, 30000);

 //funzione che mostra countdown
 let seconds = 30;
 
 let clock = setInterval(function(){
    let countdown = document.getElementById('countdown');
    countdown.innerText = seconds;

    if(seconds == 0){
        clearInterval(clock);
    }
    else{
        seconds--;
    }
}, 1000);
let view_points = document.getElementById('points');
let display_num = document.getElementById('num');
let points = 0;
//chiedere all'utente quali numeri ha visualizzato
function insert(array){
    for(let i=0; i<5; i++){
        let num = parseInt(prompt('inserisci un numero che hai visto'));
        if(array.includes(num)){
            let empty = '';
            points++;
            view_points.innerText = `Punti: ${points}`;
            display_num.innerText += `${num}${empty}`;
        }
    }
}


