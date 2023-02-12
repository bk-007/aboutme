let box = document.querySelector("#preloader"),

function fadeOut() {
	box.classList.add("visuallyhidden");
	box.addEventListener(
		"transitionend",
		function (e) {
			box.classList.add("hidden");
		},
		{
			capture: false,
			once: true,
			passive: false
		}
	);
}
setTimeout(fadeOut, 3000);