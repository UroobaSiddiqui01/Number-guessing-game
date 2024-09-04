// script.ts
// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
    var randomNumber = Math.floor(Math.random() * 5) + 6;
    var submitBtn = document.getElementById("submitBtn");
    var resultElement = document.getElementById("result");
    submitBtn.addEventListener("click", function () {
        var userGuessedNumber = document.getElementById("userGuessedNumber").valueAsNumber;
        if (userGuessedNumber === randomNumber) {
            resultElement.textContent = "🎉CONGRATS! YOU GUESSED RIGHT NUMBER.🎉";
            resultElement.style.color = "green";
        }
        else {
            resultElement.textContent = "❌YOU GUESSED WRONG NUMBER.❌";
            resultElement.style.color = "red";
        }
    });
});