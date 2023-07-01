document.addEventListener("DOMContentLoaded", function() {
  var loader = document.querySelector(".loader");
  var animation = document.querySelector(".animation");
  var buttons = document.querySelector(".lottie-buttons");

  function showLoader() {
    loader.style.display = "flex";
    animation.style.display = "none";
    buttons.style.display = "none";
  }

  function hideLoader() {
    loader.style.display = "none";
    animation.style.display = "block";
    buttons.style.display = "block";
  }

  function simulateLoading() {
    showLoader();
    setTimeout(function() {
      hideLoader();
    }, 3000);
  }

  simulateLoading();
});

document.addEventListener("DOMContentLoaded", function() {
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
  });

  var container = document.getElementById("animation-container");

  function createLottiePlayer(src) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    var lottiePlayer = document.createElement("lottie-player");
    lottiePlayer.setAttribute("id", "background-animation");
    lottiePlayer.setAttribute("background", "transparent");
    lottiePlayer.setAttribute("speed", "1");
    lottiePlayer.setAttribute("style", "width: 100%; height: 100%;");
    lottiePlayer.setAttribute("loop", "");
    lottiePlayer.setAttribute("autoplay", "");
    lottiePlayer.setAttribute("src", src);

    container.appendChild(lottiePlayer);
  }

  function updateBackgroundAnimation() {
    if (window.innerWidth <= 767) {
      createLottiePlayer("json/mobile-background.json");
    } else {
      createLottiePlayer("json/desktop-background.json");
    }
  }

  updateBackgroundAnimation();

  window.addEventListener("resize", updateBackgroundAnimation);
});
