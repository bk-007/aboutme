document.addEventListener("DOMContentLoaded", function() {
  // Set up Lottie animations for each button
  var lottieButtons = document.querySelectorAll(".lottie-button");

  lottieButtons.forEach(function(button) {
    var link = button.getAttribute("data-link");

    // Add click event listener to navigate to the specified link on button click
    button.addEventListener("click", function() {
      window.open(link, "_blank");
    });
  });
});
