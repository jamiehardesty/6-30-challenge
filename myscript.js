var steiner = Math.floor((Math.random() * 157) + 1);

alert('Hello Tobias. The Web35 class contains 157 students.') + alert('I have chosen a random number between 1 and 157. It is ' + steiner + '. I rock!')

function mySubmission() {
    var txt;
    var tobias = prompt("How many challenge submissions were correct?", "Surprise me!");
    var steiner = Math.floor((Math.random() * tobias) + 1);
    if (tobias == null || tobias == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = "I have computed a random number between 1 and " + tobias + ". It is " + steiner + ". Alphabetically sort the names of those who submitted correct answers and select the person at the number I chose as the winner. Thank you!";
    }
    document.getElementById("replaceH1").innerHTML = txt;
  }