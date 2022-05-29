import { Router } from 'express'
import { getAllRuns, getRunById } from '../services/runService';
const router = Router()

// middleware
/*router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});*/

// GET /runs : get all runs
router.get('/', (req, res) => {
    console.log('GET => /runs');
    getAllRuns()
        .then(runs => {
            if (runs) {
                res.status(200).json({runs});
            } else {
                res.status(500);
            }
        });
})

// GET /runs/:runId : get a specific run
router.get('/:runId', (req, res) => {
    console.log('GET => /runs/:userId');
    if (!req.params.hasOwnProperty('runId')) {
        res.status(400).json({error: "Missing run id"});
    } else {
        const runId = req.params.runId;
        getRunById(runId)
            .then(run => {
                if (run) {
                    res.status(200).json({run});
                } else {
                    res.status(404).json({error: 'Run not found'});
                }
            })
    }
    
})

export default router;
