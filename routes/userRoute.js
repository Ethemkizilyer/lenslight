import express from 'express';
import * as userController from '../controllers/userController.js';
import * as authMiddleware from '../middlewares/authmiddleware.js'

const router = express.Router();

router.route('/register').post(userController.createUser)  // localhost / users / register şeklinde bir url ye gidecek 
router.route('/login').post(userController.loginUser) 
router.route('/dashboard').get(authMiddleware.authenticateToken,userController.getDashboardPage)  
router.route('/').get(authMiddleware.authenticateToken,userController.getAllUsers) 
router.route('/:id').get(authMiddleware.authenticateToken,userController.getAUser) 


export default router;
