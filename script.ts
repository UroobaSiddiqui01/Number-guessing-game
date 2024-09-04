// script.ts

// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
    const randomNumber: number = Math.floor(Math.random() * 5) + 6;

    const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;
    const resultElement = document.getElementById("result") as HTMLParagraphElement;

    submitBtn.addEventListener("click", () => {
        const userGuessedNumber = (document.getElementById("userGuessedNumber") as HTMLInputElement).valueAsNumber;

        if (userGuessedNumber === randomNumber) {
            resultElement.textContent = "🎉CONGRATS! YOU GUESSED RIGHT NUMBER.🎉";
            resultElement.style.color = "green";
        } else {
            resultElement.textContent = "❌YOU GUESSED WRONG NUMBER.❌";
            resultElement.style.color = "red";
        }
    });
});