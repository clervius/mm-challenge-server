const express = require('express');
const router = express.Router();



router.get('/all', (req, res) => res.json({ users: 'they will come'}));

module.exports = router;