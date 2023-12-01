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
 console.log(seconds);
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

