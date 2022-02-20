const express = require('express');
import {songs} from './songs';

const songRouter = require('./routes/guesses');
const userRouter = require('./routes/users');
const scoreRouter = require('./routes/scores');

const app = express();
const port = 5000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.send('Test')
})

// GET /songs : list all songs
app.get('/songs', (req, res) => {
    console.log('GET => /songs');
    res.status(200).json({data: {songs: songs}});
})

app.use('/guesses', songRouter);

app.use('/users', userRouter);

app.use('/scores', scoreRouter);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}...`)
})