const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('*', (req, res, next) => {
  next();
});

app.use(express.static('dist'));

app.listen(8080, () => {
  console.log(`Server listening on port 8080`);
});
