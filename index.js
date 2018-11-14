const express = require('express');
const app = express();
const applyMock = require('./mock.js');

const port  = process.argv[2] ? process.argv[2] : 3000;

try {
  applyMock(app);
} catch (e) {
  console.log(e);
}

app.listen(port, () => {
  console.log('Example app listening at http://127.0.0.1:%s', port);
});