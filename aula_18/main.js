function enviar(){
    var endEmail = document.querySelector('#email').value;
    var senha = document.querySelector('#senha').value;

    console.log(endEmail);
    console.log(senha);

    var lemb = document.querySelector('#checkbox');
    if (lemb.checked){
        console.log("Checkbox selecionada");
    }
    else{
        console.log("Checkbox não selecionada");
    }
}