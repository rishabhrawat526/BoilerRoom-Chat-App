const express = require('express');
const {sendMessages,getMessages} = require('./../controllers/message.controller')
const router= express.Router();
const protectRoute = require('./../middleware/protectRoute')
router.get('/:id',protectRoute,getMessages)
router.post('/send/:id',protectRoute,sendMessages)   
module.exports = router;