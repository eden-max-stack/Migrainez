const express = require('express');
const router = express.Router();
const migraineDetectionController = require('../controllers/migraineDetectionController');

router.post('/', migraineDetectionController.detectMigraine);

module.exports = router;