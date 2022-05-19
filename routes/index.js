var express = require('express');
var router = express.Router();

router.use("/user", require('./users'));
router.use("/cars", require('./cars'));

module.exports = router;