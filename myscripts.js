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

  // Call the simulateLoading function to start the loading process
  simulateLoading();

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

  // Function to create a new <lottie-player> element with the specified src
  function createLottiePlayer(src) {
    var container = document.getElementById("animation-container");

    // Remove any existing <lottie-player> elements
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // Create a new <lottie-player> element
    var lottiePlayer = document.createElement("lottie-player");
    lottiePlayer.setAttribute("id", "background-animation");
    lottiePlayer.setAttribute("background", "transparent");
    lottiePlayer.setAttribute("speed", "1");
    lottiePlayer.setAttribute("style", "width: 100%; height: 100%;");
    lottiePlayer.setAttribute("loop", "");
    lottiePlayer.setAttribute("autoplay", "");
    lottiePlayer.setAttribute("src", src);

    // Append the new <lottie-player> element to the container
    container.appendChild(lottiePlayer);
  }

  // Function to update the background animation based on the screen size
  function updateBackgroundAnimation() {
    if (window.innerWidth <= 767) {
      createLottiePlayer("json/mobile-background.json");
    } else {
      createLottiePlayer("json/desktop-background.json");
    }
  }

  // Call the function initially to set the background animation
  updateBackgroundAnimation();

  // Listen for window resize events and update the background animation
  window.addEventListener("resize", updateBackgroundAnimation);
});
