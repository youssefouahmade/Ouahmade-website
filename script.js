// Genera un numero casuale tra 1 e 100
const numeroCasuale = Math.floor(Math.random() * 100) + 1;
let tentativi = 0;

// Elementi HTML
const userInput = document.getElementById("userInput");
const guessButton = document.getElementById("guessButton");
const feedback = document.getElementById("feedback");
const attempts = document.getElementById("attempts");

// Funzione per gestire il click sul bottone
guessButton.addEventListener("click", function() {
    const userGuess = parseInt(userInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Per favore, inserisci un numero tra 1 e 100.";
        feedback.style.color = "red";
        return;
    }

    tentativi++;
    
    if (userGuess < numeroCasuale) {
        feedback.textContent = "Il numero è più grande!";
        feedback.style.color = "orange";
    } else if (userGuess > numeroCasuale) {
        feedback.textContent = "Il numero è più piccolo!";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = `Congratulazioni! Hai indovinato il numero in ${tentativi} tentativi.`;
        feedback.style.color = "green";
        userInput.disabled = true;  // Disabilita l'input dopo che l'utente ha vinto
    }

    attempts.textContent = `Tentativi: ${tentativi}`;
});
