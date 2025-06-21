const express = require('express');
const router = express.Router();
const getRestakers = require('../controllers/restakerController');

router.get('/', getRestakers);

module.exports = router;    