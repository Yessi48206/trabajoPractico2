/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” 
deben mostrarse todas las cadenas concatenadas con un guión -.*/

let text;
let palabra;
do{
    text= prompt("ingrese texto");
    console.log(text);
    document.write(text + "-")
}while(text != undefined)
//cadena concatenada con guion

/*if (confirm("Press a button!") == true) {
  text = "You pressed OK!";
  document.write(text);
} else {
  text = "You canceled!";
  document.write(text);
}*/