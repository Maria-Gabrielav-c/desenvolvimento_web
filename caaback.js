function mostrador (algumacoisa){
    console.log(algumacoisa);
}

function calculador(num1, num2, chamoDepois){
    let soma = num1 + num2;
    chamoDepois(soma);
}

//calculador (5, 5, mostrador);
// se colocar parêmteses chama na hora

function funcao(){
    console.log('Eu tento compreender JavaScript');
}

//setTimeout(funcao, 3000);

function relogio(){
    let d = new Date();
    console.log(d.getDate() + ':' + d.getMinutes() + ':' + d.getSeconds());
}

setInterval(relogio, 1000);