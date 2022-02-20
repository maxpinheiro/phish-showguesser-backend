import { Router } from 'express'
const router = Router()

import { getAllGuesses, getGuessesForShow } from '../services/guessService';

// middleware
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

// GET /guesses : get all guesses
router.get('/guesses', (req, res) => {
    console.log('GET => /guesses');
    // guesses?showId={showId} : guesses for specific show
    if (req.query.hasOwnProperty('showId')) {
        const showId = req.query.showId;
        const guesses = await getGuessesForShow(showId);

        if (guesses) {
            res.status(200).json({data: {guesses}});
        } else if ('date not found') {
            res.status(404).json({error: 'Date not found.'});
        } else {
            res.status(500);
        }
    } else { // all guesses
        const guesses = await getAllGuesses();
        if (guesses) {
            res.status(200).json({data: {guesses}});
        } else {
            res.status(500);
        }
    }
    res.status(200).json({data: {guesses: []}});
})

router.get('/guesses/:showId', (req, res) => {
    console.log('GET => /guesses/:date');
    
    
})

// GET /guesses/:guessId : get specific guess
router.get('/guesses/:guessId', (req, res) => {
    console.log('GET => /guesses/:guessId');
    res.status(200).json({data: {}});
})

// POST /guesess : create guess for user
router.post('/guesses', (req, res) => {
    console.log('POST => /guesses');
    const body = req.body;
    if (!body.hasOwnProperty('username')) {
        res.status(400).json({error: "Missing username"});
    } else if (!body.hasOwnProperty('date')) {
        res.status(400).json({error: "Missing date"});
    } else if (!body.hasOwnProperty('song')) {
        res.status(400).json({error: "Missing song"});
    } else {
        const username = body.username;
        const date = body.date;
        const song = body.song;
        // validate username, date, & song

        // try saving song
        // succes
        // fail (already saved by someone else)
    }
})

// DELETE /guesses/:guessId : delete existing guess
router.delete('/guesses/:guessId', (req, res) => {
    console.log('DELETE => /guesses/:guessId');
    res.status(200)
})

export default router;