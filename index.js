function shout(string) {
    return string.toUpperCase();
  }
function whisper(string) {
    return string.toLowerCase();
}
function logShout() {
    console.log(shout("Hello));
}
function logWhisper() {
    console.log(whisper("Hello"));
}
function sayHiToGrandma(string){
    if(string === string.toLowerCase()){
        return ("I can/'t hear you!");
    }else return (string === string.toUpperCase()) {
        ("YES INDEED!");
    }else if (string === "I love you, Grandma.") {
        return ("I love you, too.");
    }
