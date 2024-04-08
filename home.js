// When the user clicks on div, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  function playMusic() {
      var checkBox = document.getElementById("play-check");
      var audio = document.getElementById("audio");
      if (checkBox.checked == true) {
          audio.pause();
      }
      else {
          audio.play();
      }
  }