/*  9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos 
de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————- */

for( let indice =1 ; indice <=500 ; indice++)
{
    document.write(indice);
    if(indice % 4=== 0)
    {
        document.write("  es multiplo de 4")
    }
    if(indice %9 === 0)
    {
        document.write("  es multiplo de 9")
    }
   if(indice % 5===0){
    document.write("<hr>");
   }

   
    document.write("<br>")
}
document.write("Ejercicio 10");

/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. 
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/

let fila= parseInt(prompt("Ingrese un numero de fila"));
let columnas= parseInt(prompt("Ingrese un numero de fila"));
let resultado= fila*columnas;
console.log(fila);
console.log(columnas);
document.write( ` <table class="tabladato">
<tbody>`);
//aqui ponemos la fila
for(let i =0; i<fila; i++ ){
    document.write( ` 
    <tr>`);
    //aqui ingreso la cantidad de columna
    for(let j=0; j<columnas; j++){
        document.write( ` 
            <td>${resultado}</td>`);
            resultado--

    }
        document.write( `</tr>`);
}
document.write( ` 
</tbody>
</table> `);