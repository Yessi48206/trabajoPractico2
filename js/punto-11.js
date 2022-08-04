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
