const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 5000;


app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'client/build')));


app.listen(port, () => console.log(`App listening on port ${port}!`));