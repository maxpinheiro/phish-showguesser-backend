export type Date = `${number}-${number}-${number}`;

export namespace User {
    export type UserID = string;//`user-${number}`;
    export interface Type {
        id: UserID,
        username: string,
        password: string,
        score: number
    }
}

export namespace Song { 
    export type SongID = string;//`song-${string}`;
    export interface Type {
        id: SongID,
        name: string
    }
}


export namespace Guess {
    export type GuessID = string;//`guess-${number}`;
    export interface Type {
        id: GuessID,
        userId: User.UserID,
        songId: Song.SongID,
        songName: string,
        runId: Run.RunID,
        type: "opener" | "standard" | "encore"
        completed?: boolean
    }
}

export namespace Score {
    export type ScoreID = string;//`score-${number}`;
    export interface Type {
        id: ScoreID,
        userId: User.UserID,
        runId: Run.RunID, 
        songName: string,
        points: number
    }
}

export namespace Run {
    export type RunID = string;//`run-${number}`;
    export interface Type {
        id: RunID,
        name: string,
        dates: Date[]
    }
}

export namespace Show {
    export type ShowId = string;//`show${number}`;
    export interface Type {
        id: ShowId,
        runId: Run.RunID,
        name: string,
        date: Date
    }
}
