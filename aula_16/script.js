const RESULTADO = document.querySelector('.result');

function inserir(valor){
    RESULTADO.innerHTML += valor;
}

function limpar(){
    RESULTADO.innerHTML = '';
}