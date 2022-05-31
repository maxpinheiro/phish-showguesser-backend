import { Router } from 'express'
const router = Router()

import { getAllUsers, getUserById, attemptLogin, createUser, getUserListByIds } from '../services/userService';

// middleware
/*router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});*/

// GET /users : get all users
router.get('/', (req, res) => {
    const { userIds } = req.query;
    if (userIds) {
        console.log(`GET => /users?userIds=${userIds.toString()}`);
        getUserListByIds(userIds.toString().split('_'))
            .then(users => {
                if (users) {
                    res.status(200).json({users});
                } else {
                    res.status(500);
                }
            });
    } else {
        console.log('GET => /users');
        getAllUsers()
            .then(users => {
                if (users) {
                    res.status(200).json({users});
                } else {
                    res.status(500);
                }
            });
    }
})

// GET /users/:userId : get a single user
router.get('/:userId', (req, res) => {
    if (!req.params.hasOwnProperty('userId')) {
        res.status(400).json({error: 'Missing user id'});
    } else {
        const userId = req.params.userId;
        console.log(`GET => /users/{${userId}}`);   
        getUserById(userId)
            .then(user => {
                if (user) {
                    res.status(200).json({user});
                } else {
                    res.status(404).json({error: 'User not found.'});
                }    
            });     
    }
})

// POST /users : create new user (ie signup)
// request body: {username, password}
router.post('/', (req, res) => {
    console.log('POST => /users');
    const { username, password } = req.body;
    if (username && password) {
        createUser(username, password)
            .then(newUser => {
                if (newUser) {
                    res.status(200).json({user: newUser});
                } else if (newUser === null) {
                    res.status(409).json({error: 'Username taken.'});
                } else {
                    res.status(500);
                }
            });
    } else {
        res.status(400).json({error: 'Missing username and/or password.'});
    }
})

// POST /users/login : attempt login with credentials
router.post('/login', (req, res) => {
    console.log('POST => /users/login');
    console.log(req.body);
    const { username, password } = req.body;
    console.log(`#[${username}]]-[${password}]#`);
    if (!username) {
        res.status(400).json({error: "Missing username"});
    } else if (!password) {
        res.status(400).json({error: "Missing password"});
    } else {
        attemptLogin(username, password)
            .then(result => {
                if (result instanceof Object) {
                    res.status(200).json({user: result});
                } else if (result === 'incorrect password') {
                    res.status(401).json({error: 'Incorrect password.'});
                } else if (result === 'incorrect username') {
                    res.status(404).json({error: 'Username not found.'});
                } else {
                    res.status(500);
                }
            });
    }
})

export default router;