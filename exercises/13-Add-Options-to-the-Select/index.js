window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	// your code here
	//let aux = document.querySelector("#mySelect");
	let aux = document.querySelector("#mySelect"); //importante
	let option = document.createElement("option"); //importante
	for (let i = 0; i < countries.length; i++) {
		option.text = countries[i];
		aux.add(option);
	}

	document.querySelector("#mySelect").appendChild(option); //importante

	// Rutina para agregar opciones a un <select>
	/*
	function addOptions(domElement, array) {
		var select = document.getElementsByName(domElement)[0];

		for (value in array) {
			var option = document.createElement("option");
			option.text = array[value];
			select.add(option);
		}
	}*/

	/*
	let nuevalista = document.createElement("li");
	nuevalista.innerHTML = "Fourth Element";
    document.querySelector("body").appendChild(nuevalista);
    */
};
