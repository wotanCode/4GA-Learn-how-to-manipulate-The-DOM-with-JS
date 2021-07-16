window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	let nuevalista = document.createElement("li");
	nuevalista.innerHTML = "Fourth Element";
	document.querySelector("body").appendChild(nuevalista);
};
