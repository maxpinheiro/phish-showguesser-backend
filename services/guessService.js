import { testGuesses } from "../testData/guesses";

export async function getAllGuesses() {
    setTimeout(() => {
        return testGuesses;
    }, 1000);
}

export async function getGuessesForShow(showId) {
    setTimeout(() => {
        return testGuesses.filter(guess => guess.showId == showId);
    }, 1000);
}