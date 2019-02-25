var express = require('express');
var app = express();

app.use(express.static(__dirname +'/client'))
const port = 3000

app.get('/', (req, res) => res.sendFile(__dirname +'/index.html'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
