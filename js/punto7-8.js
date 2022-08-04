/* Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario 
(no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/

let numero=parseInt( prompt("ingrese un numero no mayor a 50"));

if(numero<=50){
    for( let i=numero; i!=0; i--)
    {
        numero--;
        for(let rep=numero; rep!=0; rep--){
            document.write(i);
        }
        document.write("<br>");
    }
}else{
    document.write("el numero ingresado supera los 50");
}
document.write("<br>");

/* Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
 */
let num=parseInt( prompt("ingrese un numero no mayor a 50"));

if(num<=50){
   for(let y=0; y<=num; y++){
    for(let repe=0 ; repe<y; repe++){
        document.write(y);
    }
    document.write("<br>");
   }
}else{
    document.write("el numero ingresado supera los 50");
}
