/*4- Realiza un script que pida números hasta que se pulse “cancelar”.
 Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

 //let numero= parseInt(prompt("Ingrese un numero"));

 /*do{
    let numero= parseInt(prompt("Ingrese un numero"));
    console.log(numero);
    document.write(numero);

    let suma= suma+numero;

}while(confirm("quiere seguir ingresando") == true)*/


let suma = 0;

do {
   
   let numero = prompt("Introduce un numero");
    //COMPROBAMOS QUE LO INTRODUCIDO ES UN NÚMERO
    if (Number(numero) == numero) {
        //CONVERTIMOS EL NÚMERO EN INTEGER (POR SI ACASO)
        numero = Number(numero);
        //SUMAMOS LO QUE HAY EN LA VARIABLE SUMA CON ESE NÚMERO
        suma = suma + numero;
    }
    //SI LO INTRODUCIDO NO ES UN NÚMERO
    else {
    //SI SE PULSÓ ACEPTAR SIN PONER UN NÚMERO VÁLIDO
        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }
//VOLVEMOS ARRIBA MIENTRAS NO SE PULSE CANCELAR
} while (numero != undefined);
//SI SE PULSÓ CANCELAR SALE DEL BUCLE E IMPRIME EL RESULTADO
document.write(suma);
