import { Router } from 'express'
const router = Router()

// middleware
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

// GET /users : list all users
router.get('/users', (req, res) => {
    console.log('GET => /users');
    res.status(200).json({data: {users: []}});
})

// GET /users/:userId
router.get('/users/:userId', (req, res) => {
    console.log('GET => /users/:userId');
    const user = {};
    if (user) {
        res.status(200).json({data: {user}});
    } else {
        res.status(404).json({error: 'Username not found.'});
    }    
})

// GET /users/:userId/guesses : get all guesses for user
router.get('/users/:userId/guesses', (req, res) => {
    console.log('GET => /users/:userId/guesses');
})

// GET /users/:userId/scores : get all scores for user
router.get('/users/:userId/scores', (req, res) => {
    console.log('GET => /users/:userId/scores');
})

// POST /users : create new user (ie signup)
router.post('/users', (req, res) => {
    console.log('POST => /users');
    if ('success') {
        res.status(200);
    } else if ('username taken') {
        res.status(409).json({error: 'Username taken.'});
    } else {
        res.status(500);
    }
    
})

// CONNECT /users : attempt login with credentials
router.connect('/users', (req, res) => {
    console.log('CONNECT => /users');
    const body = req.body;
    if (!body.hasOwnProperty('username')) {
        res.status(400).json({error: "Missing username"});
    } else if (!body.hasOwnProperty('password')) {
        res.status(400).json({error: "Missing password"});
    } else {
        const username = body.username;
        const password = body.password;
        
        if ('success') {
            res.status(200).json({success: true});
        } else if ('incorrect password') {
            res.status(401).json({error: 'Invalid password.'});
        } else if ('incorrect username') {
            res.status(404).json({error: 'Username not found.'});
        } else {
            res.status(500);
        }
    }
})

export default router;