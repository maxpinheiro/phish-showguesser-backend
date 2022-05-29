import { testRuns } from "../testData/runs";
import { Date, Run } from "../models/types";

let runs: Run.Type[] = [...testRuns];

export async function getAllRuns(): Promise<Run.Type[]> {
    return new Promise((resolve, reject) => {setTimeout(() => {resolve(runs)}, 1000)});
}

export async function getRunById(runId: Run.RunID): Promise<Run.Type | undefined> {
    return new Promise((resolve, reject) => {setTimeout(() => {resolve(runs.find(run => run.id === runId))}, 1000)});
}

export async function getCurrentRun(): Promise<Run.Type | undefined> {
    return new Promise((resolve, reject) => {setTimeout(() => {
        const dateObj = new Date();
        const date: Date = `${dateObj.getUTCMonth() + 1}-${dateObj.getUTCDate()}-${dateObj.getUTCFullYear()}`;
        resolve(runs.find(run => run.dates.includes(date)));
    }, 1000)});
}