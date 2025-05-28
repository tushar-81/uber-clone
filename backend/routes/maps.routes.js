const express=require('express');
const router=express.Router();
const { query } = require('express-validator');
const authMiddleware= require('../middlewares/auth.middleware');
const mapsController = require('../controllers/maps.controller');

router.get('/get-coordinates', query('address').notEmpty().withMessage('Address is required'), authMiddleware.authUser , mapsController.getCoordinate);
 
router.get('/get-distance-time', [query('origin').notEmpty().withMessage('Origin is required'), query('destination').notEmpty().withMessage('Destination is required')], authMiddleware.authUser , mapsController.getDistanceTime);


router.get('/get-suggestions', query('address').notEmpty().withMessage('Address is required'), authMiddleware.authUser , mapsController.getSuggestions);

module.exports=router;