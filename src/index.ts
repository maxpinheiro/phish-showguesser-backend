import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { songs } from './songs';

import songRouter from './routes/guesses';
import userRouter from './routes/users';
import scoreRouter from './routes/scores';
import runRouter from './routes/runs';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.send('Test')
})

// GET /songs : get all songs
app.get('/songs', (req, res) => {
    console.log('GET => /songs');
    res.status(200).json({data: {songs}});
})

app.use('/runs', runRouter);

app.use('/guesses', songRouter);

app.use('/users', userRouter);

app.use('/scores', scoreRouter);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}...`)
})