import { Router } from 'express'
const router = Router()

import { getAllGuesses, getGuessById, getGuessesForRun, getGuessesForUser, getGuessesForUserForRun } from '../services/guessService';

// middleware
/*router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});*/

// GET /guesses : get all guesses
//     /guesses?runId={runId}: get all guesses for a run
//     /guesses?userId={userId}: get all guesses for a user
//     /guesses?runId={runId}&userId={userId}: get all guesses for a user for a run
router.get('/', (req, res) => {
    const { runId, userId } = req.query;
    if (runId && userId) { // get all guesses for a user for a run
        console.log(`GET => /guesses?runId=${runId}&userId=${userId}`);
        getGuessesForUserForRun(userId.toString(), runId.toString())
            .then(guesses => {
                if (guesses) {
                    res.status(200).json({guesses});
                } /* else if ('run not found') {
                    res.status(404).json({error: 'Run not found.'});
                } */ else {
                    res.status(500);
                }
        });
    } else if (runId) { // get all guesses for a run
        console.log(`GET => /guesses?runId=${runId}`);
        getGuessesForRun(runId.toString())
            .then(guesses => {
                if (guesses) {
                    res.status(200).json({guesses});
                } else {
                    res.status(500);
                }
        });
    } else if (userId) { // get all guesses for a user
        console.log(`GET => /guesses?userId=${userId}`);
        getGuessesForUser(userId.toString())
            .then(guesses => {
                if (guesses) {
                    res.status(200).json({guesses});
                } else {
                    res.status(500);
                }
        });
    } else { // get all guesses
        console.log('GET => /guesses');
        getAllGuesses()
            .then(guesses => {
                if (guesses) {
                    res.status(200).json({guesses});
                } else {
                    res.status(500);
                }
        });
    }
})

// GET /guesses/:guessId : get specific guess
router.get('/:guessId', (req, res) => {
    console.log('GET => /guesses/:guessId');
    if (!req.params.hasOwnProperty('guessId')) {
        res.status(400).json({error: "Missing guess id"});
    } else {
        const guessId = req.params.guessId;
        getGuessById(guessId)
            .then(guess => {
                if (guess) {
                    res.status(200).json({guess});
                } else {
                    res.status(500);
                }
        });
    }
})

// POST /guesess : create guess for user
router.post('/', (req, res) => {
    console.log('POST => /guesses');
    const body = req.body;
    if (!body.hasOwnProperty('userId')) {
        res.status(400).json({error: "Missing user id"});
    } else if (!body.hasOwnProperty('runId')) {
        res.status(400).json({error: "Missing run id"});
    } else if (!body.hasOwnProperty('songId')) {
        res.status(400).json({error: "Missing song id"});
    } else if (!body.hasOwnProperty('songName')) {
        res.status(400).json({error: "Missing song name"});
    } else {
        //const { userId, runId, songId, songName } = body;
        const userId = body.userId;
        const runId = body.runId;
        const songId = body.songId;
        const songName = body.songName;
        const encore = body.encore;
        // validate username, run, & song

        // try saving song
        // succes
        // fail (already saved by someone else)
    }
})

// DELETE /guesses/:guessId : delete existing guess
router.delete('/:guessId', (req, res) => {
    console.log('DELETE => /guesses/:guessId');
    res.status(200)
})

export default router;