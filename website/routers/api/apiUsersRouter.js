const express = require('express');
const router = express.Router();
const usersController = require("../../controllers/api/apiUsersController");

router.get("/", usersController.users);
router.get("/:id", usersController.detail);

module.exports = router;