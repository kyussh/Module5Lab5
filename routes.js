const express = require('express');
const controller = require('../controllers/controller')
const router = express.Router();
 
// adding
router.get('/add', (req, res) => {
    controller.addNumbers(req, res)
})

// subtract
router.get('/subtract', (req, res) => {
    controller.subtractNumbers(req, res)
})

// dviding
router.get('/divide', (req, res) => {
    controller.divideNumbers(req, res)
})

// multiplication
router.get('/multiply', (req, res) => {
    controller.multiplyNumbers(req, res)
})

module.exports = router;