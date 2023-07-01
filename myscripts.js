// loader and background switcher based on screen size
document.addEventListener("DOMContentLoaded", function() {
  // Select the loader and animation elements
  var loader = document.querySelector(".loader");
  var animation = document.querySelector(".animation");
  var buttons = document.querySelector(".lottie-buttons");

  // Show the loader
  function showLoader() {
    loader.style.display = "flex";
    animation.style.display = "none";
    buttons.style.display = "none";
  }

  // Hide the loader and show the animation and buttons
  function hideLoader() {
    loader.style.display = "none";
    animation.style.display = "block";
    buttons.style.display = "block";
  }

  // Set the background animation source based on the device display size
  function setAnimationSource() {
    var backgroundAnimation = document.getElementById("background-animation");
    var animationSource = window.innerWidth <= 767 ? "json/mobile-background.json" : "json/desktop-background.json";
    backgroundAnimation.setAttribute("src", animationSource);
  }

  // Simulate a loading delay (you can replace this with your own loading logic)
  function simulateLoading() {
    // Show the loader immediately
    showLoader();

    // Simulate loading delay (e.g., 3 seconds)
    setTimeout(function() {
      // Hide the loader and show the animation and buttons after the delay
      hideLoader();
    }, 3000); // Adjust the delay time as needed
  }

  // Call the setAnimationSource function to set the appropriate background animation
  setAnimationSource();

  // Call the simulateLoading function to start the loading process
  simulateLoading();
});

// lottie buttons clickable
document.addEventListener("DOMContentLoaded", function() {
  // Set up Lottie animations for each button
  var lottieButtons = document.querySelectorAll(".lottie-button");

  lottieButtons.forEach(function(button) {
    var link = button.getAttribute("data-link");
    var animationId = button.querySelector("div").id;

    var animation = bodymovin.loadAnimation({
      container: document.getElementById(animationId),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "json/" + animationId + ".json"
    });

    // Add click event listener to navigate to the specified link on button click
    button.addEventListener("click", function() {
      window.location.href = link;
    });
  });
});
