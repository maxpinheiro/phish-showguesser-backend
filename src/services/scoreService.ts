import { testScores } from "../testData/scores";
import { Score, Run, User } from "../models/types";

let scores: Score.Type[] = [...testScores];

export async function getAllScores(): Promise<Score.Type[]> {
    return new Promise((resolve, reject) => {setTimeout(() => {resolve(scores)}, 1000)});
}

export async function getScoresForUser(userId: User.UserID): Promise<Score.Type[]> {
    return new Promise((resolve, reject) => {setTimeout(() => {resolve(scores.filter(score => score.userId === userId))}, 1000)});
}

export async function getScoresForRun(runId: Run.RunID): Promise<Score.Type[]> {
    return new Promise((resolve, reject) => {setTimeout(() => {resolve(scores.filter(score => score.runId === runId))}, 1000)});
}

export async function getScoresForUserForRun(userId: User.UserID, runId: Run.RunID): Promise<Score.Type[]> {
    return new Promise((resolve, reject) => {setTimeout(() => {resolve(scores.filter(score => score.userId === userId && score.runId === runId))}, 1000)});
}
