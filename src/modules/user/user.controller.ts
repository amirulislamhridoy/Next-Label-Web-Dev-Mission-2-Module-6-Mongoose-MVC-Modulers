import express, { NextFunction, Request, Response, urlencoded } from 'express';
import createUserToDo from './user.service';
import createUserToDB from './user.service';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    // patter
    // route => contoler => service
    const user = await createUserToDB()
    res.status(200).json({
        status: 'success',
        data: user
    })
}

export {createUser}