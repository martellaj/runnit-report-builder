var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  console.log(req.query);
  res.render('preview', {
    previewHtml: '<h2>test</h2>'
  });
});

module.exports = router;