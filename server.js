const express = require('express');

const router = express.Router();

router.get('/', logger, (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

//Logger: console.logs request method, url and time of operation.
function logger(req, res, next) {
  console.log(
    `This has been a ${req.method} request to ${req.url}. This operation happened at ${new Date()}`
  );

  next();
}



module.exports = router;
