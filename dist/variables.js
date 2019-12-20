var score1 = 0;
var score2 = 200;
var defaultScore = 0;
function outer() {
    var score = 0;
    function inner() {
        console.log(score);
    }
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, 100);
    }
    inner();
    console.log(score);
}
outer();
//# sourceMappingURL=variables.js.map