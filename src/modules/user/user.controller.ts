import { NextFunction, Request, Response, urlencoded } from 'express';
import {createUserToDB, getUsersToDB} from './user.service';

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
export {createUser, getUser}