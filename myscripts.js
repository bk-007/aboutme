document.addEventListener("DOMContentLoaded", function() {
  // Select the loader and animation elements
  var loader = document.querySelector(".loader");
  var animation = document.querySelector(".animation");
  var buttons = document.querySelector(".lottie-buttons");

  // Show the loader
  function showLoader() {
    loader.style.display = "flex";
    buttons.style.display = "none";
  }

  // Hide the loader and show the buttons
  function hideLoader() {
    loader.style.display = "none";
    buttons.style.display = "flex";
  }

  // Simulate a loading delay (you can replace this with your own loading logic)
  function simulateLoading() {
    // Show the loader immediately
    showLoader();

    // Simulate loading delay (e.g., 3 seconds)
    setTimeout(function() {
      // Hide the loader and show the buttons after the delay
      hideLoader();
    }, 3000); // Adjust the delay time as needed
  }

  // Call the simulateLoading function to start the loading process
  simulateLoading();

  // Set up Lottie animations for each button
  var lottieButtons = document.querySelectorAll(".lottie-button");

  lottieButtons.forEach(function(button) {
    var link = button.getAttribute("data-link");

    // Add click event listener to navigate to the specified link on button click
    button.addEventListener("click", function() {
      window.location.href = link;
    });
  });
});
