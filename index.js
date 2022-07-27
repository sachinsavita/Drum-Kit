//Detecting button press

var numberOfDrumButton = document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButton;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", handleclick);  //why not calling function handClick with () //If we will mention the () the it will be called as the file loaded not when click.
function handleclick(){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
      
}
}

//Detecting keyboard press


document.addEventListener("keypress", function(event){

    makeSound(event.key);
    buttonAnimation(event.key);

});


function makeSound(key){

    switch (key) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
                var tom1 = audio.play();
            break;
        case "a":
                var audio = new Audio("./sounds/tom-2.mp3");
                var tom2 = audio.play();
                break;    
        case "s":
                    var audio = new Audio("./sounds/tom-3.mp3");
                var tom3 = audio.play();
                    break; 
        case "d":
                    var audio = new Audio("./sounds/tom-4.mp3");
                var tom4 =  audio.play();
                    break; 
        case "j":
                    var audio = new Audio("./sounds/snare.mp3");
                var snare = audio.play();
                    break; 
        case "k":
                    var audio = new Audio("./sounds/crash.mp3");
                var crash = audio.play();
                    break; 
        case "l":
                    var audio = new Audio("./sounds/kick-bass.mp3");
                var kick = audio.play();
                    break; 
        default:
            console.log(buttonInnerHTML);
    } 
}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");


  setTimeout(function(){

activeButton.classList.remove("pressed");

  }, 100);

};

