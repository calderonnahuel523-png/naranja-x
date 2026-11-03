const practiceForm = document.querySelector("#practice-form");

practiceForm.addEventListener("submit", (event) => {
	event.preventDefault();
	practiceForm.reset();
	window.location.assign("resultado.html");
});
