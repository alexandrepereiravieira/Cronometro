const horasElem = document.querySelector("#hours");
const minutosElem = document.querySelector("#minutes");
const segundosElem = document.querySelector("#seconds");
const milisegundosElem = document.querySelector("#milliseconds");
const btnStart = document.querySelector("#btnStart");
const btnPause = document.querySelector("#btnPause");
const btnContinue = document.querySelector("#btnContinue");
const btnReset = document.querySelector("#btnReset");

let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

// arrow function que formata a apresentação dos dos digitos , deixa sempre com dois
// digitos e o milisegundos com 3 digitos

let formatTimer = (time) => time < 10 ? `0${time}`:time;
let formatMilliseconds = (time) => time < 100 ? `${time}`.padStart(3,"0"):time;

//função para PAUSAR cronometro; esconde o botão pause e mostra o continue
let pausar = () => {
    isPaused = true;
    btnPause.style.display = "none";
    btnContinue.style.display = "block";
};

//arrow function para CONTINUAR contando, esconde o botão de continue e mostra o pause

let continuar = ()=> {
    isPaused = false;
    btnPause.style.display = "block";
    btnContinue.style.display = "none";
    
}

//arrow function para RESETAR contando, esconde o botão de continue, pause e mostra o start

let resetar = () => {
    clearInterval(interval);
    isPaused = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    
    milisegundosElem.textContent = "000";
    segundosElem.textContent = "00";
    minutosElem.textContent = "00";
    horasElem.textContent = "00";
    
    btnStart.style.display = "block";
    btnPause.style.display = "none";
    btnContinue.style.display = "none";
}


// determinando click dos botões
btnStart.addEventListener("click", starTimer);
btnPause.addEventListener("click", pausar);
btnContinue.addEventListener("click", continuar);
btnReset.addEventListener("click", resetar);

// Função INICIAR a passagem de tempo

function starTimer() {
    interval = setInterval(() => {
        if (!isPaused) {
            miliseconds += 10;
            if (miliseconds === 1000) {
                seconds++;
                miliseconds = 0;
            }
        }
        if (seconds === 60) {
            minutes++;
            seconds=0;
        }
        if (minutes === 60) {
            hours ++;
            minutes = 0;
        }
        milisegundosElem.textContent = formatMilliseconds(miliseconds);
        segundosElem.textContent = formatTimer(seconds);
        minutosElem.textContent = formatTimer(minutes);
        horasElem.textContent = formatTimer(hours);

    },10);

    // esconder e aparecer botões ocultos

    btnStart.style.display = "none";
    btnPause.style.display = "block";
    
    
}