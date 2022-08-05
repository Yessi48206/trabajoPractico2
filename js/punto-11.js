//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *


/*let mayor=0;
let guardar=0;
let i=0;


while(i>=3){

    let edad= prompt("ingrese una edad");
    let nombre=prompt("ingrese el nombre");
    if(mayor<edad)
    {
        mayor=edad;
        guardar=nombre;
        
    }
    i++;
}


  
document.write("el nombre de mayor es : "+ guardar);*/

let edad1=parseInt(prompt("ingrese la edad"));
let nombre=prompt("ingrese el nombre");
let edad2=parseInt(prompt("ingrese la edad"));
let nombre2=prompt("ingrese el nombre");
let edad3=parseInt(prompt("ingrese la edad"));
let nombre3=prompt("ingrese el nombre");

/*let maximo=Math.max(edad1,edad2,edad3);

if(maximo===edad1){
    document.write("el mayor es :"+ nombre);
}
if(maximo===edad2){
    document.write("el mayor es :"+ nombre2);
}
if(maximo===edad3){
    document.write("el mayor es :"+ nombre3);
}*/

if(edad3>edad2 && edad3>edad1){
    document.write("el mayor es :"+ nombre3);
}
else if(edad1>edad2 && edad1>edad3){
    document.write("el mayor es :"+ nombre);
}else{
    document.write("el mayor es :"+ nombre2);
}
document.write("<br>");
document.write("<h2>ejercicio 12</h2>");
document.write("<br>");
/*12- Realiza un script que genere un número aleatorio entre 1 y 99*/

//FUNCIÓN Math.floor: redondea al número entero menor.
    //FUNCIÓN Math.random: devuelve un número aleatorio mayor que 0 y menor que 1
    var num = Math.floor((Math.random() * 99) + 1);
    document.write(num);

    document.write("<br>");
    document.write("<h2>ejercicio 13</h2>");
    document.write("<br>");
/*13- Realiza un script que pida un texto y lo muestre en mayúsculas*/
//toLowerCase() para convertir a «minúsculas», y la función toUpperCase() para convertir a «mayúsculas»

let texto = prompt("Introduce el texto");
document.write("TEXTO: " + texto.toUpperCase() + ".");

