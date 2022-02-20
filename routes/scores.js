import { Router } from 'express'
const router = Router()

// middleware
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

// GET /scores : get all scores
router.get('/scores', (req, res) => {
    console.log('GET => /scores');
    res.status(200).json({data: {scores: []}});
})

// GET /scores/:userId : get all scores for user
router.get('/scores/:userId', (req, res) => {
    console.log('GET => /scores/:userId');
    res.status(200).json({data: {scores: []}});
})

// POST /scores/:userId : add new score for user
router.post('/scores/:userId', (req, res) => {
    console.log('POST => /scores/:userId');
    if ('success') {
        res.status(200);
    } else {
        res.status(500);
    }
})

export default router;