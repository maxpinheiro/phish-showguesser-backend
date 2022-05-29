import { testGuesses } from "../testData/guesses";
import { Guess, Run, User } from "../models/types";

let guesses: Guess.Type[] = [...testGuesses];

export async function getAllGuesses(): Promise<Guess.Type[]> {
    return new Promise((resolve, reject) => {setTimeout(() => {resolve(guesses)}, 1000)});
}

export async function getGuessById(guessId: Guess.GuessID): Promise<Guess.Type | undefined> {
    return new Promise((resolve, reject) => {setTimeout(() => {resolve(guesses.find(guess => guess.id === guessId))}, 1000)});
}

export async function getGuessesForRun(runId: Run.RunID): Promise<Guess.Type[]> {
    return new Promise((resolve, reject) => {setTimeout(() => {resolve(guesses.filter(guess => guess.runId === runId))}, 1000)});
}

export async function getGuessesForUser(userId: User.UserID): Promise<Guess.Type[]> {
    return new Promise((resolve, reject) => {setTimeout(() => {resolve(guesses.filter(guess => guess.userId === userId))}, 1000)});
}

export async function getGuessesForUserForRun(userId: User.UserID, runId: Run.RunID): Promise<Guess.Type[]> {
    return new Promise((resolve, reject) => {setTimeout(() => {resolve(guesses.filter(guess => guess.userId === userId && guess.runId === runId))}, 1000)});
}
