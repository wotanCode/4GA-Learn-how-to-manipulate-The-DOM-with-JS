// Your code here
let seleccionar = document.querySelector("ul"); // aqui seleccionamos el uL

//Funcion para agregar elementos
function elinput() {
	let input = document.getElementById("addToDo").value; //capturamos lo que se escribe en el input
	let nuevalista = document.createElement("li"); //creamos la etiqueta Li
	nuevalista.innerHTML = input; //Metemos el elemento a la lista
	seleccionar.appendChild(nuevalista); //Aqui se supone que metemos la lista nueva
	nuevalista.appendChild(btnBorrar()); //añado la etiqueta span al mismo li
	//let nuevospan = document.createElement("span"); //creamos la etiqueta span
	//nuevalista.appendChild(nuevospan); //añado la etiqueta span al mismo li
	//nuevospan.appendChild(btnBorrar());
	//nuevospan.appendChild(nuevoi);
}

//Funcion para el boton de eliminar, agregarlo
function btnBorrar() {
	let nuevoi = document.createElement("i"); //creamos la etiqueta i
	nuevoi.className = "fa fa-trash";
	nuevoi.addEventListener("click", function(e) {
		let item = e.target.parentElement;
		seleccionar.removeChild(item);
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
