import { NextFunction, Request, Response, urlencoded } from 'express';
import {createUserToDB, getUsersToDB, getUserById, getUserByMyId} from './user.service';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    // patter
    // route => contoler => service
    const data = req.body
    const user = await createUserToDB(data)
    res.status(200).json({
        status: 'success',
        data: user
    })
}
const getUser = async(req:Request, res:Response) => {
    const users = await getUsersToDB()
    res.status(200).json({
        status: 'success',
        data:users
    })
}
const findUserById = async (req:Request, res:Response) => {
    const {id} = req.params
    // console.log('params', req.params)
    const user = await getUserById(id)
    res.status(200).json({
        status:'success',
        data:user
    })
}
const findUserByMyId = async(req:Request, res:Response) => {
    const {id} = req.params
    const user = await getUserByMyId(id)
    res.status(200).json({
        status: 'success',
        data: user
    })
}
export {createUser, getUser, findUserById, findUserByMyId}