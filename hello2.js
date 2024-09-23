function cumprimentar (nome){
    return 'Oi, $(nome)!';
}

const nome = 'Maga';
const cumprimento = cumprimentar (nome);
console.log(cumprimento);

/**
 * const nome = 'Maria Gabriela';
console.log('Oi, &{nome}!');
 */