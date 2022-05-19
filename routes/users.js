var express = require('express');
var router = express.Router();

const user = require("../controller/usserController");
const superAdmin = require("../middleware/mainAdmin");
const auth = require("../middleware/auth");

router.post("/regis", user.regisMember);
router.post("/regisadmin",superAdmin ,user.regisAdmin);
router.post("/login", user.login);
router.get("/alluser", user.getAllUser);
router.get("/datauser",auth, user.dataUser);
module.exports = router;