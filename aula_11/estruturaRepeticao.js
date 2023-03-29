for (contador = 0; contador < 10; contador++){
    console.log("Exibindo número:" + contador);
}

for (contador = 10; contador > 0; contador--){
    console.log("Exibindo número: " + contador);
}

var i = 0;
while(i < 10){
    console.log(i);
    if (i === 5){
        break;
    }
    i++;
}

var j = 0;
do{
    console.log(j);
    j++;
}while (j < 10);