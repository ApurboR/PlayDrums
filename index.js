function makeDrumSound(char){
  switch (char) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:
      console.log(char);
  }
}

function buttonAnimation(char){
  var activeButton = document.querySelector("." + char);
  console.log(activeButton);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 100) //100 is milliseconds
}

// Detecting Mouse Clicks
var button_array = document.querySelectorAll(".drum");
for (var i = 0; i < button_array.length; i++) {
  button_array[i].addEventListener(type = "click", listener = function() {
    makeDrumSound(this.textContent);
    buttonAnimation(this.textContent);
  });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function(event){
    makeDrumSound(event.key);
    buttonAnimation(event.key);
});
