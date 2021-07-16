import { createBrotliDecompress } from "zlib";

let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	let nuevalista = document.createElement("li");
	nuevalista.innerHTML = "Fourth Element";
	document.querySelector("#myList").appendChild(nuevalista);
});
