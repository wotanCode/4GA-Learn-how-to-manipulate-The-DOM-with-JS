import { createBrotliDecompress } from "zlib";

let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	/*
	let creador = document.getElementById("superDuperButton");
	let lista = document.getElementById("myList");
	let li = document.createElement("li");
	li.textContent = "Fourth Element";
    lista.appendChild(li);
    */

	/*
	console.log(creador);
	console.log(li);
    console.log(lista);
*/
	//let lista = document.getElementById("myList");

	let nuevalista = document.createElement("li");
	nuevalista.innerHTML = "Fourth Element";
	document.querySelector("body").appendChild(nuevalista);
});
