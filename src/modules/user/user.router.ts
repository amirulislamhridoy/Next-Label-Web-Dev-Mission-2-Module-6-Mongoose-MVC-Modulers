import express from "express";
import { createUser, findUserById, findUserByMyId, getUser } from "./user.controller";
const router = express.Router();

router.get('/', getUser);
router.get('/:id', findUserById)
router.get('/my/:id', findUserByMyId)

router.post('/create-user', createUser)

export default router;