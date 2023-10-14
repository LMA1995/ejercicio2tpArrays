/*Crear un script que solicite al usuario mediante un prompt el nombre de
ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
debe mostrar el arreglo generado, luego realizar las siguientes acciones:
● Mostrar la longitud del arreglo.
● Mostrar en el documento web los ítems de las posiciones primera, tercera y
última.
● Añade en última posición la ciudad de París.
● Escribe por pantalla el elemento que ocupa la segunda posición.
● Sustituye el elemento que ocupa la segunda posición por la ciudad de
'Barcelona'.*/

let lista=document.getElementById('lista');
let ciudades=[];
do {
    let ciudad= prompt('Ingrese una ciudad')
    ciudades.push(ciudad)
} while (confirm('Desea seguir ingresando valores?'));
alert(ciudades)
let longitud=document.createElement('li');
longitud.textContent=(`El array tiene ${ciudades.length} elementos`);
lista.appendChild(longitud)

let primerElemento=document.createElement('li');
primerElemento.textContent=(`El primer elemento del array es ${ciudades[0]}, el segundo elemento de la posicion es ${ciudades[1]} y el tercer elemento es ${ciudades[2]}`);
lista.appendChild(primerElemento);
let segundaPosicion=document.createElement('li');
ciudades[1]='Barcelona';
segundaPosicion.textContent=`El elemento de la segunda posicion se actualizo a ${ciudades[1]}`
lista.appendChild(segundaPosicion)
ciudades.push('Paris')

let ultimaPosicion=document.createElement('li');
ultimaPosicion.textContent=ciudades[ciudades.length-1];
lista.appendChild(ultimaPosicion)


let listaActual=document.getElementById('listaActual');
listaActual.innerHTML='';
for(i=0;i<ciudades.length;i++)
{
    let itemArray=document.createElement('li');
    itemArray.textContent=ciudades[i];
    listaActual.appendChild(itemArray)
}



