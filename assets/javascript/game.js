// WHAT ARE YOU DOING HERE? YOU'RE NOT SUPPOSED TO SEE THIS!
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var guesses = 10;
var usedLetters = [];
var gameHTML = document.getElementById("game");
var random = [Math.floor(Math.random() * computerChoice.length)];
var selection = computerChoice[random];
var display = selection.toUpperCase();

function newGame() {
  guesses = 10;
  usedLetters = [];
  random = [Math.floor(Math.random() * computerChoice.length)];
  selection = computerChoice[random];
  display = selection.toUpperCase();
  $("#userGuess").val(null);
}

document.onkeyup = function (event) {

  var userGuess = event.key.toLowerCase();
  $("#warnings").empty();

  if (!computerChoice.includes(userGuess)) {
    $("#warnings").html("<h4>Did you even read the directions? PICK A LETTER, EINSTEIN!</h4>");
    $("#userGuess").val(null);
    return false
  }

  if (usedLetters.includes(userGuess)) {
    $("#warnings").html("<h4>You already tried this letter...what makes you think it'll work THIS time?</h4>");
    $("#userGuess").val(null);
    return false;
  }

  if (userGuess === selection) {
    Swal.fire({
      title: 'You got it!',
      text: 'But are you really psychic, or did you just get lucky (or worse, CHEAT)?',
      type: 'success',
      confirmButtonText: "Only one way to find out...try again!"
    })
    wins++;
    newGame()
  } else {
    guesses--;
    usedLetters.push(userGuess);
    $("#userGuess").val(null);
  }

  if (guesses === 0) {
    Swal.fire({
      title: 'Game over!',
      text: `The correct answer was ${display}. Sadly, it seems that you are NOT psychic.`,
      type: 'error',
      confirmButtonText: 'Maybe another try will help?'
    })
    losses++;
    newGame();
  }
  gameHTML.innerHTML = `
Letters guessed: ${usedLetters.join(", ")}<br>
Guesses remaining: ${guesses}<br>
Wins: ${wins}<br>
Losses: ${losses}`
  $("#hiddenAnswer").html(`The answer is ${display}`)


  if (wins === 10 && guesses === 10) {
    $("#warnings").html("You're pretty good at this whole psychic thing. Well, either that or you're just INCREDBILY lucky. Or a cheater. That works too.");
  }

  if (losses === 10) {
    $("#youAreBad").html("Wow...you're kinda bad at this. Either you need to find a new occupation, or psychics aren't real after all. I'm going to go with both.");
  }

  if (wins === 20 && guesses === 10) {
    $("#warnings").html("Hmmm...Maybe you really are psychic. Or you have the most amazing luck in the world. But odds are you're cheating.");
  }

  if (losses === 20) {
    alert("Congratulations! You've definitively proven to me that psychics don't exist! Well, either that or you're not one of them. Either way...we're done here.");
    $("#warnings").html("<h2>P.S.: Highlight the text on the page for a cool secret. Also, nothing funny will happen if you lose more, so GIT GUD!</h2>");
    location.reload();
  }

  if (wins === 30 && guesses === 10) {
    $("#warnings").html("At this point, I'm pretty sure that you are MOST DEFINITELY cheating. How did you get this right 30 times? I'm not talking to you anymore...you CHEATER!!!!!");
  }

  if (wins === 50 && guesses === 10) {
    $("#warnings").html(`You're still here? WHY? Hasn't cheating to get the correct answer 50 times been enough for you? Well I'm not going to stop you, so feel free to keep cheating your way to victory I guess...see if I care, "psychic".<br>(P.S.:I DARE you to get to 100 now)`);
  }

  if (wins == 69 && guesses === 10) {
    $("#warnings").html("NICE! Wait, what am I saying? You're still a freaking cheater!")
  }

  if (wins === 100) {
    alert("...or not.")
    $("#pagetitle").html("Wow.")
    $("#theAction").html(`<br><h3 class="text-center">You are really dedicated to this.<br><br>You cheated your way to 100 wins in a piss-poor attempt to prove your totally real psychic powers.<br><br>I'm honestly kinda impressed...but I'm also starting to think you have no life.</h3> <br><h1>Maybe you should go outside or something. Here, let me help you: </h1> <img class="img-fluid" src="assets/images/clouds-eco-environment-9198.jpg">`)
    // window.location.href = "100gamewinner.html"
  }

  if (wins >= 101) {
    alert("You must think you're SOOOOOO smart. Sneaking around to see if I hid anything past the point where I intentionally ended the game...This is all you're getting, BTW. Well this and a refresh.");
    location.reload()
  }


}