import { Router } from 'express'
const router = Router()
import { getAllScores, getScoresForRun, getScoresForUser, getScoresForUserForRun } from '../services/scoreService';

// middleware
/*router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});*/

// GET /scores : get all scores
// QUERY PARAMS:
//   - userId: get all scores for user
//   - runId: get all scores for a run
//   - userId & runId: get all scores for a user for a run
router.get('/', (req, res) => {
    const { runId, userId } = req.query;
    if (runId && userId) { // get all scores for a user for a run
        console.log(`GET => /scores?runId=${runId}&userId=${userId}`);
        getScoresForUserForRun(userId.toString(), runId.toString())
            .then(scores => {
                if (scores) {
                    res.status(200).json({scores});
                } /* else if ('run not found') {
                    res.status(404).json({error: 'Run not found.'});
                } */ else {
                    res.status(500);
                }
        });
    } else if (runId) { // get all scores for a run
        console.log(`GET => /scores?runId=${runId}`);
        getScoresForRun(runId.toString())
            .then(scores => {
                if (scores) {
                    res.status(200).json({scores});
                } else {
                    res.status(500);
                }
        });
    } else if (userId) { // get all scores for a user
        console.log(`GET => /scores?userId=${userId}`);
        getScoresForUser(userId.toString())
            .then(scores => {
                if (scores) {
                    res.status(200).json({scores});
                } else {
                    res.status(500);
                }
        });
    } else { // get all scores
        console.log('GET => /scores');
        getAllScores()
            .then(scores => {
                if (scores) {
                    res.status(200).json({scores});
                } else {
                    res.status(500);
                }
        });
    }
    // scores?runId={runId} : guesses for specific show
})

// GET /scores/ranking?runId={runId}: get point rankings for a run (for all users)
router.get('/ranking', (req, res) => {
    console.log('GET => /scores/ranking');
    if (!req.query.hasOwnProperty('runId')) {
        res.status(400).json({error: "Missing run id"});
    } else {
        const runId = req.query.runId;
    }
})

// POST /scores : add new point for user
router.post('/', (req, res) => {
    console.log('POST => /scores');
    const { userId, runId, scores, songName } = req.body;
    if (!userId) {
        res.status(400).json({error: "Missing user id"});
    } else if (!runId) {
        res.status(400).json({error: "Missing run id"});
    } else if (!scores) {
        res.status(400).json({error: "Missing scores amount"});
    } else if (!songName) {
        res.status(400).json({error: "Missing song name"});
    } else {
        
    }
})

export default router;
