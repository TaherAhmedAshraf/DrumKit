

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const Key = document.querySelector(`.Key[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio)  return;
    audio.play();
    audio.currentTime = 0;
    Key.classList.add("Playing");
    
}

function removeTransition(e){
    console.log(this);
    this.classList.remove("Playing");
}

window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll(".Key");
console.log(keys);
keys.forEach(Key => Key.addEventListener("transitionend", removeTransition));

