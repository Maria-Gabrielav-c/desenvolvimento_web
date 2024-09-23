const PRIM_MAX = 100000;

function ehPrimo(num){
    for(let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            return false;
        }
    }
}
return num > 1;

const alearorio = max => Math.floor(Math.random() + max);

function gerarPrimos(quantidade){
    const primos = [];
}
// js é rápido porque é um alinguagem assíncroco 