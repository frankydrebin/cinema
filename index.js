var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
let movies = [
    {
        id: "1",
        name: "Terminator",
        director: "James Cameron",
        year: 1988,
    },
    {
        id: "2",
        name: "Terminator 2",
        director: "James Cameron",
        year: 1992
    },
    {
        id: "3",
        name: "Forrest Gump",
        director: "Robert Zemekis",
        year: 1994
    }

]


app.use(express.static(__dirname +'/client'))
const port = 3000

app.get('/', (req, res) => res.sendFile(__dirname +'/index.html'))

app.get('/api/movies', (req, res) => res.send(movies))

app.get('/api/movies/:id', (req, res) => {
    console.log(req.query);
    res.send(movies[req.params.id])
});

app.delete('/api/movies/:id', (req, res) => {
    console.log(req.params);
    movies.pop();
    res.sendStatus(200); 
});

// app.delete('/api/movies/:id', (req, res) => {
//     console.log(req.params);
//     movies.pop();
//     res.sendStatus(200); 
// });

app.post('/api/movies', (req, res) => {
    console.log(req.body);
    res.sendStatus(200); 
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
