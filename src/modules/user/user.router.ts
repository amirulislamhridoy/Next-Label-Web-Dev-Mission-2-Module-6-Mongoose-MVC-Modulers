import express from 'express';
import { createUser, findUserById, getUsers, findUserByMyId, getAdminUser } from './user.controller';

const router = express.Router()

router.get('/create-user', createUser)
// router.post('/create-user', createUser)

router.get('/', getUsers)
router.get('/my/:id', findUserByMyId)
router.get('/admin', getAdminUser)
router.get('/:id', findUserById)


export default router;