const express = require('express');
const app = express();
const port = 3001;

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => console.log(`Listening on port ${port}!`));
