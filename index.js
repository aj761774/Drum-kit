//button detection
for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click',  function() {
      this.style.color = "green";
      var buttonInnerHtml=this.innerHTML;
      makeSound(buttonInnerHtml);
      buttonAnimation(buttonInnerHtml);
    });
}
/*
function(){
    some code
}
is knwon as ananymous function i.e function without name
*/
//keyboard key pressing detection
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});
  /*here event(you can give any name you want) is an object that contains many properties
  like which key:"s" ,code:"keyS" etc therefor event.key
  returns key that is pressed*/
function makeSound(key){
  switch (key) {
    case "w":
      var crashAudio = new Audio('sounds/crash.mp3');
      crashAudio.play();
      break;
    case "a":
      var kickAudio = new Audio('sounds/kick-bass.mp3');
      kickAudio.play();
      break;
    case "s":
      var snareAudio = new Audio('sounds/snare.mp3');
      snareAudio.play();
      break;
    case "d":
      var tom1Audio = new Audio('sounds/tom-1.mp3');
      tom1Audio.play();
      break;
    case "j":
      var tom2Audio = new Audio('sounds/tom-2.mp3');
      tom2Audio.play();
      break;
    case "k":
      var tom3Audio = new Audio('sounds/tom-3.mp3');
      tom3Audio.play();
      break;
    case "l":
      var tom4Audio = new Audio('sounds/tom-4.mp3');
      tom4Audio.play();
      break;
    default:
      console.log("clicked");
}
}

function buttonAnimation(currentKey){
var activeButton=document.querySelector("." + currentKey);
activeButton.classList.add("pressed");//here pressed is the class that is used in style.css file and it is applied to active button
setTimeout(function(){
activeButton.classList.remove("pressed");//here pressed is the class that is used in style.css file and it is removed from active button
},2000);//here 2000 means after 2 second pressed class effect is removed from activeButton
}
