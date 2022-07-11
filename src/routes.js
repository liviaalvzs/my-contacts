const { Router } = require('express');

const contactController = require('./app/controllers/contactController');

const router = Router();

router.get('/contacts', contactController.index);
router.get('/contacts/:id', contactController.show);

module.exports = router;
