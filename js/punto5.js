/*Realizar una página con un script que calcule el valor de la letra de un número de DNI 
(Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y,
     F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».*/
do{

let dni= prompt("ingrese el dni");
if(numero < 0 || numero > 99999999) {
    alert("El número proporcionado no es válido");
}
if(dni>0 && dni<=99999999){
    let res=dni%23;
    switch(res){

             case 1:
            document.write("la letra que le corresponde es  : T");
            break;
            case 2:
                document.write("la letra que le corresponde es : R");
                break;
             case 2:
            document.write("la letra que le corresponde es : W");
            break;
            case 3:
            document.write("la letra que le corresponde es : A");
            break;
            case 4:
            document.write("la letra que le corresponde es : G");
            break;
            case 5:
            document.write("la letra que le corresponde es : M");
            break;
            case 6:
            document.write("la letra que le corresponde es : Y");
            break;
            case 7:
            document.write("la letra que le corresponde es : F");
            break;
            case 8:
            document.write("la letra que le corresponde es : P");
            break;
            case 9:
            document.write("la letra que le corresponde es : D ");
            break;
            case 10:
            document.write("la letra que le corresponde es : X");
            break;
            case 11:
            document.write("la letra que le corresponde es : B");
            break;
            case 12:
            document.write("la letra que le corresponde es : N");
            break;
            case 13:
            document.write("la letra que le corresponde es : J");
            break;
            case 14:
            document.write("la letra que le corresponde es : Z");
            break;
            case 15:
            document.write("la letra que le corresponde es : S");
            break;
            case 16:
            document.write("la letra que le corresponde es : Q");
            break;
            case 17:
            document.write("la letra que le corresponde es : V");
            break;
            case 18:
            document.write("la letra que le corresponde es : H");
            break;
            case 19:
            document.write("la letra que le corresponde es : L");
            break;
            case 20:
                document.write("la letra que le corresponde es : C");
                break;
            case 21:
                document.write("la letra que le corresponde es : K");
                    break;
            case 22:
                document.write("la letra que le corresponde es : E");
                        break;
            default:
                alert("el numero es erroneo");
            
}

}
else {
    //SI SE PULSÓ ACEPTAR SIN PONER UN NÚMERO
    if (numero != undefined) {
        alert(numero + " No es un numero");
    }
}

}while(dni != undefined )

