const express = require('express');
const router = express.Router();
const userMiddleware = require('../middleware/userMiddleware')

/* GET users listing. */
router.get('/',[userMiddleware.getUser] , function(req, res, next) {
  const { userList } = req
  res.send({userList: userList});
});

module.exports = router;
