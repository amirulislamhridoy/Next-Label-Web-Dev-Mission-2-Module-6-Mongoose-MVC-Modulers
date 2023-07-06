import { Request, Response, NextFunction } from "express";
import { getAllUsers, createUserService,findUserByIdService, findUserByMyIdService } from "./user.service";

const getUsers = async (req:Request, res:Response, next:NextFunction) => {
    const users = await getAllUsers();
    res.status(200).json({
        status: "success",
        data: users
    })
}
const createUser = async(req:Request, res: Response) => {
    const user = req.body;
    const data = await createUserService(user)
    res.status(200).json({
        status: 'success',
        data
    })
}
const findUserById = async(req:Request, res:Response) => {
    const {id} = req.params
    const user = await findUserByIdService(id)
    res.status(200).json({
        status: 'success',
        data:user
    })
}
const findUserByMyId = async(req:Request, res:Response) => {
    const {id} = req.params
    const user = await findUserByMyIdService(id)
    res.status(200).json({
        status: 'success',
        data:user
    })
}

export {getUsers, createUser,findUserById, findUserByMyId}