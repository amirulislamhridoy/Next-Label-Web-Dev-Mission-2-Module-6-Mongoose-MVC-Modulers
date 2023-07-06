import express from "express";
import { createUser, findUserById, findUserByMyId, getUser } from "./user.controller";
const router = express.Router();

router.get('/', createUser);
router.get('/:id', findUserById)
router.get('/my/:id', findUserByMyId)

router.post('/create', createUser);

export default router;