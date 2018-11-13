// variables to store value fo win, lose, computer guess
var win = 0;
var lose = 0;
var totalScore = 0;

// when page gets loaded random value gets generated for computer (between 19 and 120)
$(document).ready(function () {
    function computerGuess() {
        return Math.floor(Math.random() * 120) + 1;
    }
    // call the function to generate the random value
    var CG = computerGuess()
    $("#Random-Number").text(CG);

    // random value being assiged to each dimond in their attr (between 1 and 12)
    function dimondValue() {
        function RanNum() {
            return Math.floor(Math.random() * 12) + 1;
        }
        for (var i = 1; i < 5; i++) {
            $(`#${i}`).attr("dimondVal", RanNum());
        }
    }
    dimondValue();
    // user press the dimond
    $(".crystal").on("click", function () {
        // get the value of the dimond
        var DimondVal = $(this).attr("dimondVal");
        var parsedValue = parseInt(DimondVal);

        // add the dimond value to score and put it in the page 
        totalScore += parsedValue;
        $("#total-score").text(totalScore);

        // check the win or lose condition
         // check the win or lose condition
         if (totalScore === CG || totalScore > CG) {
            var winOrLose = $("<p id='winOrLose'>");
            $("#result-box").append(winOrLose);
            //win situation
            if (totalScore === CG) {
                win++;
                $("#win").text(win);
                $("#winOrLose").text("You Win!!");
                totalScore = 0;
                $("#total-score").text(totalScore);
            } else {
                //lose situation
                lose++;
                $("#lose").text(lose);
                $("#winOrLose").text("You lost!!");
                totalScore = 0;
                $("#total-score").text(totalScore);
            }
            CG = computerGuess()
            $("#Random-Number").text(CG);
            dimondValue();
        }
    })
})