import { createBrotliDecompress } from "zlib";

let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	let nuevalista = document.createElement("li");
	nuevalista.innerHTML = "Fourth Element";
	document.querySelector("#myList").appendChild(nuevalista);

});


import { createBrotliDecompress } from "zlib";

let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	//const expected = 'innerHTML = "Fourth element";';
    //document.querySelector("#myList").appendChild(nuevalista);
	//document.querySelector("#myList").appendChild((nuevalista.innerHTML = "Fourth Element"));

	let nuevalista = document.createElement("li");
	nuevalista.innerHTML = "Fourth element";
	document.querySelector("#myList").appendChild(nuevalista);
});
