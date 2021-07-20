// Your code here
let seleccionar = document.querySelector("ul"); // aqui seleccionamos el uL
let nuevospan = document.createElement("span"); //creamos la etiqueta span

//Funcion para agregar elementos
function elinput() {
	let input = document.getElementById("addToDo").value; //capturamos lo que se escribe en el input
	let nuevalista = document.createElement("li"); //creamos la etiqueta Li
	//AQUI VA EL SPAN
	let text = document.createTextNode(input); //Agregamos el texto al input
	nuevospan.appendChild(btnBorrar()); //agregamos al Li el span
	nuevalista.appendChild(nuevospan); //añado la etiqueta span al mismo li
	nuevalista.appendChild(text); //Metemos el elemento a la lista
	seleccionar.appendChild(nuevalista); //Aqui se supone que metemos la lista nueva
	//nuevalista.innerHTML = input; //Metemos el elemento a la lista
}

//Funcion para el boton de eliminar, agregarlo
function btnBorrar() {
	let nuevoi = document.createElement("i"); //creamos la etiqueta i
	let botedebasura = document.querySelectorAll(".fa-trash");
	nuevoi.className = "fa fa-trash";
	nuevoi.addEventListener("click", function(e) {
		console.log(botedebasura);
		let item = e.target.parentElement;
		let item2 = item.parentElement; //agregando esta linea remueve cosas pero con problemas
		seleccionar.removeChild(item2);
		//item2.removeChild(item);
	});
	return nuevoi;
}
//document.querySelectorAll(".fa-trash")

//insertamos en la lista el contenido del input
let aux = document.querySelector("#addToDo");
aux.addEventListener("keypress", function(e) {
	if (e.key === "Enter") {
		elinput();
	}
});

//ZONA DEPRUEBAS
//Con esto comprobamos que seleccionamos el UL
/*
seleccionar.addEventListener("click", function() {
	alert("hola");
});
*/

/*
//PROBAMOS CAPTAR VALORES DEL INPUT
function elinput() {
	let input = document.getElementById("addToDo").value; //capturamos lo que se escribe en el input
	alert(input);
}
elinput();
*/
