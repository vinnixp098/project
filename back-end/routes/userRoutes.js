import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController.js';

router.get('/usuarios', UserController.getAllUsers);
router.post('/editar-nome', UserController.editUserById);
router.post('/criar-usuario', UserController.createUSer);
router.post('/deletar-usuario', UserController.deleteUSerById);

export default router;
