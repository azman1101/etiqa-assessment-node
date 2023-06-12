const express = require('express');

const router = express.Router();
const c = require('../controllers');

// Route Open

router.get('/', c.general.index);

router.get('/freelancer', c.freelancer.index);
router.post('/freelancer', c.freelancer.create);
router.put('/freelancer/:id', c.freelancer.update);
router.delete('/freelancer/:id', c.freelancer.destroy);

module.exports = router;
