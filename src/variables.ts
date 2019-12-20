var score1 = 0;
let score2 = 200;
const defaultScore = 0;

function outer() {
  var score = 0;
  function inner() {
    console.log(score);
  }

  for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 100);
  }
  inner();
  console.log(score);
}
outer();
